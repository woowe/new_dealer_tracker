System.register(["angular2/core", "../services/Project.service", "ng2-material/all"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Project_service_1, all_1;
    var ProjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Project_service_1_1) {
                Project_service_1 = Project_service_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            ProjectsComponent = (function () {
                function ProjectsComponent(_projectService, _ngZone) {
                    this._projectService = _projectService;
                    this._ngZone = _ngZone;
                    console.log("asdfasdfasdfasdfasadf");
                    this.stageFilter = 'ACTIVE';
                    this.selected = null;
                    var self = this;
                    this._projectService.projectListLoaded.subscribe(function (listLoaded) {
                        if (listLoaded) {
                            self.selected = self.displayProjects()[0];
                            self._projectService.selectProject(self.selected);
                            self._projectService.loadProject();
                            console.log("List loaded!", self.selected);
                            self._ngZone.run(function () {
                            });
                        }
                    });
                }
                ProjectsComponent.prototype.loadView = function () {
                    if (!this.selected.viewLoaded) {
                    }
                };
                ProjectsComponent.prototype.displayProjects = function () {
                    var display = new Array();
                    for (var i = 0; i < this._projectService.projects.length; ++i) {
                        if (this.compareStage(this._projectService.projects[i].stage))
                            display.push(this._projectService.projects[i]);
                    }
                    return display;
                };
                ProjectsComponent.prototype.onListItemClick = function (project_item) {
                    console.log(project_item);
                    this.selected = project_item;
                    this._projectService.selectProject(this.selected);
                    this._projectService.loadProject();
                };
                ProjectsComponent.prototype.compareStage = function (project_stage) {
                    var transfored_value = 'all';
                    switch (this.stageFilter) {
                        case 'HOLD':
                            transfored_value = 'On Hold';
                            break;
                        case 'FINISHED':
                            transfored_value = 'Implemented';
                            break;
                        case 'ACTIVE':
                            transfored_value = 'In Preparation';
                            break;
                        case 'PENDING':
                            transfored_value = 'In Transition';
                            break;
                    }
                    if (transfored_value == 'all') {
                        return true;
                    }
                    return project_stage == transfored_value;
                };
                ProjectsComponent.prototype.selectedValue = function (selectedValue) {
                    console.log(selectedValue);
                    this.stageFilter = selectedValue;
                };
                ProjectsComponent = __decorate([
                    core_1.Component({
                        selector: "projects-view",
                        templateUrl: 'views/Projects.html',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        providers: [all_1.MATERIAL_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [Project_service_1.ProjectService, core_1.NgZone])
                ], ProjectsComponent);
                return ProjectsComponent;
            })();
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdHMuY29tcG9uZW50cy50cyJdLCJuYW1lcyI6WyJQcm9qZWN0c0NvbXBvbmVudCIsIlByb2plY3RzQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvamVjdHNDb21wb25lbnQubG9hZFZpZXciLCJQcm9qZWN0c0NvbXBvbmVudC5kaXNwbGF5UHJvamVjdHMiLCJQcm9qZWN0c0NvbXBvbmVudC5vbkxpc3RJdGVtQ2xpY2siLCJQcm9qZWN0c0NvbXBvbmVudC5jb21wYXJlU3RhZ2UiLCJQcm9qZWN0c0NvbXBvbmVudC5zZWxlY3RlZFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFVSUEsMkJBQW1CQSxlQUErQkEsRUFBU0EsT0FBZUE7b0JBQXZEQyxvQkFBZUEsR0FBZkEsZUFBZUEsQ0FBZ0JBO29CQUFTQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFDdEVBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxDQUFDQTtvQkFDNUJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUNyQkEsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ2hCQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLFVBQVVBO3dCQUN4REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2JBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUUxQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7NEJBQ2xEQSxJQUFJQSxDQUFD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M0JBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLGFBQWFBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBeEVMTjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFdBQVdBLEVBQUVBLHFCQUFxQkE7d0JBQ2xDQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBbUJBLENBQUNBO3dCQUNqQ0EsU0FBU0EsRUFBRUEsQ0FBQ0Esd0JBQWtCQSxDQUFDQTtxQkFDbENBLENBQUNBOztzQ0FvRURBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0F6RUEsQUF5RUNBLElBQUE7WUF6RUQsaURBeUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9qZWN0cy5jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgTmdab25lfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL1Byb2plY3Quc2VydmljZVwiO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvYWxsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInByb2plY3RzLXZpZXdcIixcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL1Byb2plY3RzLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtNQVRFUklBTF9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtNQVRFUklBTF9QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RzQ29tcG9uZW50IHtcblxuICAgIHNlbGVjdGVkOiBhbnk7XG4gICAgc3RhZ2VGaWx0ZXI6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3Byb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSwgcHVibGljIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFzZGZhc2RmYXNkZmFzZGZhc2FkZlwiKTtcbiAgICAgICAgdGhpcy5zdGFnZUZpbHRlciA9ICdBQ1RJVkUnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wcm9qZWN0U2VydmljZS5wcm9qZWN0TGlzdExvYWRlZC5zdWJzY3JpYmUoKGxpc3RMb2FkZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0TG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZCA9IHNlbGYuZGlzcGxheVByb2plY3RzKClbMF07XG5cbiAgICAgICAgICAgICAgICBzZWxmLl9wcm9qZWN0U2VydmljZS5zZWxlY3RQcm9qZWN0KHNlbGYuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHNlbGYuX3Byb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0IGxvYWRlZCFcIiwgc2VsZi5zZWxlY3RlZCk7XG5cbiAgICAgICAgICAgICAgICBzZWxmLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZC52aWV3TG9hZGVkKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICAgICAgdmFyIGRpc3BsYXkgPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fcHJvamVjdFNlcnZpY2UucHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBhcmVTdGFnZSh0aGlzLl9wcm9qZWN0U2VydmljZS5wcm9qZWN0c1tpXS5zdGFnZSkpXG4gICAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKHRoaXMuX3Byb2plY3RTZXJ2aWNlLnByb2plY3RzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXNwbGF5O1xuICAgIH1cblxuICAgIG9uTGlzdEl0ZW1DbGljayhwcm9qZWN0X2l0ZW06IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0X2l0ZW0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gcHJvamVjdF9pdGVtO1xuXG4gICAgICAgIHRoaXMuX3Byb2plY3RTZXJ2aWNlLnNlbGVjdFByb2plY3QodGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuX3Byb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0KCk7XG4gICAgfVxuXG4gICAgY29tcGFyZVN0YWdlKHByb2plY3Rfc3RhZ2U6IHN0cmluZykge1xuICAgICAgICB2YXIgdHJhbnNmb3JlZF92YWx1ZSA9ICdhbGwnO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGFnZUZpbHRlcikge1xuICAgICAgICAgICAgY2FzZSAnSE9MRCc6IHRyYW5zZm9yZWRfdmFsdWUgPSAnT24gSG9sZCc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRklOSVNIRUQnOiB0cmFuc2ZvcmVkX3ZhbHVlID0gJ0ltcGxlbWVudGVkJzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBQ1RJVkUnOiB0cmFuc2ZvcmVkX3ZhbHVlID0gJ0luIFByZXBhcmF0aW9uJzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQRU5ESU5HJzogdHJhbnNmb3JlZF92YWx1ZSA9ICdJbiBUcmFuc2l0aW9uJzsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JlZF92YWx1ZSA9PSAnYWxsJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0X3N0YWdlID09IHRyYW5zZm9yZWRfdmFsdWU7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRWYWx1ZShzZWxlY3RlZFZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIHRoaXMuc3RhZ2VGaWx0ZXIgPSBzZWxlY3RlZFZhbHVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
