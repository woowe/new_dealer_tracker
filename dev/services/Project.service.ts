import {Injectable, Inject, EventEmitter, NgZone} from "angular2/core";
import {SalesforceService} from "./Salesforce.service";

@Injectable()
export class ProjectService {
    projectListLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();
    projects: Array<any> = new Array<any>();

    selected_project: any;
    constructor(public _salesforceService: SalesforceService, public _ngZone: NgZone) {
        console.log("Project service loaded: ", this);
        this._salesforceService.loggedIn.subscribe((data) => {
            if (data) {
                this.loadProjectList();
            }
        });
    }

    loadProjectList() {
        this.projectListLoaded.emit(false);
        var query_string = `SELECT Name, Projected_Go_Live_Date__c, Trans_Call_Date__c, pse__Stage__c, Id FROM pse__Proj__c ` +
            `WHERE Builder__c = '${this._salesforceService.user.builder_id}'`;
        var self = this;
        console.log(query_string);
        this._salesforceService.conn.query(query_string,
            function(err, res) {
                if (err) {
                    console.error(err, res);
                    self.projectListLoaded.emit(false);
                    return;
                }
                var oneDay = 24 * 60 * 60 * 1000;
                for (var i = 0; i < res.records.length; ++i) {
                    var record = res.records[i];
                    var firstDate = Date.parse(record.Projected_Go_Live_Date__c);
                    var secondDate = Date.parse(record.Trans_Call_Date__c);
                    self.projects.push({
                        name: record.Name,
                        dates: {
                            original_go_live: firstDate,
                            trans_call_date: secondDate
                        },
                        stage: record.pse__Stage__c,
                        id: record.Id,
                        days_between: Math.round((firstDate - secondDate) / (oneDay)),
                        days_left: Math.round((firstDate - Date.now()) / (oneDay))
                    });
                }

                self._ngZone.run(() => { });

                console.log(self.projects);

                self.projectListLoaded.emit(true);
            });
    }

    selectProject(project) {
        for (var i = 0; i < this.projects.length; ++i) {
            if (project.id == this.projects[i].id) {
                this.selected_project = i;
                console.log("Selected idx: ", this.selected_project);
                break;
            }
        }
    }

    loadProject() {
        if (!this.projects[this.selected_project].tasks)
            this.loadProjectTasks();
        if (!this.projects[this.selected_project].dates)
            this.loadProjectDates();
        if (!this.projects[this.selected_project].info)
            this.loadProjectInfo();
        if (!this.projects[this.selected_project].milestones)
            this.loadProjectMilestones();
        if (!this.projects[this.selected_project].contacts)
            this.loadProjectContacts();
        if (!this.projects[this.selected_project].team)
            this.loadProjectTeam();
        if (!this.projects[this.selected_project].cases)
            this.loadProjectParentCases();
    }

    loadProjectTasks() {
        // console.log("Loading projct tasks");
        var self = this;
        this._salesforceService.conn.query(
            `SELECT Due_Date__c, Name, Id, pse__Status__c FROM pse__Project_Task__c WHERE Project_Name__c = '${this.projects[this.selected_project].name}'`,
            function(err, res) {
                if (err) {
                    console.error("Error loading project tasks: ", err);
                    return;
                }

                self.projects[self.selected_project].tasks = Array<any>();

                for (var i = 0; i < res.records.length; ++i) {
                    var record = res.records[i];

                    self.projects[self.selected_project].tasks.push({
                        due_date: record.Due_Date__c,
                        name: record.Name,
                        id: record.Id,
                        status: record.pse__Status__c
                    });
                }

                // console.log(self.projects[self.selected_project].tasks);

                self._ngZone.run(() => { });
            }
        );
    }

    loadProjectDates() {
        var self = this;
        this._salesforceService.conn.query(
            `SELECT Planned_Go_Live_Date__c, Actual_Go_Live_Date1__c FROM pse__Proj__c WHERE Id = '${this.projects[this.selected_project].id}' `,
            function(err, res) {
                if (err) {
                    console.error("Error loading dates: ", err);
                    return;
                }
                self.projects[self.selected_project].dates.updated_golive = Date.parse(res.records[0].Planned_Go_Live_Date__c);
                self.projects[self.selected_project].dates.actual_golive = Date.parse(res.records[0].Actual_Go_Live_Date1__c);

                self._ngZone.run(() => { });
            }
        );
    }

    loadProjectInfo() {
        var self = this;
        //console.log(this.projects[this.selected_project]);
        this._salesforceService.conn.query(
            `SELECT Dealer_City_Location__c, Dealer_State_Location__c, Zip__c FROM pse__Proj__c WHERE Id = '${this.projects[this.selected_project].id}' `,
            function(err, res) {
                if (err) {
                    console.error("Error loading info: ", err);
                    return;
                }
                self.projects[self.selected_project].info = {
                    city: res.records[0].Dealer_City_Location__c,
                    state: res.records[0].Dealer_State_Location__c,
                    zip: res.records[0].Zip__c
                };

                self._ngZone.run(() => { });
            }
        );
    }

    loadProjectMilestones() {
        var self = this;
        this._salesforceService.conn.query(
            `SELECT Id, Asset_MRR__c, Name, pse__Status__c FROM pse__Milestone__c WHERE Child_Project__c = '${this.projects[this.selected_project].id}' AND Product_Class__c = 'Website'`,
            function(err, res) {
                if (err) {
                    console.error("Error loading milestones: ", err);
                    return;
                }

                self.projects[self.selected_project].milestones = new Array<any>();

                for (var i = 0; i < res.records.length; ++i) {
                    var record = res.records[i];

                    self.projects[self.selected_project].milestones.push({
                        price: record.Asset_MRR__c,
                        name: record.Name,
                        id: record.Id,
                        status: record.pse__Status__c
                    });
                }

                self._ngZone.run(() => { });
            }
        );
    }

    loadProjectContacts() {



        var self = this;
        //console.log(this.projects[this.selected_project]);
        this._salesforceService.conn.query(
            `SELECT Contact_Name__r.Name, Contact_Name__r.Phone, Contact_Name__r.Email ` +
            `FROM Project_Customer_Contact__c WHERE Project__c = '${this.projects[this.selected_project].id}'`,
            function(err, res) {
                self.projects[self.selected_project].contacts = new Array<any>();
                if (err) {
                    console.error("Error loading builder info: ", err);
                    return;
                }

                for (var i = 0; i < res.records.length; ++i) {
                    var record = res.records[i];
                    self.projects[self.selected_project].contacts.push({
                        name: record.Contact_Name__r.Name,
                        email: record.Contact_Name__r.Email,
                        phone: record.Contact_Name__r.Phone
                    });
                }

                console.log(res);

                self._ngZone.run(() => { });
            }
        );

    }

    loadProjectTeam() {
        var self = this;
        //console.log(this.projects[this.selected_project]);
        this._salesforceService.conn.query(
            `SELECT Builder__r.Email, Builder__r.Name, DIS__r.Email, DIS__r.Name,` +
            ` Content_Writer__r.Email, Content_Writer__r.Name, Website_Designer__r.Email, Website_Designer__r.Name ` +
            ` FROM pse__Proj__c WHERE Id = '${this.projects[this.selected_project].id}' `,
            function(err, res) {
                self.projects[self.selected_project].team = {};

                if (err) {
                    console.error("Error loading builder info: ", err);
                    return;
                }

                if (res.records[0].Builder__r) {
                    self.projects[self.selected_project].team.builder = {
                        name: res.records[0].Builder__r.Name,
                        email: res.records[0].Builder__r.Email
                    };
                }

                if (res.records[0].DIS__r) {
                    self.projects[self.selected_project].team.data = {
                        name: res.records[0].DIS__r.Name,
                        email: res.records[0].DIS__r.Email
                    };
                }

                if (res.records[0].Content_Writer__r) {
                    self.projects[self.selected_project].team.content = {
                        name: res.records[0].Content_Writer__r.Name,
                        email: res.records[0].Content_Writer__r.Email
                    };
                }

                if (res.records[0].Website_Designer__r) {
                    self.projects[self.selected_project].team.design = {
                        name: res.records[0].Website_Designer__r.Name,
                        email: res.records[0].Website_Designer__r.Email
                    };
                }

                console.log(self.projects[self.selected_project].team);

                self._ngZone.run(() => { });
            }
        );
    }

    loadProjectParentCases() {

    }
}
