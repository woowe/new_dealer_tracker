import {Component, Inject, NgZone} from "angular2/core";
import {ProjectService} from "../../services/Project.service";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

@Component({
    selector: "projects-view",
    templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/Projects/Projects.html',
    directives: [MATERIAL_DIRECTIVES],
    providers: [MATERIAL_PROVIDERS]
})
export class ProjectsComponent {

    selected: any;
    stageFilter: string;
    constructor(public _projectService: ProjectService, public _ngZone: NgZone) {
        this.stageFilter = 'ACTIVE';
        this.selected = null;
        var self = this;
        this._projectService.projectListLoaded.subscribe((listLoaded) => {
            if (listLoaded) {
                self.selected = self._projectService.projects[0];

                self._projectService.selectProject(self.selected);
                self._projectService.loadProject();
                console.log("List loaded!", self.selected);

                self._ngZone.run(() => {
                });
            }
        });
    }

    loadView() {
        if (!this.selected.viewLoaded) {

        }
    }

    displayProjects() {
        var display = new Array<any>();

        for (var i = 0; i < this._projectService.projects.length; ++i) {
            if (this.compareStage(this._projectService.projects[i].stage))
                display.push(this._projectService.projects[i]);
        }

        return display;
    }

    onListItemClick(project_item: any) {
        console.log(project_item);
        this.selected = project_item;

        this._projectService.selectProject(this.selected);
        this._projectService.loadProject();
    }

    compareStage(project_stage: string) {
        var transfored_value = 'all';

        switch (this.stageFilter) {
            case 'HOLD': transfored_value = 'On Hold'; break;
            case 'FINISHED': transfored_value = 'Implemented'; break;
            case 'ACTIVE': transfored_value = 'In Preparation'; break;
            case 'PENDING': transfored_value = 'In Transition'; break;
        }

        if (transfored_value == 'all') { return true; }

        return project_stage == transfored_value;
    }

    selectedValue(selectedValue: string) {
        this.stageFilter = selectedValue;
        console.log(this.compareStage('In Transition'));

    }
}
