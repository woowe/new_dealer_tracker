System.register(['angular2/core', "angular2/router", './services/Salesforce.service', './services/Project.service', "./components/Dashboard/Dashboard.component", './components/Login/Login.component', "./components/Projects/Projects.components", './components/MainApp/main.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, Salesforce_service_1, Project_service_1, Dashboard_component_1, Login_component_1, Projects_components_1, main_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Salesforce_service_1_1) {
                Salesforce_service_1 = Salesforce_service_1_1;
            },
            function (Project_service_1_1) {
                Project_service_1 = Project_service_1_1;
            },
            function (Dashboard_component_1_1) {
                Dashboard_component_1 = Dashboard_component_1_1;
            },
            function (Login_component_1_1) {
                Login_component_1 = Login_component_1_1;
            },
            function (Projects_components_1_1) {
                Projects_components_1 = Projects_components_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_salesforceService, _projectService) {
                    this._salesforceService = _salesforceService;
                    this._projectService = _projectService;
                    console.log(_salesforceService);
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._salesforceService.loggedIn.subscribe(function (data) {
                        if (data === true) {
                            _this.loggedIn = true;
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/app.html',
                        directives: [Login_component_1.LoginComponent, main_component_1.MainComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', as: 'Dashboard', component: Dashboard_component_1.DashboardComponent },
                        { path: '/projects', as: 'Projects', component: Projects_components_1.ProjectsComponent, useAsDefault: true }
                    ]),
                    __param(0, core_1.Inject(Salesforce_service_1.SalesforceService)),
                    __param(1, core_1.Inject(Project_service_1.ProjectService)), 
                    __metadata('design:paramtypes', [Object, Object])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFhSUEsc0JBQStDQSxrQkFBa0JBLEVBQWtDQSxlQUFlQTtvQkFBbkVDLHVCQUFrQkEsR0FBbEJBLGtCQUFrQkEsQ0FBQUE7b0JBQWtDQSxvQkFBZUEsR0FBZkEsZUFBZUEsQ0FBQUE7b0JBQzlHQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBRURELCtCQUFRQSxHQUFSQTtvQkFBQUUsaUJBT0NBO29CQU5HQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLElBQUlBO3dCQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hCQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFFekJBLENBQUNBO29CQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBeEJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFdBQVdBLEVBQUVBLHVEQUF1REE7d0JBQ3BFQSxVQUFVQSxFQUFFQSxDQUFDQSxnQ0FBY0EsRUFBRUEsOEJBQWFBLENBQUNBO3FCQUM5Q0EsQ0FBQ0E7b0JBRURBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBRUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsd0NBQWtCQSxFQUFFQTt3QkFDdEVBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLHVDQUFpQkEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7cUJBQzFGQSxDQUFDQTtvQkFJZUEsV0FBQ0EsYUFBTUEsQ0FBQ0Esc0NBQWlCQSxDQUFDQSxDQUFBQTtvQkFBNEJBLFdBQUNBLGFBQU1BLENBQUNBLGdDQUFjQSxDQUFDQSxDQUFBQTs7aUNBZTdGQTtnQkFBREEsbUJBQUNBO1lBQURBLENBNUJBLEFBNEJDQSxJQUFBO1lBNUJELHVDQTRCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgUm91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7U2FsZXNmb3JjZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvU2FsZXNmb3JjZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvUHJvamVjdC5zZXJ2aWNlJztcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7UHJvamVjdHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuY29tcG9uZW50c1wiO1xuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvTWFpbkFwcC9tYWluLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy9ob21lL2phc29uL0RvY3VtZW50cy9uZXdfZGVhbGVyX3RyYWNrZXIvZGV2L2FwcC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbTG9naW5Db21wb25lbnQsIE1haW5Db21wb25lbnRdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy9kYXNoYm9hcmQnLCBhczogJ0Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL3Byb2plY3RzJywgYXM6ICdQcm9qZWN0cycsIGNvbXBvbmVudDogUHJvamVjdHNDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBsb2dnZWRJbjogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChTYWxlc2ZvcmNlU2VydmljZSkgcHVibGljIF9zYWxlc2ZvcmNlU2VydmljZSwgQEluamVjdChQcm9qZWN0U2VydmljZSkgcHJpdmF0ZSBfcHJvamVjdFNlcnZpY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coX3NhbGVzZm9yY2VTZXJ2aWNlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UubG9nZ2VkSW4uc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dCh0aGlzLm9uTG9nZ2VkSW4oKSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG9uTG9nZ2VkSW4oKSB7XG4gICAgLy8gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
