import {Component, OnInit, NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
import {ILogin} from '../interfaces/ILogin.interface';

let fs = require('fs');

@Component({
    selector: 'login',
    templateUrl: "views/Login.html",
    inputs: ['loginService'],
    directives: [MATERIAL_DIRECTIVES]
})


export class LoginComponent implements OnInit {
    loginService: any;
    loggingIn: boolean;
    loggedIn: boolean;

    remembered: boolean;
    hasCredentials: boolean;
    userCred: string[];

    constructor(private _ngZone: NgZone) {
        this.loggedIn = false;
        this.loggedIn = false;
        this.remembered = false;
        this.hasCredentials = false;
    }

    ngOnInit() {
        if (!this.loginService.login || !this.loginService.loggedIn || !this.loginService.loggingIn) {
            console.error("The service provided doesn't implement ILogin!");
            return;
        }
        console.log(this.loginService);
        this.loginService.loggingIn.subscribe((data) => {
            console.log("Logging in: ", data);
            this.loggingIn = data;
        });

        this.loginService.loggedIn.subscribe((data) => {
            console.log("Logged in: ", data);
            this._ngZone.runOutsideAngular(() => {
                // reenter the Angular zone and display done
                this.loggedIn = data;
                this._ngZone.run(() => { console.log('Outside Done!') });
            });

            if (this.remembered && !this.hasCredentials) {
                this.writeLoginCredentials(this.userCred[0], this.userCred[1], this.userCred[2]);
            }
        });

        if (fs.existsSync("login_credentials.txt")) {
            this.remembered = true;
            this.hasCredentials = true;
            var fileContents: any = fs.readFileSync("login_credentials.txt", "utf-8");
            console.log(fileContents);
            var lines = fileContents.split('\n');
            console.log(lines);
            this.loginService.login(lines[0], lines[1], lines[2]);
        }
    }

    onLoginClick(username, password, security_key) {
        this.loginService.login(username, password, security_key);
        this.userCred = [username, password, security_key];
    }

    onRememberedClick() {
        this.remembered = !this.remembered;
    }

    writeLoginCredentials(username: string, password: string, security_key: string) {
        fs.writeFile('login_credentials.txt', username + "\n" + password + "\n" + security_key, "utf-8", function(err) {
            if (err) throw err;
            return;
        });
    }
}
