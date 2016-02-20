import {EventEmitter, Injectable} from 'angular2/core';
import {ILogin} from '../interfaces/ILogin.interface';

let jsforce: any = require('jsforce');
console.log("JSFORCE: ", jsforce);

interface User {
    name: string,
    email: string,
    id: string,
    photoUrl: string,
    builder_id: string
}

@Injectable()
export class SalesforceService implements ILogin {
    /** public members **/
    loggingIn: EventEmitter<boolean> = new EventEmitter();
    loggedIn: EventEmitter<boolean> = new EventEmitter();
    user: User
    conn: any;

    /** private members **/
    constructor() {
        this.conn = new jsforce.Connection({
            loginUrl: "https://dealersocket.my.salesforce.com"
        });

        this.user = {
            name: '',
            email: '',
            id: '',
            photoUrl: '',
            builder_id: ''
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
                if (err) {
                    console.log(err);
                    self.loggingIn.emit(false);
                    self.loggedIn.emit(false);
                    return err;
                }
                var fields = res.records[0];
                self.user = {
                    name: fields.Name,
                    email: fields.Email,
                    id: userInfo.id,
                    photoUrl: fields.FullPhotoUrl,
                    builder_id: ''
                };

                console.log("User table: ", self.user);

                self.conn.query(`SELECT Id, Name FROM Contact WHERE Name = '${self.user.name}'`, function(err, res) {
                    self.loggingIn.emit(false);
                    if (err) {
                        console.log(err);
                        self.loggedIn.emit(false);
                        return err;
                    }
                    self.user.builder_id = res.records[0].Id;
                    console.log("User loaded: ", self.user);
                    self.loggedIn.emit(true);
                });
            });
        });
    }

    query(query: string, cb: any) {
        return this.conn.query(query, cb);
    }

    logout() {
        this.conn.logout();
    }
}
