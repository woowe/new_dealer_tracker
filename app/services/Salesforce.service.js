System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var jsforce, SalesforceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            jsforce = require('jsforce');
            console.log("JSFORCE: ", jsforce);
            SalesforceService = (function () {
                /** private members **/
                function SalesforceService() {
                    /** public members **/
                    this.loggingIn = new core_1.EventEmitter();
                    this.loggedIn = new core_1.EventEmitter();
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
                SalesforceService.prototype.login = function (username, password, security_key) {
                    this.loggingIn.emit(true);
                    var self = this;
                    this.conn.login(username, password + security_key, function (err, userInfo) {
                        if (err) {
                            console.log(err);
                            self.loggingIn.emit(false);
                            self.loggedIn.emit(false);
                            return err;
                        }
                        self.conn.query("SELECT Name, Email, FullPhotoUrl FROM User WHERE Id = '" + userInfo.id + "'", function (err, res) {
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
                            self.conn.query("SELECT Id, Name FROM Contact WHERE Name = '" + self.user.name + "'", function (err, res) {
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
                };
                SalesforceService.prototype.query = function (query, cb) {
                    return this.conn.query(query, cb);
                };
                SalesforceService.prototype.logout = function () {
                    this.conn.logout();
                };
                SalesforceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SalesforceService);
                return SalesforceService;
            })();
            exports_1("SalesforceService", SalesforceService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6WyJTYWxlc2ZvcmNlU2VydmljZSIsIlNhbGVzZm9yY2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2FsZXNmb3JjZVNlcnZpY2UubG9naW4iLCJTYWxlc2ZvcmNlU2VydmljZS5xdWVyeSIsIlNhbGVzZm9yY2VTZXJ2aWNlLmxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFHSSxPQUFPOzs7Ozs7O1lBQVAsT0FBTyxHQUFRLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQVVsQztnQkFRSUEsdUJBQXVCQTtnQkFDdkJBO29CQVBBQyxzQkFBc0JBO29CQUN0QkEsY0FBU0EsR0FBMEJBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtvQkFDdERBLGFBQVFBLEdBQTBCQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7b0JBTWpEQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDL0JBLFFBQVFBLEVBQUVBLHdDQUF3Q0E7cUJBQ3JEQSxDQUFDQSxDQUFDQTtvQkFFSEEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0E7d0JBQ1JBLElBQUlBLEVBQUVBLEVBQUVBO3dCQUNSQSxLQUFLQSxFQUFFQSxFQUFFQTt3QkFDVEEsRUFBRUEsRUFBRUEsRUFBRUE7d0JBQ05BLFFBQVFBLEVBQUVBLEVBQUVBO3dCQUNaQSxVQUFVQSxFQUFFQSxFQUFFQTtxQkFDakJBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFFREQsaUNBQUtBLEdBQUxBLFVBQU1BLFFBQWdCQSxFQUFFQSxRQUFnQkEsRUFBRUEsWUFBb0JBO29CQUMxREUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxJQUFJQSxH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QXhFTEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7c0NBeUVaQTtnQkFBREEsd0JBQUNBO1lBQURBLENBekVBLEFBeUVDQSxJQUFBO1lBekVELGlEQXlFQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SUxvZ2lufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lMb2dpbi5pbnRlcmZhY2UnO1xuXG5sZXQganNmb3JjZTogYW55ID0gcmVxdWlyZSgnanNmb3JjZScpO1xuY29uc29sZS5sb2coXCJKU0ZPUkNFOiBcIiwganNmb3JjZSk7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIHBob3RvVXJsOiBzdHJpbmcsXG4gICAgYnVpbGRlcl9pZDogc3RyaW5nXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYWxlc2ZvcmNlU2VydmljZSBpbXBsZW1lbnRzIElMb2dpbiB7XG4gICAgLyoqIHB1YmxpYyBtZW1iZXJzICoqL1xuICAgIGxvZ2dpbmdJbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGxvZ2dlZEluOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdXNlcjogVXNlclxuICAgIGNvbm46IGFueTtcblxuICAgIC8qKiBwcml2YXRlIG1lbWJlcnMgKiovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29ubiA9IG5ldyBqc2ZvcmNlLkNvbm5lY3Rpb24oe1xuICAgICAgICAgICAgbG9naW5Vcmw6IFwiaHR0cHM6Ly9kZWFsZXJzb2NrZXQubXkuc2FsZXNmb3JjZS5jb21cIlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIHBob3RvVXJsOiAnJyxcbiAgICAgICAgICAgIGJ1aWxkZXJfaWQ6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgc2VjdXJpdHlfa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2dnaW5nSW4uZW1pdCh0cnVlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbm4ubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkICsgc2VjdXJpdHlfa2V5LCBmdW5jdGlvbihlcnIsIHVzZXJJbmZvKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxvZ2dpbmdJbi5lbWl0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxvZ2dlZEluLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmNvbm4ucXVlcnkoXCJTRUxFQ1QgTmFtZSwgRW1haWwsIEZ1bGxQaG90b1VybCBGUk9NIFVzZXIgV0hFUkUgSWQgPSAnXCIgKyB1c2VySW5mby5pZCArIFwiJ1wiLCBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dnaW5nSW4uZW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9nZ2VkSW4uZW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmaWVsZHMgPSByZXMucmVjb3Jkc1swXTtcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkcy5OYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZmllbGRzLkVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlckluZm8uaWQsXG4gICAgICAgICAgICAgICAgICAgIHBob3RvVXJsOiBmaWVsZHMuRnVsbFBob3RvVXJsLFxuICAgICAgICAgICAgICAgICAgICBidWlsZGVyX2lkOiAnJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgdGFibGU6IFwiLCBzZWxmLnVzZXIpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5jb25uLnF1ZXJ5KGBTRUxFQ1QgSWQsIE5hbWUgRlJPTSBDb250YWN0IFdIRVJFIE5hbWUgPSAnJHtzZWxmLnVzZXIubmFtZX0nYCwgZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dnaW5nSW4uZW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2dlZEluLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXIuYnVpbGRlcl9pZCA9IHJlcy5yZWNvcmRzWzBdLklkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgbG9hZGVkOiBcIiwgc2VsZi51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dnZWRJbi5lbWl0KHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIGNiOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubi5xdWVyeShxdWVyeSwgY2IpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5jb25uLmxvZ291dCgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
