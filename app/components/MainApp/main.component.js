System.register(['angular2/core', '../SideBar/sidebar.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sidebar_component_1, router_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/MainApp/main.html',
                        directives: [sidebar_component_1.SideBarComponent, router_1.ROUTER_DIRECTIVES],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFpbkFwcC9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50IiwiTWFpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBUUlBO2dCQUVBQyxDQUFDQTtnQkFWTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxXQUFXQSxFQUFFQSwyRUFBMkVBO3dCQUN4RkEsVUFBVUEsRUFBRUEsQ0FBQ0Esb0NBQWdCQSxFQUFFQSwwQkFBaUJBLENBQUNBO3dCQUNqREEsU0FBU0EsRUFBRUEsRUFBRUE7cUJBQ2hCQSxDQUFDQTs7a0NBTURBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxJQUFBO1lBWEQseUNBV0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL01haW5BcHAvbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NpZGVCYXJDb21wb25lbnR9IGZyb20gJy4uL1NpZGVCYXIvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4tYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy9ob21lL2phc29uL0RvY3VtZW50cy9uZXdfZGVhbGVyX3RyYWNrZXIvZGV2L2NvbXBvbmVudHMvTWFpbkFwcC9tYWluLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtTaWRlQmFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
