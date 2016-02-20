System.register(["angular2/core", "../../services/Project.service", "ng2-material/all"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Project_service_1, all_1;
    var ProjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Project_service_1_1) {
                Project_service_1 = Project_service_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            ProjectsComponent = (function () {
                function ProjectsComponent(_projectService, _ngZone) {
                    this._projectService = _projectService;
                    this._ngZone = _ngZone;
                    this.stageFilter = 'ACTIVE';
                    this.selected = null;
                    var self = this;
                    this._projectService.projectListLoaded.subscribe(function (listLoaded) {
                        if (listLoaded) {
                            self.selected = self.displayProjects()[0];
                            self._projectService.selectProject(self.selected);
                            self._projectService.loadProject();
                            console.log("List loaded!", self.selected);
                            self._ngZone.run(function () {
                            });
                        }
                    });
                }
                ProjectsComponent.prototype.loadView = function () {
                    if (!this.selected.viewLoaded) {
                    }
                };
                ProjectsComponent.prototype.displayProjects = function () {
                    var display = new Array();
                    for (var i = 0; i < this._projectService.projects.length; ++i) {
                        if (this.compareStage(this._projectService.projects[i].stage))
                            display.push(this._projectService.projects[i]);
                    }
                    return display;
                };
                ProjectsComponent.prototype.onListItemClick = function (project_item) {
                    console.log(project_item);
                    this.selected = project_item;
                    this._projectService.selectProject(this.selected);
                    this._projectService.loadProject();
                };
                ProjectsComponent.prototype.compareStage = function (project_stage) {
                    var transfored_value = 'all';
                    switch (this.stageFilter) {
                        case 'HOLD':
                            transfored_value = 'On Hold';
                            break;
                        case 'FINISHED':
                            transfored_value = 'Implemented';
                            break;
                        case 'ACTIVE':
                            transfored_value = 'In Preparation';
                            break;
                        case 'PENDING':
                            transfored_value = 'In Transition';
                            break;
                    }
                    if (transfored_value == 'all') {
                        return true;
                    }
                    return project_stage == transfored_value;
                };
                ProjectsComponent.prototype.selectedValue = function (selectedValue) {
                    this.stageFilter = selectedValue;
                    this.selected = this.displayProjects()[0];
                    this._projectService.selectProject(this.selected);
                    this._projectService.loadProject();
                };
                ProjectsComponent = __decorate([
                    core_1.Component({
                        selector: "projects-view",
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/Projects/Projects.html',
                        directives: [all_1.MATERIAL_DIRECTIVES],
                        providers: [all_1.MATERIAL_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [Project_service_1.ProjectService, core_1.NgZone])
                ], ProjectsComponent);
                return ProjectsComponent;
            })();
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuY29tcG9uZW50cy50cyJdLCJuYW1lcyI6WyJQcm9qZWN0c0NvbXBvbmVudCIsIlByb2plY3RzQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvamVjdHNDb21wb25lbnQubG9hZFZpZXciLCJQcm9qZWN0c0NvbXBvbmVudC5kaXNwbGF5UHJvamVjdHMiLCJQcm9qZWN0c0NvbXBvbmVudC5vbkxpc3RJdGVtQ2xpY2siLCJQcm9qZWN0c0NvbXBvbmVudC5jb21wYXJlU3RhZ2UiLCJQcm9qZWN0c0NvbXBvbmVudC5zZWxlY3RlZFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFVSUEsMkJBQW1CQSxlQUErQkEsRUFBU0EsT0FBZUE7b0JBQXZEQyxvQkFBZUEsR0FBZkEsZUFBZUEsQ0FBZ0JBO29CQUFTQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFDdEVBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFFBQVFBLENBQUNBO29CQUM1QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsVUFBVUE7d0JBQ3hEQSxFQUFFQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDYkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBRTFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTs0QkFDbERBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBOzRCQUNuQ0EsT0FB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RUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRTFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDbERBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO2dCQUN2Q0EsQ0FBQ0E7Z0JBM0VMTjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxlQUFlQTt3QkFDekJBLFdBQVdBLEVBQUVBLGdGQUFnRkE7d0JBQzdGQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBbUJBLENBQUNBO3dCQUNqQ0EsU0FBU0EsRUFBRUEsQ0FBQ0Esd0JBQWtCQSxDQUFDQTtxQkFDbENBLENBQUNBOztzQ0F1RURBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0E1RUEsQUE0RUNBLElBQUE7WUE1RUQsaURBNEVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgTmdab25lfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1Byb2plY3Quc2VydmljZVwiO1xuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvYWxsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInByb2plY3RzLXZpZXdcIixcbiAgICB0ZW1wbGF0ZVVybDogJy9ob21lL2phc29uL0RvY3VtZW50cy9uZXdfZGVhbGVyX3RyYWNrZXIvZGV2L2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW01BVEVSSUFMX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW01BVEVSSUFMX1BST1ZJREVSU11cbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdHNDb21wb25lbnQge1xuXG4gICAgc2VsZWN0ZWQ6IGFueTtcbiAgICBzdGFnZUZpbHRlcjogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfcHJvamVjdFNlcnZpY2U6IFByb2plY3RTZXJ2aWNlLCBwdWJsaWMgX25nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMuc3RhZ2VGaWx0ZXIgPSAnQUNUSVZFJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fcHJvamVjdFNlcnZpY2UucHJvamVjdExpc3RMb2FkZWQuc3Vic2NyaWJlKChsaXN0TG9hZGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdExvYWRlZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWQgPSBzZWxmLmRpc3BsYXlQcm9qZWN0cygpWzBdO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5fcHJvamVjdFNlcnZpY2Uuc2VsZWN0UHJvamVjdChzZWxmLnNlbGVjdGVkKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9wcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdCBsb2FkZWQhXCIsIHNlbGYuc2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRWaWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQudmlld0xvYWRlZCkge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgICAgIHZhciBkaXNwbGF5ID0gbmV3IEFycmF5PGFueT4oKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3Byb2plY3RTZXJ2aWNlLnByb2plY3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wYXJlU3RhZ2UodGhpcy5fcHJvamVjdFNlcnZpY2UucHJvamVjdHNbaV0uc3RhZ2UpKVxuICAgICAgICAgICAgICAgIGRpc3BsYXkucHVzaCh0aGlzLl9wcm9qZWN0U2VydmljZS5wcm9qZWN0c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlzcGxheTtcbiAgICB9XG5cbiAgICBvbkxpc3RJdGVtQ2xpY2socHJvamVjdF9pdGVtOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdF9pdGVtKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHByb2plY3RfaXRlbTtcblxuICAgICAgICB0aGlzLl9wcm9qZWN0U2VydmljZS5zZWxlY3RQcm9qZWN0KHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLl9wcm9qZWN0U2VydmljZS5sb2FkUHJvamVjdCgpO1xuICAgIH1cblxuICAgIGNvbXBhcmVTdGFnZShwcm9qZWN0X3N0YWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9yZWRfdmFsdWUgPSAnYWxsJztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhZ2VGaWx0ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ0hPTEQnOiB0cmFuc2ZvcmVkX3ZhbHVlID0gJ09uIEhvbGQnOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0ZJTklTSEVEJzogdHJhbnNmb3JlZF92YWx1ZSA9ICdJbXBsZW1lbnRlZCc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQUNUSVZFJzogdHJhbnNmb3JlZF92YWx1ZSA9ICdJbiBQcmVwYXJhdGlvbic7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUEVORElORyc6IHRyYW5zZm9yZWRfdmFsdWUgPSAnSW4gVHJhbnNpdGlvbic7IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9yZWRfdmFsdWUgPT0gJ2FsbCcpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgICByZXR1cm4gcHJvamVjdF9zdGFnZSA9PSB0cmFuc2ZvcmVkX3ZhbHVlO1xuICAgIH1cblxuICAgIHNlbGVjdGVkVmFsdWUoc2VsZWN0ZWRWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhZ2VGaWx0ZXIgPSBzZWxlY3RlZFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRpc3BsYXlQcm9qZWN0cygpWzBdO1xuXG4gICAgICAgIHRoaXMuX3Byb2plY3RTZXJ2aWNlLnNlbGVjdFByb2plY3QodGhpcy5zZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuX3Byb2plY3RTZXJ2aWNlLmxvYWRQcm9qZWN0KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
