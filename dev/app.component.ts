import {Component, Inject} from 'angular2/core';
import {SalesforceService} from './services/Salesforce.service';
import {LoginComponent} from './components/Login/Login.component';
import {MainComponent} from './components/MainApp/main.component';

@Component({
    selector: 'my-app',
    templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/app.html',
    providers: [SalesforceService],
    directives: [LoginComponent, MainComponent]
})

export class AppComponent {
    loggedIn: boolean;
    constructor( @Inject(SalesforceService) public _salesforceService) {
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
