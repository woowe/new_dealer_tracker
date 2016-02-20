import {Component, Inject} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig} from "angular2/router";
import {SalesforceService} from './services/Salesforce.service';
import {ProjectService} from './services/Project.service';
import {DashboardComponent} from "./components/Dashboard/Dashboard.component";
import {LoginComponent} from './components/Login/Login.component';
import {ProjectsComponent} from "./components/Projects/Projects.components";
import {MainComponent} from './components/MainApp/main.component';

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.html',
    directives: [LoginComponent, MainComponent]
})

@RouteConfig([
    { path: '/dashboard', as: 'Dashboard', component: DashboardComponent },
    { path: '/projects', as: 'Projects', component: ProjectsComponent, useAsDefault: true }
])

export class AppComponent {
    loggedIn: boolean;
    constructor( @Inject(SalesforceService) public _salesforceService, @Inject(ProjectService) private _projectService) {
        console.log(_salesforceService);
    }

    ngOnInit() {
        this._salesforceService.loggedIn.subscribe((data) => {
            if (data === true) {
                this.loggedIn = true;
                //setTimeout(this.onLoggedIn(), 1000);
            }
        });
    }

    // onLoggedIn() {
    // }
}
