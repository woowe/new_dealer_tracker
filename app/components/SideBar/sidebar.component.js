System.register(['angular2/core', '../../services/Salesforce.service', "ng2-material/all"], function(exports_1) {
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
    var core_1, Salesforce_service_1, all_1;
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
            }],
        execute: function() {
            SideBarComponent = (function () {
                function SideBarComponent(_salesforceService) {
                    var _this = this;
                    this._salesforceService = _salesforceService;
                    console.log(this._salesforceService);
                    this._salesforceService.loggedIn.subscribe(function (data) {
                        _this.user_name = _this._salesforceService.user.name;
                    });
                }
                SideBarComponent = __decorate([
                    core_1.Component({
                        selector: 'side-bar',
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/SideBar/sidebar.html',
                        directives: [all_1.MATERIAL_DIRECTIVES]
                    }),
                    __param(0, core_1.Inject(Salesforce_service_1.SalesforceService)), 
                    __metadata('design:paramtypes', [Object])
                ], SideBarComponent);
                return SideBarComponent;
            })();
            exports_1("SideBarComponent", SideBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZUJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTaWRlQmFyQ29tcG9uZW50IiwiU2lkZUJhckNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBT0lBLDBCQUErQ0Esa0JBQWtCQTtvQkFQckVDLGlCQWFDQTtvQkFOa0RBLHVCQUFrQkEsR0FBbEJBLGtCQUFrQkEsQ0FBQUE7b0JBQzdEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUNyQ0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxJQUFJQTt3QkFDNUNBLEtBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ3ZEQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBWkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsV0FBV0EsRUFBRUEsOEVBQThFQTt3QkFDM0ZBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7cUJBQ3BDQSxDQUFDQTtvQkFHZUEsV0FBQ0EsYUFBTUEsQ0FBQ0Esc0NBQWlCQSxDQUFDQSxDQUFBQTs7cUNBTTFDQTtnQkFBREEsdUJBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELCtDQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9TaWRlQmFyL3NpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9TYWxlc2ZvcmNlLnNlcnZpY2UnO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvYWxsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lkZS1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnL2hvbWUvamFzb24vRG9jdW1lbnRzL25ld19kZWFsZXJfdHJhY2tlci9kZXYvY29tcG9uZW50cy9TaWRlQmFyL3NpZGViYXIuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW01BVEVSSUFMX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVCYXJDb21wb25lbnQge1xuICAgIHVzZXJfbmFtZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KFNhbGVzZm9yY2VTZXJ2aWNlKSBwdWJsaWMgX3NhbGVzZm9yY2VTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlKTtcbiAgICAgICAgdGhpcy5fc2FsZXNmb3JjZVNlcnZpY2UubG9nZ2VkSW4uc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJfbmFtZSA9IHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLnVzZXIubmFtZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
