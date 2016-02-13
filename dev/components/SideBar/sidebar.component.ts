import {Component, Inject} from 'angular2/core';
import {SalesforceService} from '../../services/Salesforce.service';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

@Component({
    selector: 'side-bar',
    templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/SideBar/sidebar.html',
    directives: [MATERIAL_DIRECTIVES]
})
export class SideBarComponent {
    user_name: string;
    constructor( @Inject(SalesforceService) public _salesforceService) {
        console.log(this._salesforceService);
        this._salesforceService.loggedIn.subscribe((data) => {
            this.user_name = this._salesforceService.user.name;
        });
    }
}
