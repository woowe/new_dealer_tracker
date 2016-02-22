import {Component, Inject} from 'angular2/core';
import {SalesforceService} from '../services/Salesforce.service';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {SideBarService} from "../services/SideBar.service";
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'side-bar',
    templateUrl: 'views/sidebar.html',
    directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [SideBarService]
})
export class SideBarComponent {
    user_name: string;
    constructor(public _salesforceService: SalesforceService, public _sidebarService: SideBarService) {
        console.log(this._salesforceService);
        this._salesforceService.loggedIn.subscribe((data) => {
            this.user_name = this._salesforceService.user.name;
        });
    }
}
