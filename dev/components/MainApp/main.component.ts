import {Component} from 'angular2/core';
import {SideBarComponent} from '../SideBar/sidebar.component';

@Component({
    selector: 'main-app',
    templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/components/MainApp/main.html',
    directives: [SideBarComponent]
})

export class MainComponent {
    constructor() {

    }
}
