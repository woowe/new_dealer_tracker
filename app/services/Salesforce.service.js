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
                        photoUrl: ''
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
                };
                SalesforceService.prototype.query = function (query) {
                    return this.conn.query(query);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6WyJTYWxlc2ZvcmNlU2VydmljZSIsIlNhbGVzZm9yY2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2FsZXNmb3JjZVNlcnZpY2UubG9naW4iLCJTYWxlc2ZvcmNlU2VydmljZS5xdWVyeSIsIlNhbGVzZm9yY2VTZXJ2aWNlLmxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFHSSxPQUFPOzs7Ozs7O1lBQVAsT0FBTyxHQUFRLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQVNsQztnQkFTSUE7b0JBUEFDLHNCQUFzQkE7b0JBQ3RCQSxjQUFTQSxHQUEwQkEsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO29CQUN0REEsYUFBUUEsR0FBMEJBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtvQkFNakRBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEsd0NBQXdDQTtxQkFDckRBLENBQUNBLENBQUNBO29CQUVIQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQTt3QkFDUkEsSUFBSUEsRUFBRUEsRUFBRUE7d0JBQ1JBLEtBQUtBLEVBQUVBLEVBQUVBO3dCQUNUQSxFQUFFQSxFQUFFQSxFQUFFQTt3QkFDTkEsUUFBUUEsRUFBRUEsRUFBRUE7cUJBQ2ZBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFFREQsaUNBQUtBLEdBQUxBLFVBQU1BLFFBQWdCQSxFQUFFQSxRQUFnQkEsRUFBRUEsWUFBb0JBO29CQUMxREUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDaEJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLEdBQUdBLFlBQVlBLEVBQUVBLFVBQVNBLEdBQUdBLEVBQUVBLFFBQVFBO3dCQUNyRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDZixDQUFDO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxHQUFHLFFBQVEsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7NEJBQzVHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDOzRCQUNmLENBQUM7NEJBQ0QsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRztnQ0FDUixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0NBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztnQ0FDbkIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dDQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsWUFBWTs2QkFDaEMsQ0FBQzs0QkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0IsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBRURGLGlDQUFLQSxHQUFMQSxVQUFNQSxLQUFhQTtvQkFDZkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFFREgsa0NBQU1BLEdBQU5BO29CQUNJSSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQXpETEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7c0NBMERaQTtnQkFBREEsd0JBQUNBO1lBQURBLENBMURBLEFBMERDQSxJQUFBO1lBMURELGlEQTBEQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SUxvZ2lufSBmcm9tICcuLi9pbnRlcmZhY2VzL0lMb2dpbi5pbnRlcmZhY2UnO1xuXG5sZXQganNmb3JjZTogYW55ID0gcmVxdWlyZSgnanNmb3JjZScpO1xuY29uc29sZS5sb2coXCJKU0ZPUkNFOiBcIiwganNmb3JjZSk7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIHBob3RvVXJsOiBzdHJpbmdcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNhbGVzZm9yY2VTZXJ2aWNlIGltcGxlbWVudHMgSUxvZ2luIHtcbiAgICAvKiogcHVibGljIG1lbWJlcnMgKiovXG4gICAgbG9nZ2luZ0luOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgbG9nZ2VkSW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB1c2VyOiBVc2VyXG5cbiAgICAvKiogcHJpdmF0ZSBtZW1iZXJzICoqL1xuICAgIHByaXZhdGUgY29ubjogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbm4gPSBuZXcganNmb3JjZS5Db25uZWN0aW9uKHtcbiAgICAgICAgICAgIGxvZ2luVXJsOiBcImh0dHBzOi8vZGVhbGVyc29ja2V0Lm15LnNhbGVzZm9yY2UuY29tXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBwaG90b1VybDogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBzZWN1cml0eV9rZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxvZ2dpbmdJbi5lbWl0KHRydWUpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29ubi5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQgKyBzZWN1cml0eV9rZXksIGZ1bmN0aW9uKGVyciwgdXNlckluZm8pIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIHNlbGYubG9nZ2luZ0luLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNlbGYubG9nZ2VkSW4uZW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuY29ubi5xdWVyeShcIlNFTEVDVCBOYW1lLCBFbWFpbCwgRnVsbFBob3RvVXJsIEZST00gVXNlciBXSEVSRSBJZCA9ICdcIiArIHVzZXJJbmZvLmlkICsgXCInXCIsIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb2dnaW5nSW4uZW1pdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2dlZEluLmVtaXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZmllbGRzID0gcmVzLnJlY29yZHNbMF07XG4gICAgICAgICAgICAgICAgc2VsZi51c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZHMuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGZpZWxkcy5FbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJJbmZvLmlkLFxuICAgICAgICAgICAgICAgICAgICBwaG90b1VybDogZmllbGRzLkZ1bGxQaG90b1VybFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2VsZi5sb2dnZWRJbi5lbWl0KHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubi5xdWVyeShxdWVyeSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmNvbm4ubG9nb3V0KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
