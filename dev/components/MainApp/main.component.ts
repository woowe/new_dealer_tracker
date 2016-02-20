import {Component} from 'angular2/core';
import {SideBarComponent} from '../SideBar/sidebar.component';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'main-app',
    templateUrl: 'dev/components/MainApp/main.html',
    directives: [SideBarComponent, ROUTER_DIRECTIVES],
    providers: []
})

export class MainComponent {
    constructor() {

    }
}
