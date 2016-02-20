System.register(['angular2/core', "ng2-material/all"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1;
    var fs, LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            fs = require('fs');
            LoginComponent = (function () {
                function LoginComponent(_ngZone) {
                    this._ngZone = _ngZone;
                    this.loggedIn = false;
                    this.loggedIn = false;
                    this.remembered = false;
                    this.hasCredentials = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.loginService.login || !this.loginService.loggedIn || !this.loginService.loggingIn) {
                        console.error("The service provided doesn't implement ILogin!");
                        return;
                    }
                    console.log(this.loginService);
                    this.loginService.loggingIn.subscribe(function (data) {
                        console.log("Logging in: ", data);
                        _this.loggingIn = data;
                    });
                    this.loginService.loggedIn.subscribe(function (data) {
                        console.log("Logged in: ", data);
                        _this._ngZone.runOutsideAngular(function () {
                            // reenter the Angular zone and display done
                            _this.loggedIn = data;
                            _this._ngZone.run(function () { console.log('Outside Done!'); });
                        });
                        if (_this.remembered && !_this.hasCredentials) {
                            _this.writeLoginCredentials(_this.userCred[0], _this.userCred[1], _this.userCred[2]);
                        }
                    });
                    if (fs.existsSync("login_credentials.txt")) {
                        this.remembered = true;
                        this.hasCredentials = true;
                        var fileContents = fs.readFileSync("login_credentials.txt", "utf-8");
                        console.log(fileContents);
                        var lines = fileContents.split('\n');
                        console.log(lines);
                        this.loginService.login(lines[0], lines[1], lines[2]);
                    }
                };
                LoginComponent.prototype.onLoginClick = function (username, password, security_key) {
                    this.loginService.login(username, password, security_key);
                    this.userCred = [username, password, security_key];
                };
                LoginComponent.prototype.onRememberedClick = function () {
                    this.remembered = !this.remembered;
                };
                LoginComponent.prototype.writeLoginCredentials = function (username, password, security_key) {
                    fs.writeFile('login_credentials.txt', username + "\n" + password + "\n" + security_key, "utf-8", function (err) {
                        if (err)
                            throw err;
                        return;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: "dev/components/Login/Login.html",
                        inputs: ['loginService'],
                        directives: [all_1.MATERIAL_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9naW4vTG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50IiwiTG9naW5Db21wb25lbnQuY29uc3RydWN0b3IiLCJMb2dpbkNvbXBvbmVudC5uZ09uSW5pdCIsIkxvZ2luQ29tcG9uZW50Lm9uTG9naW5DbGljayIsIkxvZ2luQ29tcG9uZW50Lm9uUmVtZW1iZXJlZENsaWNrIiwiTG9naW5Db21wb25lbnQud3JpdGVMb2dpbkNyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUlJLEVBQUU7Ozs7Ozs7Ozs7WUFBRixFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZCO2dCQWlCSUEsd0JBQW9CQSxPQUFlQTtvQkFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7b0JBQy9CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdEJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUN0QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3hCQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQUVERCxpQ0FBUUEsR0FBUkE7b0JBQUFFLGlCQWlDQ0E7b0JBaENHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDMUZBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGdEQUFnREEsQ0FBQ0EsQ0FBQ0E7d0JBQ2hFQSxNQUFNQSxDQUFDQTtvQkFDWEEsQ0FBQ0E7b0JBQ0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlB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Q0E7Z0JBQ3ZDQSxDQUFDQTtnQkFFREosOENBQXFCQSxHQUFyQkEsVUFBc0JBLFFBQWdCQSxFQUFFQSxRQUFnQkEsRUFBRUEsWUFBb0JBO29CQUMxRUssRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsdUJBQXVCQSxFQUFFQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxZQUFZQSxFQUFFQSxPQUFPQSxFQUFFQSxVQUFTQSxHQUFHQTt3QkFDekcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDOzRCQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUNuQixNQUFNLENBQUM7b0JBQ1gsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBekVMTDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTt3QkFDakJBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7d0JBQzlDQSxNQUFNQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQTt3QkFDeEJBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7cUJBQ3BDQSxDQUFDQTs7bUNBcUVEQTtnQkFBREEscUJBQUNBO1lBQURBLENBMUVBLEFBMEVDQSxJQUFBO1lBMUVELDJDQTBFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvTG9naW4vTG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgTmdab25lfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgTUFURVJJQUxfUFJPVklERVJTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2FsbFwiO1xuaW1wb3J0IHtJTG9naW59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSUxvZ2luLmludGVyZmFjZSc7XG5cbmxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiBcImRldi9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmh0bWxcIixcbiAgICBpbnB1dHM6IFsnbG9naW5TZXJ2aWNlJ10sXG4gICAgZGlyZWN0aXZlczogW01BVEVSSUFMX0RJUkVDVElWRVNdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbG9naW5TZXJ2aWNlOiBhbnk7XG4gICAgbG9nZ2luZ0luOiBib29sZWFuO1xuICAgIGxvZ2dlZEluOiBib29sZWFuO1xuXG4gICAgcmVtZW1iZXJlZDogYm9vbGVhbjtcbiAgICBoYXNDcmVkZW50aWFsczogYm9vbGVhbjtcbiAgICB1c2VyQ3JlZDogc3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1lbWJlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luU2VydmljZS5sb2dpbiB8fCAhdGhpcy5sb2dpblNlcnZpY2UubG9nZ2VkSW4gfHwgIXRoaXMubG9naW5TZXJ2aWNlLmxvZ2dpbmdJbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBzZXJ2aWNlIHByb3ZpZGVkIGRvZXNuJ3QgaW1wbGVtZW50IElMb2dpbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2dpblNlcnZpY2UpO1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dnaW5nSW4uc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgaW46IFwiLCBkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2luZ0luID0gZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nZ2VkSW4uc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dlZCBpbjogXCIsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZWVudGVyIHRoZSBBbmd1bGFyIHpvbmUgYW5kIGRpc3BsYXkgZG9uZVxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4geyBjb25zb2xlLmxvZygnT3V0c2lkZSBEb25lIScpIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbWVtYmVyZWQgJiYgIXRoaXMuaGFzQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlTG9naW5DcmVkZW50aWFscyh0aGlzLnVzZXJDcmVkWzBdLCB0aGlzLnVzZXJDcmVkWzFdLCB0aGlzLnVzZXJDcmVkWzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoXCJsb2dpbl9jcmVkZW50aWFscy50eHRcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmVtZW1iZXJlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhhc0NyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBmaWxlQ29udGVudHM6IGFueSA9IGZzLnJlYWRGaWxlU3luYyhcImxvZ2luX2NyZWRlbnRpYWxzLnR4dFwiLCBcInV0Zi04XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZUNvbnRlbnRzKTtcbiAgICAgICAgICAgIHZhciBsaW5lcyA9IGZpbGVDb250ZW50cy5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaW5lcyk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbihsaW5lc1swXSwgbGluZXNbMV0sIGxpbmVzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9naW5DbGljayh1c2VybmFtZSwgcGFzc3dvcmQsIHNlY3VyaXR5X2tleSkge1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIHNlY3VyaXR5X2tleSk7XG4gICAgICAgIHRoaXMudXNlckNyZWQgPSBbdXNlcm5hbWUsIHBhc3N3b3JkLCBzZWN1cml0eV9rZXldO1xuICAgIH1cblxuICAgIG9uUmVtZW1iZXJlZENsaWNrKCkge1xuICAgICAgICB0aGlzLnJlbWVtYmVyZWQgPSAhdGhpcy5yZW1lbWJlcmVkO1xuICAgIH1cblxuICAgIHdyaXRlTG9naW5DcmVkZW50aWFscyh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBzZWN1cml0eV9rZXk6IHN0cmluZykge1xuICAgICAgICBmcy53cml0ZUZpbGUoJ2xvZ2luX2NyZWRlbnRpYWxzLnR4dCcsIHVzZXJuYW1lICsgXCJcXG5cIiArIHBhc3N3b3JkICsgXCJcXG5cIiArIHNlY3VyaXR5X2tleSwgXCJ1dGYtOFwiLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
