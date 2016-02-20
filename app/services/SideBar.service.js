System.register(['angular2/core', "../utils/utils"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utils_1;
    var SidebarItem_scheme, SideBarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            SidebarItem_scheme = {
                name: "string",
                icon: "string",
                link: "string",
                component: "object"
            };
            SideBarService = (function () {
                function SideBarService() {
                    this.__SIDEBAR_BUTTONS = [
                        {
                            name: "Dashboard",
                            icon: "data_usage",
                            link: "./Dashboard"
                        },
                        {
                            name: "Projects",
                            icon: "queue",
                            link: "./Projects"
                        },
                    ];
                }
                SideBarService.prototype.register = function (obj) {
                    if (utils_1.implementsInterface(SidebarItem_scheme, obj))
                        this.__SIDEBAR_BUTTONS.push(obj);
                };
                SideBarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SideBarService);
                return SideBarService;
            })();
            exports_1("SideBarService", SideBarService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NpZGVCYXIuc2VydmljZS50cyJdLCJuYW1lcyI6WyJTaWRlQmFyU2VydmljZSIsIlNpZGVCYXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2lkZUJhclNlcnZpY2UucmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBYU0sa0JBQWtCOzs7Ozs7Ozs7O1lBQWxCLGtCQUFrQixHQUFHO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsUUFBUTthQUN0QixDQUFBO1lBRUQ7Z0JBQUFBO29CQUVJQyxzQkFBaUJBLEdBQWFBO3dCQUMxQkE7NEJBQ0lBLElBQUlBLEVBQUVBLFdBQVdBOzRCQUNqQkEsSUFBSUEsRUFBRUEsWUFBWUE7NEJBQ2xCQSxJQUFJQSxFQUFFQSxhQUFhQTt5QkFDdEJBO3dCQUNEQTs0QkFDSUEsSUFBSUEsRUFBRUEsVUFBVUE7NEJBQ2hCQSxJQUFJQSxFQUFFQSxPQUFPQTs0QkFDYkEsSUFBSUEsRUFBRUEsWUFBWUE7eUJBQ3JCQTtxQkFDSkEsQ0FBQ0E7Z0JBT05BLENBQUNBO2dCQUpHRCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBR0E7b0JBQ1JFLEVBQUVBLENBQUNBLENBQUNBLDJCQUFtQkEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDN0NBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxDQUFDQTtnQkFuQkxGO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQW9CWkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQXBCQSxBQW9CQ0EsSUFBQTtZQXBCRCwyQ0FvQkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9TaWRlQmFyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpbXBsZW1lbnRzSW50ZXJmYWNlfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7UHJvamVjdHNDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzLmNvbXBvbmVudHNcIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgU2lkZWJhckl0ZW0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpY29uOiBzdHJpbmcsXG4gICAgbGluazogc3RyaW5nLFxuICAgIGNvbXBvbmVudDogYW55XG59XG5cbmNvbnN0IFNpZGViYXJJdGVtX3NjaGVtZSA9IHtcbiAgICBuYW1lOiBcInN0cmluZ1wiLFxuICAgIGljb246IFwic3RyaW5nXCIsXG4gICAgbGluazogXCJzdHJpbmdcIixcbiAgICBjb21wb25lbnQ6IFwib2JqZWN0XCJcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpZGVCYXJTZXJ2aWNlIHtcbiAgICBfX1NJREVCQVJfQlVUVE9OUzogT2JqZWN0W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgICAgICAgICBpY29uOiBcImRhdGFfdXNhZ2VcIixcbiAgICAgICAgICAgIGxpbms6IFwiLi9EYXNoYm9hcmRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgICBpY29uOiBcInF1ZXVlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi4vUHJvamVjdHNcIlxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBzZWxlY3RlZDogU2lkZWJhckl0ZW07XG4gICAgcmVnaXN0ZXIob2JqKSB7XG4gICAgICAgIGlmIChpbXBsZW1lbnRzSW50ZXJmYWNlKFNpZGViYXJJdGVtX3NjaGVtZSwgb2JqKSlcbiAgICAgICAgICAgIHRoaXMuX19TSURFQkFSX0JVVFRPTlMucHVzaChvYmopO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
