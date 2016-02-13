System.register(['angular2/core', '../SideBar/sidebar.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sidebar_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/MainApp/main.html',
                        directives: [sidebar_component_1.SideBarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFpbkFwcC9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50IiwiTWFpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBT0lBO2dCQUVBQyxDQUFDQTtnQkFUTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxXQUFXQSxFQUFFQSwyRUFBMkVBO3dCQUN4RkEsVUFBVUEsRUFBRUEsQ0FBQ0Esb0NBQWdCQSxDQUFDQTtxQkFDakNBLENBQUNBOztrQ0FNREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCx5Q0FVQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvTWFpbkFwcC9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2lkZUJhckNvbXBvbmVudH0gZnJvbSAnLi4vU2lkZUJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWFpbi1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnL2hvbWUvamFzb24vRG9jdW1lbnRzL25ld19kZWFsZXJfdHJhY2tlci9kZXYvY29tcG9uZW50cy9NYWluQXBwL21haW4uaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1NpZGVCYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
