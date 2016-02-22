System.register(["angular2/core", "../services/Salesforce.service"], function(exports_1) {
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
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Salesforce_service_1_1) {
                Salesforce_service_1 = Salesforce_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_salesforceService) {
                    this._salesforceService = _salesforceService;
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: "dashboard-view",
                        template: "<h1>Dashboard</h1>"
                    }), 
                    __metadata('design:paramtypes', [Salesforce_service_1.SalesforceService])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRDb21wb25lbnQiLCJEYXNoYm9hcmRDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUtJQSw0QkFBbUJBLGtCQUFxQ0E7b0JBQXJDQyx1QkFBa0JBLEdBQWxCQSxrQkFBa0JBLENBQW1CQTtnQkFFeERBLENBQUNBO2dCQVBMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsUUFBUUEsRUFBRUEsb0JBQW9CQTtxQkFDakNBLENBQUNBOzt1Q0FLREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQVJBLEFBUUNBLElBQUE7WUFSRCxtREFRQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvRGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvU2FsZXNmb3JjZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRhc2hib2FyZC12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGA8aDE+RGFzaGJvYXJkPC9oMT5gXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIF9zYWxlc2ZvcmNlU2VydmljZTogU2FsZXNmb3JjZVNlcnZpY2UpIHtcblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
