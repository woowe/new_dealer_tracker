import {Component, Inject} from "angular2/core";
import {SalesforceService} from "../services/Salesforce.service";

@Component({
    selector: "dashboard-view",
    template: `<h1>Dashboard</h1>`
})
export class DashboardComponent {
    constructor(public _salesforceService: SalesforceService) {

    }
}
