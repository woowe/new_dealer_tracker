System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SideBarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SideBarService = (function () {
                function SideBarService() {
                    this.__SIDEBAR_BUTTONS = [
                        {
                            name: "Dashboard",
                            icon: "data_usage",
                            onClick: 'onDashboardClick',
                            subitems: []
                        },
                        {
                            name: "Projects",
                            icon: "queue",
                            onClick: 'onProjectsClick',
                            subitems: []
                        },
                    ];
                }
                SideBarService.prototype.register = function (obj, func) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvU2lkZUJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNpZGVCYXJTZXJ2aWNlIiwiU2lkZUJhclNlcnZpY2UuY29uc3RydWN0b3IiLCJTaWRlQmFyU2VydmljZS5yZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO29CQUVFQyxzQkFBaUJBLEdBQWFBO3dCQUM1QkE7NEJBQ0VBLElBQUlBLEVBQUVBLFdBQVdBOzRCQUNqQkEsSUFBSUEsRUFBRUEsWUFBWUE7NEJBQ2xCQSxPQUFPQSxFQUFFQSxrQkFBa0JBOzRCQUMzQkEsUUFBUUEsRUFBRUEsRUFBRUE7eUJBQ2JBO3dCQUNEQTs0QkFDRUEsSUFBSUEsRUFBRUEsVUFBVUE7NEJBQ2hCQSxJQUFJQSxFQUFFQSxPQUFPQTs0QkFDYkEsT0FBT0EsRUFBRUEsaUJBQWlCQTs0QkFDMUJBLFFBQVFBLEVBQUVBLEVBQUVBO3lCQUNiQTtxQkFDRkEsQ0FBQUE7Z0JBSUhBLENBQUNBO2dCQUhDRCxpQ0FBUUEsR0FBUkEsVUFBU0EsR0FBR0EsRUFBRUEsSUFBSUE7Z0JBRWxCRSxDQUFDQTtnQkFsQkhGO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQW1CWkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQTtZQW5CRCwyQ0FtQkMsQ0FBQSIsImZpbGUiOiJpbnRlcmZhY2VzL1NpZGVCYXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpZGVCYXJTZXJ2aWNlIHtcbiAgX19TSURFQkFSX0JVVFRPTlM6IE9iamVjdFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgICBpY29uOiBcImRhdGFfdXNhZ2VcIixcbiAgICAgIG9uQ2xpY2s6ICdvbkRhc2hib2FyZENsaWNrJyxcbiAgICAgIHN1Yml0ZW1zOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgICAgaWNvbjogXCJxdWV1ZVwiLFxuICAgICAgb25DbGljazogJ29uUHJvamVjdHNDbGljaycsXG4gICAgICBzdWJpdGVtczogW11cbiAgICB9LFxuICBdXG4gIHJlZ2lzdGVyKG9iaiwgZnVuYykge1xuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
