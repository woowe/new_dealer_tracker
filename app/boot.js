System.register(['angular2/platform/browser', 'angular2/core', "./app.component", 'angular2/router', './services/Salesforce.service', './services/Project.service'], function(exports_1) {
    var browser_1, core_1, app_component_1, router_1, Salesforce_service_1, Project_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Salesforce_service_1_1) {
                Salesforce_service_1 = Salesforce_service_1_1;
            },
            function (Project_service_1_1) {
                Project_service_1 = Project_service_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_BINDINGS,
                core_1.bind(router_1.APP_BASE_HREF).toValue(location.pathname),
                Project_service_1.ProjectService,
                Salesforce_service_1.SalesforceService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQSxzQ0FBc0M7WUFDdEMsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFO2dCQUNwQix3QkFBZTtnQkFDZixXQUFJLENBQUMsc0JBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxnQ0FBYztnQkFDZCxzQ0FBaUI7YUFDcEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge2JpbmR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7QVBQX0JBU0VfSFJFRiwgUk9VVEVSX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL1Byb2plY3Quc2VydmljZSc7XG5cbi8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgUk9VVEVSX0JJTkRJTkdTLFxuICAgIGJpbmQoQVBQX0JBU0VfSFJFRikudG9WYWx1ZShsb2NhdGlvbi5wYXRobmFtZSksXG4gICAgUHJvamVjdFNlcnZpY2UsXG4gICAgU2FsZXNmb3JjZVNlcnZpY2Vcbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
