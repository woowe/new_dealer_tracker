import {EventEmitter, Injectable} from 'angular2/core';
import {ILogin} from '../interfaces/ILogin.interface';

let jsforce: any = require('jsforce');
console.log("JSFORCE: ", jsforce);

interface User {
    name: string,
    email: string,
    id: string,
    photoUrl: string
}

@Injectable()
export class SalesforceService implements ILogin {
    /** public members **/
    loggingIn: EventEmitter<boolean> = new EventEmitter();
    loggedIn: EventEmitter<boolean> = new EventEmitter();
    user: User

    /** private members **/
    private conn: any;
    constructor() {
        this.conn = new jsforce.Connection({
            loginUrl: "https://dealersocket.my.salesforce.com"
        });

        this.user = {
            name: '',
            email: '',
            id: '',
            photoUrl: ''
        };
    }

    login(username: string, password: string, security_key: string) {
        this.loggingIn.emit(true);
        var self = this;
        this.conn.login(username, password + security_key, function(err, userInfo) {
            if (err) {
                console.log(err);
                self.loggingIn.emit(false);
                self.loggedIn.emit(false);
                return err;
            }
            self.conn.query("SELECT Name, Email, FullPhotoUrl FROM User WHERE Id = '" + userInfo.id + "'", function(err, res) {
                self.loggingIn.emit(false);
                if (err) {
                    console.log(err);
                    self.loggedIn.emit(false);
                    return err;
                }
                var fields = res.records[0];
                self.user = {
                    name: fields.Name,
                    email: fields.Email,
                    id: userInfo.id,
                    photoUrl: fields.FullPhotoUrl
                };
                self.loggedIn.emit(true);
            });
        });
    }

    query(query: string) {
        return this.conn.query(query);
    }

    logout() {
        this.conn.logout();
    }
}
