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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NpZGVCYXIuc2VydmljZS50cyJdLCJuYW1lcyI6WyJTaWRlQmFyU2VydmljZSIsIlNpZGVCYXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2lkZUJhclNlcnZpY2UucmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sa0JBQWtCOzs7Ozs7Ozs7O1lBQWxCLGtCQUFrQixHQUFHO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsUUFBUTthQUN0QixDQUFBO1lBRUQ7Z0JBQUFBO29CQUVJQyxzQkFBaUJBLEdBQWFBO3dCQUMxQkE7NEJBQ0lBLElBQUlBLEVBQUVBLFdBQVdBOzRCQUNqQkEsSUFBSUEsRUFBRUEsWUFBWUE7NEJBQ2xCQSxJQUFJQSxFQUFFQSxhQUFhQTt5QkFDdEJBO3dCQUNEQTs0QkFDSUEsSUFBSUEsRUFBRUEsVUFBVUE7NEJBQ2hCQSxJQUFJQSxFQUFFQSxPQUFPQTs0QkFDYkEsSUFBSUEsRUFBRUEsWUFBWUE7eUJBQ3JCQTtxQkFDSkEsQ0FBQ0E7Z0JBT05BLENBQUNBO2dCQUpHRCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBR0E7b0JBQ1JFLEVBQUVBLENBQUNBLENBQUNBLDJCQUFtQkEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDN0NBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pDQSxDQUFDQTtnQkFuQkxGO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQW9CWkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQXBCQSxBQW9CQ0EsSUFBQTtZQXBCRCwyQ0FvQkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9TaWRlQmFyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtpbXBsZW1lbnRzSW50ZXJmYWNlfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcblxuaW50ZXJmYWNlIFNpZGViYXJJdGVtIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaWNvbjogc3RyaW5nLFxuICAgIGxpbms6IHN0cmluZyxcbiAgICBjb21wb25lbnQ6IGFueVxufVxuXG5jb25zdCBTaWRlYmFySXRlbV9zY2hlbWUgPSB7XG4gICAgbmFtZTogXCJzdHJpbmdcIixcbiAgICBpY29uOiBcInN0cmluZ1wiLFxuICAgIGxpbms6IFwic3RyaW5nXCIsXG4gICAgY29tcG9uZW50OiBcIm9iamVjdFwiXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaWRlQmFyU2VydmljZSB7XG4gICAgX19TSURFQkFSX0JVVFRPTlM6IE9iamVjdFtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkRhc2hib2FyZFwiLFxuICAgICAgICAgICAgaWNvbjogXCJkYXRhX3VzYWdlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIi4vRGFzaGJvYXJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgaWNvbjogXCJxdWV1ZVwiLFxuICAgICAgICAgICAgbGluazogXCIuL1Byb2plY3RzXCJcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgc2VsZWN0ZWQ6IFNpZGViYXJJdGVtO1xuICAgIHJlZ2lzdGVyKG9iaikge1xuICAgICAgICBpZiAoaW1wbGVtZW50c0ludGVyZmFjZShTaWRlYmFySXRlbV9zY2hlbWUsIG9iaikpXG4gICAgICAgICAgICB0aGlzLl9fU0lERUJBUl9CVVRUT05TLnB1c2gob2JqKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
