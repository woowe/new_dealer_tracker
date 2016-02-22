System.register(['angular2/core', './sidebar.component', 'angular2/router'], function(exports_1) {
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
                        templateUrl: 'views/main.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTWFpbkNvbXBvbmVudCIsIk1haW5Db21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVFJQTtnQkFFQUMsQ0FBQ0E7Z0JBVkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsV0FBV0EsRUFBRUEsaUJBQWlCQTt3QkFDOUJBLFVBQVVBLEVBQUVBLENBQUNBLG9DQUFnQkEsRUFBRUEsMEJBQWlCQSxDQUFDQTt3QkFDakRBLFNBQVNBLEVBQUVBLEVBQUVBO3FCQUNoQkEsQ0FBQ0E7O2tDQU1EQTtnQkFBREEsb0JBQUNBO1lBQURBLENBWEEsQUFXQ0EsSUFBQTtZQVhELHlDQVdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2lkZUJhckNvbXBvbmVudH0gZnJvbSAnLi9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFpbi1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbi5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbU2lkZUJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
