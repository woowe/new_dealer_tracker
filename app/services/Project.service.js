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
                        this.loadProjectCases();
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
                ProjectService.prototype.loadProjectCases = function () {
                    var self = this;
                    //console.log(this.projects[this.selected_project]);
                    this._salesforceService.conn.query("SELECT Status, Subject FROM Case WHERE Project__r.Id = '" + this.projects[this.selected_project].id + "'", function (err, res) {
                        self.projects[self.selected_project].cases = new Array();
                        if (err) {
                            console.error("Error loading builder info: ", err);
                            return;
                        }
                        for (var i = 0; i < res.records.length; ++i) {
                            var record = res.records[i];
                            self.projects[self.selected_project].cases.push({
                                name: record.Subject,
                                status: record.Status,
                            });
                        }
                        console.log(res);
                        self._ngZone.run(function () { });
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1Byb2plY3Quc2VydmljZS50cyJdLCJuYW1lcyI6WyJQcm9qZWN0U2VydmljZSIsIlByb2plY3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RMaXN0IiwiUHJvamVjdFNlcnZpY2Uuc2VsZWN0UHJvamVjdCIsIlByb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0IiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RUYXNrcyIsIlByb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0RGF0ZXMiLCJQcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdEluZm8iLCJQcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdE1pbGVzdG9uZXMiLCJQcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdENvbnRhY3RzIiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RUZWFtIiwiUHJvamVjdFNlcnZpY2UubG9hZFByb2plY3RDYXNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBTUlBLHdCQUFtQkEsa0JBQXFDQSxFQUFTQSxPQUFlQTtvQkFOcEZDLGlCQTRSQ0E7b0JBdFJzQkEsdUJBQWtCQSxHQUFsQkEsa0JBQWtCQSxDQUFtQkE7b0JBQVNBLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQUpoRkEsc0JBQWlCQSxHQUEwQkEsSUFBSUEsbUJBQVlBLEVBQVdBLENBQUNBO29CQUN2RUEsYUFBUUEsR0FBZUEsSUFBSUEsS0FBS0EsRUFBT0EsQ0FBQ0E7b0JBSXBDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUM5Q0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFJQTt3QkFDNUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBOzRCQUNQQSxLQUFJQSxDQUFD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QUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0NBQzVDLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTztnQ0FDcEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNOzZCQUN4QixDQUFDLENBQUM7d0JBQ1AsQ0FBQzt3QkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUVqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQ0pBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkEzUkxYO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQTRSWkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQTVSQSxBQTRSQ0EsSUFBQTtZQTVSRCwyQ0E0UkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9Qcm9qZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tIFwiLi9TYWxlc2ZvcmNlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlIHtcbiAgICBwcm9qZWN0TGlzdExvYWRlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIHByb2plY3RzOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcblxuICAgIHNlbGVjdGVkX3Byb2plY3Q6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3NhbGVzZm9yY2VTZXJ2aWNlOiBTYWxlc2ZvcmNlU2VydmljZSwgcHVibGljIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3Qgc2VydmljZSBsb2FkZWQ6IFwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UubG9nZ2VkSW4uc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdExvYWRlZC5lbWl0KGZhbHNlKTtcbiAgICAgICAgdmFyIHF1ZXJ5X3N0cmluZyA9IGBTRUxFQ1QgTmFtZSwgUHJvamVjdGVkX0dvX0xpdmVfRGF0ZV9fYywgVHJhbnNfQ2FsbF9EYXRlX19jLCBwc2VfX1N0YWdlX19jLCBJZCBGUk9NIHBzZV9fUHJval9fYyBgICtcbiAgICAgICAgICAgIGBXSEVSRSBCdWlsZGVyX19jID0gJyR7dGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UudXNlci5idWlsZGVyX2lkfSdgO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5X3N0cmluZyk7XG4gICAgICAgIHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLmNvbm4ucXVlcnkocXVlcnlfc3RyaW5nLFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RMaXN0TG9hZGVkLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvbmVEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJlY29yZHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHJlcy5yZWNvcmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3REYXRlID0gRGF0ZS5wYXJzZShyZWNvcmQuUHJvamVjdGVkX0dvX0xpdmVfRGF0ZV9fYyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWNvbmREYXRlID0gRGF0ZS5wYXJzZShyZWNvcmQuVHJhbnNfQ2FsbF9EYXRlX19jKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbF9nb19saXZlOiBmaXJzdERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNfY2FsbF9kYXRlOiBzZWNvbmREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2U6IHJlY29yZC5wc2VfX1N0YWdlX19jLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNfYmV0d2VlbjogTWF0aC5yb3VuZCgoZmlyc3REYXRlIC0gc2Vjb25kRGF0ZSkgLyAob25lRGF5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzX2xlZnQ6IE1hdGgucm91bmQoKGZpcnN0RGF0ZSAtIERhdGUubm93KCkpIC8gKG9uZURheSkpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYucHJvamVjdHMpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0TGlzdExvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT0gdGhpcy5wcm9qZWN0c1tpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfcHJvamVjdCA9IGk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBpZHg6IFwiLCB0aGlzLnNlbGVjdGVkX3Byb2plY3QpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLnRhc2tzKVxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdFRhc2tzKCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLmRhdGVzKVxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdERhdGVzKCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLmluZm8pXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0SW5mbygpO1xuICAgICAgICBpZiAoIXRoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS5taWxlc3RvbmVzKVxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdE1pbGVzdG9uZXMoKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uY29udGFjdHMpXG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9qZWN0Q29udGFjdHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0udGVhbSlcbiAgICAgICAgICAgIHRoaXMubG9hZFByb2plY3RUZWFtKCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLmNhc2VzKVxuICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdENhc2VzKCk7XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RUYXNrcygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMb2FkaW5nIHByb2pjdCB0YXNrc1wiKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS5jb25uLnF1ZXJ5KFxuICAgICAgICAgICAgYFNFTEVDVCBEdWVfRGF0ZV9fYywgTmFtZSwgSWQsIHBzZV9fU3RhdHVzX19jIEZST00gcHNlX19Qcm9qZWN0X1Rhc2tfX2MgV0hFUkUgUHJvamVjdF9OYW1lX19jID0gJyR7dGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLm5hbWV9J2AsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcHJvamVjdCB0YXNrczogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGFza3MgPSBBcnJheTxhbnk+KCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5yZWNvcmRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSByZXMucmVjb3Jkc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGFza3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdWVfZGF0ZTogcmVjb3JkLkR1ZV9EYXRlX19jLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZWNvcmQucHNlX19TdGF0dXNfX2NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLnRhc2tzKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdERhdGVzKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLmNvbm4ucXVlcnkoXG4gICAgICAgICAgICBgU0VMRUNUIFBsYW5uZWRfR29fTGl2ZV9EYXRlX19jLCBBY3R1YWxfR29fTGl2ZV9EYXRlMV9fYyBGUk9NIHBzZV9fUHJval9fYyBXSEVSRSBJZCA9ICcke3RoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS5pZH0nIGAsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZGF0ZXM6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS5kYXRlcy51cGRhdGVkX2dvbGl2ZSA9IERhdGUucGFyc2UocmVzLnJlY29yZHNbMF0uUGxhbm5lZF9Hb19MaXZlX0RhdGVfX2MpO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS5kYXRlcy5hY3R1YWxfZ29saXZlID0gRGF0ZS5wYXJzZShyZXMucmVjb3Jkc1swXS5BY3R1YWxfR29fTGl2ZV9EYXRlMV9fYyk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLl9uZ1pvbmUucnVuKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RJbmZvKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShcbiAgICAgICAgICAgIGBTRUxFQ1QgRGVhbGVyX0NpdHlfTG9jYXRpb25fX2MsIERlYWxlcl9TdGF0ZV9Mb2NhdGlvbl9fYywgWmlwX19jIEZST00gcHNlX19Qcm9qX19jIFdIRVJFIElkID0gJyR7dGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLmlkfScgYCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBpbmZvOiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0uaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogcmVzLnJlY29yZHNbMF0uRGVhbGVyX0NpdHlfTG9jYXRpb25fX2MsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiByZXMucmVjb3Jkc1swXS5EZWFsZXJfU3RhdGVfTG9jYXRpb25fX2MsXG4gICAgICAgICAgICAgICAgICAgIHppcDogcmVzLnJlY29yZHNbMF0uWmlwX19jXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdE1pbGVzdG9uZXMoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShcbiAgICAgICAgICAgIGBTRUxFQ1QgSWQsIEFzc2V0X01SUl9fYywgTmFtZSwgcHNlX19TdGF0dXNfX2MgRlJPTSBwc2VfX01pbGVzdG9uZV9fYyBXSEVSRSBDaGlsZF9Qcm9qZWN0X19jID0gJyR7dGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdLmlkfScgQU5EIFByb2R1Y3RfQ2xhc3NfX2MgPSAnV2Vic2l0ZSdgLFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIG1pbGVzdG9uZXM6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLm1pbGVzdG9uZXMgPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMucmVjb3Jkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gcmVzLnJlY29yZHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLm1pbGVzdG9uZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcmVjb3JkLkFzc2V0X01SUl9fYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVjb3JkLnBzZV9fU3RhdHVzX19jXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvamVjdENvbnRhY3RzKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShcbiAgICAgICAgICAgIGBTRUxFQ1QgQ29udGFjdF9OYW1lX19yLk5hbWUsIENvbnRhY3RfTmFtZV9fci5QaG9uZSwgQ29udGFjdF9OYW1lX19yLkVtYWlsIGAgK1xuICAgICAgICAgICAgYEZST00gUHJvamVjdF9DdXN0b21lcl9Db250YWN0X19jIFdIRVJFIFByb2plY3RfX2MgPSAnJHt0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uaWR9J2AsXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS5jb250YWN0cyA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBidWlsZGVyIGluZm86IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMucmVjb3Jkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gcmVzLnJlY29yZHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS5jb250YWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5Db250YWN0X05hbWVfX3IuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiByZWNvcmQuQ29udGFjdF9OYW1lX19yLkVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHJlY29yZC5Db250YWN0X05hbWVfX3IuUGhvbmVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuX25nWm9uZS5ydW4oKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGxvYWRQcm9qZWN0VGVhbSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XSk7XG4gICAgICAgIHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLmNvbm4ucXVlcnkoXG4gICAgICAgICAgICBgU0VMRUNUIEJ1aWxkZXJfX3IuRW1haWwsIEJ1aWxkZXJfX3IuTmFtZSwgRElTX19yLkVtYWlsLCBESVNfX3IuTmFtZSxgICtcbiAgICAgICAgICAgIGAgQ29udGVudF9Xcml0ZXJfX3IuRW1haWwsIENvbnRlbnRfV3JpdGVyX19yLk5hbWUsIFdlYnNpdGVfRGVzaWduZXJfX3IuRW1haWwsIFdlYnNpdGVfRGVzaWduZXJfX3IuTmFtZSBgICtcbiAgICAgICAgICAgIGAgRlJPTSBwc2VfX1Byb2pfX2MgV0hFUkUgSWQgPSAnJHt0aGlzLnByb2plY3RzW3RoaXMuc2VsZWN0ZWRfcHJvamVjdF0uaWR9JyBgLFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGVhbSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBidWlsZGVyIGluZm86IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yZWNvcmRzWzBdLkJ1aWxkZXJfX3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLnRlYW0uYnVpbGRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlcy5yZWNvcmRzWzBdLkJ1aWxkZXJfX3IuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiByZXMucmVjb3Jkc1swXS5CdWlsZGVyX19yLkVtYWlsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yZWNvcmRzWzBdLkRJU19fcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGVhbS5kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzLnJlY29yZHNbMF0uRElTX19yLk5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVzLnJlY29yZHNbMF0uRElTX19yLkVtYWlsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yZWNvcmRzWzBdLkNvbnRlbnRfV3JpdGVyX19yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvamVjdHNbc2VsZi5zZWxlY3RlZF9wcm9qZWN0XS50ZWFtLmNvbnRlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZXMucmVjb3Jkc1swXS5Db250ZW50X1dyaXRlcl9fci5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcy5yZWNvcmRzWzBdLkNvbnRlbnRfV3JpdGVyX19yLkVtYWlsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yZWNvcmRzWzBdLldlYnNpdGVfRGVzaWduZXJfX3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLnRlYW0uZGVzaWduID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzLnJlY29yZHNbMF0uV2Vic2l0ZV9EZXNpZ25lcl9fci5OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcy5yZWNvcmRzWzBdLldlYnNpdGVfRGVzaWduZXJfX3IuRW1haWxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnByb2plY3RzW3NlbGYuc2VsZWN0ZWRfcHJvamVjdF0udGVhbSk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLl9uZ1pvbmUucnVuKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9hZFByb2plY3RDYXNlcygpIHtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9qZWN0c1t0aGlzLnNlbGVjdGVkX3Byb2plY3RdKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UuY29ubi5xdWVyeShgU0VMRUNUIFN0YXR1cywgU3ViamVjdCBGUk9NIENhc2UgV0hFUkUgUHJvamVjdF9fci5JZCA9ICcke3RoaXMucHJvamVjdHNbdGhpcy5zZWxlY3RlZF9wcm9qZWN0XS5pZH0nYCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLmNhc2VzID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIGJ1aWxkZXIgaW5mbzogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5yZWNvcmRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSByZXMucmVjb3Jkc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9qZWN0c1tzZWxmLnNlbGVjdGVkX3Byb2plY3RdLmNhc2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLlN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlY29yZC5TdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLl9uZ1pvbmUucnVuKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
