System.register(["angular2/core", "../../services/Salesforce.service"], function(exports_1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRGFzaGJvYXJkQ29tcG9uZW50IiwiRGFzaGJvYXJkQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFLSUEsNEJBQW1CQSxrQkFBcUNBO29CQUFyQ0MsdUJBQWtCQSxHQUFsQkEsa0JBQWtCQSxDQUFtQkE7Z0JBRXhEQSxDQUFDQTtnQkFQTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFFBQVFBLEVBQUVBLG9CQUFvQkE7cUJBQ2pDQSxDQUFDQTs7dUNBS0RBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsbURBUUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7U2FsZXNmb3JjZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TYWxlc2ZvcmNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZGFzaGJvYXJkLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYDxoMT5EYXNoYm9hcmQ8L2gxPmBcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3NhbGVzZm9yY2VTZXJ2aWNlOiBTYWxlc2ZvcmNlU2VydmljZSkge1xuXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
