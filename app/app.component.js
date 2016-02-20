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
                        templateUrl: 'dev/app.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFhSUEsc0JBQStDQSxrQkFBa0JBLEVBQWtDQSxlQUFlQTtvQkFBbkVDLHVCQUFrQkEsR0FBbEJBLGtCQUFrQkEsQ0FBQUE7b0JBQWtDQSxvQkFBZUEsR0FBZkEsZUFBZUEsQ0FBQUE7b0JBQzlHQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBRURELCtCQUFRQSxHQUFSQTtvQkFBQUUsaUJBT0NBO29CQU5HQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLElBQUlBO3dCQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hCQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFFekJBLENBQUNBO29CQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBeEJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFdBQVdBLEVBQUVBLGNBQWNBO3dCQUMzQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0NBQWNBLEVBQUVBLDhCQUFhQSxDQUFDQTtxQkFDOUNBLENBQUNBO29CQUVEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1RBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLHdDQUFrQkEsRUFBRUE7d0JBQ3RFQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQSxTQUFTQSxFQUFFQSx1Q0FBaUJBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3FCQUMxRkEsQ0FBQ0E7b0JBSWVBLFdBQUNBLGFBQU1BLENBQUNBLHNDQUFpQkEsQ0FBQ0EsQ0FBQUE7b0JBQTRCQSxXQUFDQSxhQUFNQSxDQUFDQSxnQ0FBY0EsQ0FBQ0EsQ0FBQUE7O2lDQWU3RkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQTVCQSxBQTRCQ0EsSUFBQTtZQTVCRCx1Q0E0QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL1Byb2plY3Quc2VydmljZSc7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2plY3RzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzLmNvbXBvbmVudHNcIjtcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL01haW5BcHAvbWFpbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvYXBwLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtMb2dpbkNvbXBvbmVudCwgTWFpbkNvbXBvbmVudF1cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnL2Rhc2hib2FyZCcsIGFzOiAnRGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvcHJvamVjdHMnLCBhczogJ1Byb2plY3RzJywgY29tcG9uZW50OiBQcm9qZWN0c0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGxvZ2dlZEluOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KFNhbGVzZm9yY2VTZXJ2aWNlKSBwdWJsaWMgX3NhbGVzZm9yY2VTZXJ2aWNlLCBASW5qZWN0KFByb2plY3RTZXJ2aWNlKSBwcml2YXRlIF9wcm9qZWN0U2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhfc2FsZXNmb3JjZVNlcnZpY2UpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS5sb2dnZWRJbi5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy9zZXRUaW1lb3V0KHRoaXMub25Mb2dnZWRJbigpLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gb25Mb2dnZWRJbigpIHtcbiAgICAvLyB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
