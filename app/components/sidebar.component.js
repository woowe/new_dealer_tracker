System.register(['angular2/core', '../services/Salesforce.service', "ng2-material/all", "../services/SideBar.service", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Salesforce_service_1, all_1, SideBar_service_1, router_1;
    var SideBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Salesforce_service_1_1) {
                Salesforce_service_1 = Salesforce_service_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (SideBar_service_1_1) {
                SideBar_service_1 = SideBar_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SideBarComponent = (function () {
                function SideBarComponent(_salesforceService, _sidebarService) {
                    var _this = this;
                    this._salesforceService = _salesforceService;
                    this._sidebarService = _sidebarService;
                    console.log(this._salesforceService);
                    this._salesforceService.loggedIn.subscribe(function (data) {
                        _this.user_name = _this._salesforceService.user.name;
                    });
                }
                SideBarComponent = __decorate([
                    core_1.Component({
                        selector: 'side-bar',
                        templateUrl: 'views/sidebar.html',
                        directives: [all_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        providers: [SideBar_service_1.SideBarService]
                    }), 
                    __metadata('design:paramtypes', [Salesforce_service_1.SalesforceService, SideBar_service_1.SideBarService])
                ], SideBarComponent);
                return SideBarComponent;
            })();
            exports_1("SideBarComponent", SideBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2lkZUJhckNvbXBvbmVudCIsIlNpZGVCYXJDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQVFJQSwwQkFBbUJBLGtCQUFxQ0EsRUFBU0EsZUFBK0JBO29CQVJwR0MsaUJBY0NBO29CQU5zQkEsdUJBQWtCQSxHQUFsQkEsa0JBQWtCQSxDQUFtQkE7b0JBQVNBLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFnQkE7b0JBQzVGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUNyQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFJQTt3QkFDNUNBLEtBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ3ZEQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBYkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsV0FBV0EsRUFBRUEsb0JBQW9CQTt3QkFDakNBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFtQkEsRUFBRUEsMEJBQWlCQSxDQUFDQTt3QkFDcERBLFNBQVNBLEVBQUVBLENBQUNBLGdDQUFjQSxDQUFDQTtxQkFDOUJBLENBQUNBOztxQ0FTREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFkRCwrQ0FjQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2FsZXNmb3JjZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZSc7XG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVMsIE1BVEVSSUFMX1BST1ZJREVSU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9hbGxcIjtcbmltcG9ydCB7U2lkZUJhclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9TaWRlQmFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWRlLWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9zaWRlYmFyLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtNQVRFUklBTF9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbU2lkZUJhclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVCYXJDb21wb25lbnQge1xuICAgIHVzZXJfbmFtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfc2FsZXNmb3JjZVNlcnZpY2U6IFNhbGVzZm9yY2VTZXJ2aWNlLCBwdWJsaWMgX3NpZGViYXJTZXJ2aWNlOiBTaWRlQmFyU2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zYWxlc2ZvcmNlU2VydmljZSk7XG4gICAgICAgIHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLmxvZ2dlZEluLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyX25hbWUgPSB0aGlzLl9zYWxlc2ZvcmNlU2VydmljZS51c2VyLm5hbWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
