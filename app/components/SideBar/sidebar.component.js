System.register(['angular2/core', '../../services/Salesforce.service', "ng2-material/all", "../../services/SideBar.service", 'angular2/router'], function(exports_1) {
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
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/SideBar/sidebar.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZUJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaWRlQmFyQ29tcG9uZW50IiwiU2lkZUJhckNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBUUlBLDBCQUFtQkEsa0JBQXFDQSxFQUFTQSxlQUErQkE7b0JBUnBHQyxpQkFjQ0E7b0JBTnNCQSx1QkFBa0JBLEdBQWxCQSxrQkFBa0JBLENBQW1CQTtvQkFBU0Esb0JBQWVBLEdBQWZBLGVBQWVBLENBQWdCQTtvQkFDNUZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLElBQUlBO3dCQUM1Q0EsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDdkRBLENBQUNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFiTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxXQUFXQSxFQUFFQSw4RUFBOEVBO3dCQUMzRkEsVUFBVUEsRUFBRUEsQ0FBQ0EseUJBQW1CQSxFQUFFQSwwQkFBaUJBLENBQUNBO3dCQUNwREEsU0FBU0EsRUFBRUEsQ0FBQ0EsZ0NBQWNBLENBQUNBO3FCQUM5QkEsQ0FBQ0E7O3FDQVNEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBZEEsQUFjQ0EsSUFBQTtZQWRELCtDQWNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9TaWRlQmFyL3NpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9TYWxlc2ZvcmNlLnNlcnZpY2UnO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvYWxsXCI7XG5pbXBvcnQge1NpZGVCYXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvU2lkZUJhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lkZS1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnL2hvbWUvamFzb24vRG9jdW1lbnRzL25ld19kZWFsZXJfdHJhY2tlci9kZXYvY29tcG9uZW50cy9TaWRlQmFyL3NpZGViYXIuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW01BVEVSSUFMX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtTaWRlQmFyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZUJhckNvbXBvbmVudCB7XG4gICAgdXNlcl9uYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIF9zYWxlc2ZvcmNlU2VydmljZTogU2FsZXNmb3JjZVNlcnZpY2UsIHB1YmxpYyBfc2lkZWJhclNlcnZpY2U6IFNpZGVCYXJTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UubG9nZ2VkSW4uc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJfbmFtZSA9IHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLnVzZXIubmFtZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
