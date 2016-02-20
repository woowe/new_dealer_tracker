System.register(["angular2/core", "./Salesforce.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Salesforce_service_1;
    var ProjectService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Salesforce_service_1_1) {
                Salesforce_service_1 = Salesforce_service_1_1;
            }],
        execute: function() {
            ProjectService = (function () {
                function ProjectService(_salesforceService, _ngZone) {
                    var _this = this;
                    this._salesforceService = _salesforceService;
                    this._ngZone = _ngZone;
                    this.projectListLoaded = new core_1.EventEmitter();
                    this.projects = new Array();
                    console.log("Project service loaded: ", this);
                    this._salesforceService.loggedIn.subscribe(function (data) {
                        if (data) {
                            _this.loadProjectList();
                        }
                    });
                }
                ProjectService.prototype.loadProjectList = function () {
                    this.projectListLoaded.emit(false);
                    var query_string = "SELECT Name, Projected_Go_Live_Date__c, Trans_Call_Date__c, pse__Stage__c, Id FROM pse__Proj__c " +
                        ("WHERE Builder__c = '" + this._salesforceService.user.builder_id + "'");
                    var self = this;
                    console.log(query_string);
                    this._salesforceService.conn.query(query_string, function (err, res) {
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
                        self._ngZone.run(function () { });
                        console.log(self.projects);
                        self.projectListLoaded.emit(true);
                    });
                };
                ProjectService.prototype.selectProject = function (project) {
                    for (var i = 0; i < this.projects.length; ++i) {
                        if (project.id == this.projects[i].id) {
                            this.selected_project = i;
                            console.log("Selected idx: ", this.selected_project);
                            break;
                        }
                    }
                };
                ProjectService.prototype.loadProject = function () {
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
                };
                ProjectService.prototype.loadProjectTasks = function () {
                    // console.log("Loading projct tasks");
                    var self = this;
                    this._salesforceService.conn.query("SELECT Due_Date__c, Name, Id, pse__Status__c FROM pse__Project_Task__c WHERE Project_Name__c = '" + this.projects[this.selected_project].name + "'", function (err, res) {
                        if (err) {
                            console.error("Error loading project tasks: ", err);
                            return;
                        }
                        self.projects[self.selected_project].tasks = Array();
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
                        self._ngZone.run(function () { });
                    });
                };
                ProjectService.prototype.loadProjectDates = function () {
                    var self = this;
                    this._salesforceService.conn.query("SELECT Planned_Go_Live_Date__c, Actual_Go_Live_Date1__c FROM pse__Proj__c WHERE Id = '" + this.projects[this.selected_project].id + "' ", function (err, res) {
                        if (err) {
                            console.error("Error loading dates: ", err);
                            return;
                        }
                        self.projects[self.selected_project].dates.updated_golive = Date.parse(res.records[0].Planned_Go_Live_Date__c);
                        self.projects[self.selected_project].dates.actual_golive = Date.parse(res.records[0].Actual_Go_Live_Date1__c);
                        self._ngZone.run(function () { });
                    });
                };
                ProjectService.prototype.loadProjectInfo = function () {
                    var self = this;
                    //console.log(this.projects[this.selected_project]);
                    this._salesforceService.conn.query("SELECT Dealer_City_Location__c, Dealer_State_Location__c, Zip__c FROM pse__Proj__c WHERE Id = '" + this.projects[this.selected_project].id + "' ", function (err, res) {
                        if (err) {
                            console.error("Error loading info: ", err);
                            return;
                        }
                        self.projects[self.selected_project].info = {
                            city: res.records[0].Dealer_City_Location__c,
                            state: res.records[0].Dealer_State_Location__c,
                            zip: res.records[0].Zip__c
                        };
                        self._ngZone.run(function () { });
                    });
                };
                ProjectService.prototype.loadProjectMilestones = function () {
                    var self = this;
                    this._salesforceService.conn.query("SELECT Id, Asset_MRR__c, Name, pse__Status__c FROM pse__Milestone__c WHERE Child_Project__c = '" + this.projects[this.selected_project].id + "' AND Product_Class__c = 'Website'", function (err, res) {
                        if (err) {
                            console.error("Error loading milestones: ", err);
                            return;
                        }
                        self.projects[self.selected_project].milestones = new Array();
                        for (var i = 0; i < res.records.length; ++i) {
                            var record = res.records[i];
                            self.projects[self.selected_project].milestones.push({
                                price: record.Asset_MRR__c,
                                name: record.Name,
                                id: record.Id,
                                status: record.pse__Status__c
                            });
                        }
                        self._ngZone.run(function () { });
                    });
                };
                ProjectService.prototype.loadProjectContacts = function () {
                    var self = this;
                    //console.log(this.projects[this.selected_project]);
                    this._salesforceService.conn.query("SELECT Contact_Name__r.Name, Contact_Name__r.Phone, Contact_Name__r.Email " +
                        ("FROM Project_Customer_Contact__c WHERE Project__c = '" + this.projects[this.selected_project].id + "'"), function (err, res) {
                        self.projects[self.selected_project].contacts = new Array();
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
                        self._ngZone.run(function () { });
                    });
                };
                ProjectService.prototype.loadProjectTeam = function () {
                    var self = this;
                    //console.log(this.projects[this.selected_project]);
                    this._salesforceService.conn.query("SELECT Builder__r.Email, Builder__r.Name, DIS__r.Email, DIS__r.Name," +
                        " Content_Writer__r.Email, Content_Writer__r.Name, Website_Designer__r.Email, Website_Designer__r.Name " +
                        (" FROM pse__Proj__c WHERE Id = '" + this.projects[this.selected_project].id + "' "), function (err, res) {
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
                        self._ngZone.run(function () { });
                    });
                };
                ProjectService.prototype.loadProjectParentCases = function () {
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Salesforce_service_1.SalesforceService, core_1.NgZone])
                ], ProjectService);
                return ProjectService;
            })();
            exports_1("ProjectService", ProjectService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1Byb2plY3Quc2VydmljZS50cyJdLCJuYW1lcyI6WyJQcm9qZWN0U2VydmljZSIsIlByb2plY3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RMaXN0IiwiUHJvamVjdFNlcnZpY2Uuc2VsZWN0UHJvamVjdCIsIlByb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0IiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RUYXNrcyIsIlByb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0RGF0ZXMiLCJQcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdEluZm8iLCJQcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdE1pbGVzdG9uZXMiLCJQcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdENvbnRhY3RzIiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RUZWFtIiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RQYXJlbnRDYXNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBTUlBLHdCQUFtQkEsa0JBQXFDQSxFQUFTQSxPQUFlQTtvQkFOcEZDLGlCQXdRQ0E7b0JBbFFzQkEsdUJBQWtCQSxHQUFsQkEsa0JBQWtCQSxDQUFtQkE7b0JBQVNBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQUpoRkEsc0JBQWlCQSxHQUEwQkEsSUFBSUEsbUJBQVlBLEVBQVdBLENBQUNBO29CQUN2RUEsYUFBUUEsR0FBZUEsSUFBSUEsS0FBS0EsRUFBT0EsQ0FBQ0E7b0JBSXBDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUM5Q0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFJQTt3QkFDNUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBOzRCQUNQQSxLQUFJ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QyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLOzZCQUNsRCxDQUFDO3dCQUNOLENBQUM7d0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV2RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQ0pBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFFRFYsK0NBQXNCQSxHQUF0QkE7Z0JBRUFXLENBQUNBO2dCQXZRTFg7b0JBQUNBLGlCQUFVQSxFQUFFQTs7bUNBd1FaQTtnQkFBREEscUJBQUNBO1lBQURBLENBeFFBLEFBd1FDQSxJQUFBO1lBeFFELDJDQXdRQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1Byb2plY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7U2FsZXNmb3JjZVNlcnZpY2V9IGZyb20gXCIuL1NhbGVzZm9yY2Uuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2Uge1xuICAgIHByb2plY3RMaXN0TG9hZGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgcHJvamVjdHM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgc2VsZWN0ZWRfcHJvamVjdDogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfc2FsZXNmb3JjZVNlcnZpY2U6IFNhbGVzZm9yY2VTZXJ2aWNlLCBwdWJsaWMgX25nWm9uZTogTmdab25lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdCBzZXJ2aWNlIGxvYWRlZDogXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS5sb2dnZWRJbi5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RMaXN0KCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0TG9hZGVkLmVtaXQoZmFsc2UpO1xuICAgICAgICB2YXIgcXVlcnlfc3RyaW5nID0gYFNFTEVDVCBOYW1lLCBQcm9qZWN0ZWRfR29fTGl2ZV9EYXRlX19jLCBUcmFuc19DYWxsX0RhdGVfX2MsIHBzZV9fU3RhZ2VfX2MsIElkIEZST00gcHNlX19Qcm9qX19jIGAgK1xuICAgICAgICAgICAgYFdIRVJFIEJ1aWxkZXJfX2MgPSAnJHt0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS51c2VyLmJ1aWxkZXJfaWR9J2A7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnlfc3RyaW5nKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShxdWVyeV9zdHJpbmcsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdExpc3RMb2FkZWQuZW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG9uZURheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMucmVjb3Jkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gcmVzLnJlY29yZHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdERhdGUgPSBEYXRlLnBhcnNlKHJlY29yZC5Qcm9qZWN0ZWRfR29fTGl2ZV9EYXRlX19jKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZERhdGUgPSBEYXRlLnBhcnNlKHJlY29yZC5UcmFuc19DYWxsX0RhdGVfX2MpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsX2dvX2xpdmU6IGZpcnN0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc19jYWxsX2RhdGU6IHNlY29uZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZTogcmVjb3JkLnBzZV9fU3RhZ2VfX2MsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c19iZXR3ZWVuOiBNYXRoLnJvdW5kKChmaXJzdERhdGUgLSBzZWNvbmREYXRlKSAvIChvbmVEYXkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNfbGVmdDogTWF0aC5yb3VuZCgoZmlyc3REYXRlIC0gRGF0ZS5ub3coKSkgLyAob25lRGF5KSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5fbmdab25lLnJ1bigoKSA9PiB7IH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5wcm9qZWN0cyk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RMaXN0TG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PSB0aGlzLnByb2plY3RzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9wcm9qZWN0ID0gaTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIGlkeDogXCIsIHRoaXMuc2VsZWN0ZWRfcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0udGFza3MpXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0VGFza3MoKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uZGF0ZXMpXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0RGF0ZXMoKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uaW5mbylcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3RJbmZvKCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLm1pbGVzdG9uZXMpXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0TWlsZXN0b25lcygpO1xuICAgICAgICBpZiAoIXRoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS5jb250YWN0cylcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3RDb250YWN0cygpO1xuICAgICAgICBpZiAoIXRoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS50ZWFtKVxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdFRlYW0oKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uY2FzZXMpXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0UGFyZW50Q2FzZXMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdFRhc2tzKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgcHJvamN0IHRhc2tzXCIpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLmNvbm4ucXVlcnkoXG4gICAgICAgICAgICBgU0VMRUNUIER1ZV9EYXRlX19jLCBOYW1lLCBJZCwgcHNlX19TdGF0dXNfX2MgRlJPTSBwc2VfX1Byb2plY3RfVGFza19fYyBXSEVSRSBQcm9qZWN0X05hbWVfX2MgPSAnJHt0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0ubmFtZX0nYCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBwcm9qZWN0IHRhc2tzOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS50YXNrcyA9IEFycmF5PGFueT4oKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJlY29yZHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHJlcy5yZWNvcmRzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS50YXNrcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZV9kYXRlOiByZWNvcmQuRHVlX0RhdGVfX2MsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlY29yZC5wc2VfX1N0YXR1c19fY1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGFza3MpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5fbmdab25lLnJ1bigoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0RGF0ZXMoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShcbiAgICAgICAgICAgIGBTRUxFQ1QgUGxhbm5lZF9Hb19MaXZlX0RhdGVfX2MsIEFjdHVhbF9Hb19MaXZlX0RhdGUxX19jIEZST00gcHNlX19Qcm9qX19jIFdIRVJFIElkID0gJyR7dGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLmlkfScgYCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBkYXRlczogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLmRhdGVzLnVwZGF0ZWRfZ29saXZlID0gRGF0ZS5wYXJzZShyZXMucmVjb3Jkc1swXS5QbGFubmVkX0dvX0xpdmVfRGF0ZV9fYyk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLmRhdGVzLmFjdHVhbF9nb2xpdmUgPSBEYXRlLnBhcnNlKHJlcy5yZWNvcmRzWzBdLkFjdHVhbF9Hb19MaXZlX0RhdGUxX19jKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdEluZm8oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0pO1xuICAgICAgICB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS5jb25uLnF1ZXJ5KFxuICAgICAgICAgICAgYFNFTEVDVCBEZWFsZXJfQ2l0eV9Mb2NhdGlvbl9fYywgRGVhbGVyX1N0YXRlX0xvY2F0aW9uX19jLCBaaXBfX2MgRlJPTSBwc2VfX1Byb2pfX2MgV0hFUkUgSWQgPSAnJHt0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uaWR9JyBgLFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGluZm86IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS5pbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBjaXR5OiByZXMucmVjb3Jkc1swXS5EZWFsZXJfQ2l0eV9Mb2NhdGlvbl9fYyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHJlcy5yZWNvcmRzWzBdLkRlYWxlcl9TdGF0ZV9Mb2NhdGlvbl9fYyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiByZXMucmVjb3Jkc1swXS5aaXBfX2NcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc2VsZi5fbmdab25lLnJ1bigoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0TWlsZXN0b25lcygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS5jb25uLnF1ZXJ5KFxuICAgICAgICAgICAgYFNFTEVDVCBJZCwgQXNzZXRfTVJSX19jLCBOYW1lLCBwc2VfX1N0YXR1c19fYyBGUk9NIHBzZV9fTWlsZXN0b25lX19jIFdIRVJFIENoaWxkX1Byb2plY3RfX2MgPSAnJHt0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uaWR9JyBBTkQgUHJvZHVjdF9DbGFzc19fYyA9ICdXZWJzaXRlJ2AsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgbWlsZXN0b25lczogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0ubWlsZXN0b25lcyA9IG5ldyBBcnJheTxhbnk+KCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5yZWNvcmRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSByZXMucmVjb3Jkc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0ubWlsZXN0b25lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiByZWNvcmQuQXNzZXRfTVJSX19jLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZWNvcmQucHNlX19TdGF0dXNfX2NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5fbmdab25lLnJ1bigoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0Q29udGFjdHMoKSB7XG5cblxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0pO1xuICAgICAgICB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS5jb25uLnF1ZXJ5KFxuICAgICAgICAgICAgYFNFTEVDVCBDb250YWN0X05hbWVfX3IuTmFtZSwgQ29udGFjdF9OYW1lX19yLlBob25lLCBDb250YWN0X05hbWVfX3IuRW1haWwgYCArXG4gICAgICAgICAgICBgRlJPTSBQcm9qZWN0X0N1c3RvbWVyX0NvbnRhY3RfX2MgV0hFUkUgUHJvamVjdF9fYyA9ICcke3RoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS5pZH0nYCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLmNvbnRhY3RzID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGJ1aWxkZXIgaW5mbzogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5yZWNvcmRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSByZXMucmVjb3Jkc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLmNvbnRhY3RzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLkNvbnRhY3RfTmFtZV9fci5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlY29yZC5Db250YWN0X05hbWVfX3IuRW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTogcmVjb3JkLkNvbnRhY3RfTmFtZV9fci5QaG9uZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5fbmdab25lLnJ1bigoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RUZWFtKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShcbiAgICAgICAgICAgIGBTRUxFQ1QgQnVpbGRlcl9fci5FbWFpbCwgQnVpbGRlcl9fci5OYW1lLCBESVNfX3IuRW1haWwsIERJU19fci5OYW1lLGAgK1xuICAgICAgICAgICAgYCBDb250ZW50X1dyaXRlcl9fci5FbWFpbCwgQ29udGVudF9Xcml0ZXJfX3IuTmFtZSwgV2Vic2l0ZV9EZXNpZ25lcl9fci5FbWFpbCwgV2Vic2l0ZV9EZXNpZ25lcl9fci5OYW1lIGAgK1xuICAgICAgICAgICAgYCBGUk9NIHBzZV9fUHJval9fYyBXSEVSRSBJZCA9ICcke3RoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS5pZH0nIGAsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS50ZWFtID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGJ1aWxkZXIgaW5mbzogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLnJlY29yZHNbMF0uQnVpbGRlcl9fcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGVhbS5idWlsZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzLnJlY29yZHNbMF0uQnVpbGRlcl9fci5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcy5yZWNvcmRzWzBdLkJ1aWxkZXJfX3IuRW1haWxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLnJlY29yZHNbMF0uRElTX19yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS50ZWFtLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXMucmVjb3Jkc1swXS5ESVNfX3IuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiByZXMucmVjb3Jkc1swXS5ESVNfX3IuRW1haWxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLnJlY29yZHNbMF0uQ29udGVudF9Xcml0ZXJfX3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLnRlYW0uY29udGVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlcy5yZWNvcmRzWzBdLkNvbnRlbnRfV3JpdGVyX19yLk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVzLnJlY29yZHNbMF0uQ29udGVudF9Xcml0ZXJfX3IuRW1haWxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzLnJlY29yZHNbMF0uV2Vic2l0ZV9EZXNpZ25lcl9fcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGVhbS5kZXNpZ24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXMucmVjb3Jkc1swXS5XZWJzaXRlX0Rlc2lnbmVyX19yLk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVzLnJlY29yZHNbMF0uV2Vic2l0ZV9EZXNpZ25lcl9fci5FbWFpbFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS50ZWFtKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdFBhcmVudENhc2VzKCkge1xuXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
