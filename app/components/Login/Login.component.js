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
                        templateUrl: "/home/jason/Documents/new_dealer_tracker/dev/components/Login/Login.html",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9naW4vTG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50IiwiTG9naW5Db21wb25lbnQuY29uc3RydWN0b3IiLCJMb2dpbkNvbXBvbmVudC5uZ09uSW5pdCIsIkxvZ2luQ29tcG9uZW50Lm9uTG9naW5DbGljayIsIkxvZ2luQ29tcG9uZW50Lm9uUmVtZW1iZXJlZENsaWNrIiwiTG9naW5Db21wb25lbnQud3JpdGVMb2dpbkNyZWRlbnRpYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUlJLEVBQUU7Ozs7Ozs7Ozs7WUFBRixFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZCO2dCQWlCSUEsd0JBQW9CQSxPQUFlQTtvQkFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7b0JBQy9CQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdEJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUN0QkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3hCQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQUVERCxpQ0FBUUEsR0FBUkE7b0JBQUFFLGlCQWlDQ0E7b0JBaENHQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxRQUFRQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDMUZBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLGdEQUFnREEsQ0FBQ0EsQ0FBQ0E7d0JBQ2hFQSxNQUFNQSxDQUFDQTtvQkFDWEEsQ0FBQ0E7b0JBQ0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlB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Q0E7Z0JBQ3ZDQSxDQUFDQTtnQkFFREosOENBQXFCQSxHQUFyQkEsVUFBc0JBLFFBQWdCQSxFQUFFQSxRQUFnQkEsRUFBRUEsWUFBb0JBO29CQUMxRUssRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsdUJBQXVCQSxFQUFFQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxZQUFZQSxFQUFFQSxPQUFPQSxFQUFFQSxVQUFTQSxHQUFHQTt3QkFDekcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDOzRCQUFDLE1BQU0sR0FBRyxDQUFDO3dCQUNuQixNQUFNLENBQUM7b0JBQ1gsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBekVMTDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTt3QkFDakJBLFdBQVdBLEVBQUVBLDBFQUEwRUE7d0JBQ3ZGQSxNQUFNQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQTt3QkFDeEJBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFtQkEsQ0FBQ0E7cUJBQ3BDQSxDQUFDQTs7bUNBcUVEQTtnQkFBREEscUJBQUNBO1lBQURBLENBMUVBLEFBMEVDQSxJQUFBO1lBMUVELDJDQTBFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvTG9naW4vTG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgTmdab25lfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgTUFURVJJQUxfUFJPVklERVJTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2FsbFwiO1xuaW1wb3J0IHtJTG9naW59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSUxvZ2luLmludGVyZmFjZSc7XG5cbmxldCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiBcIi9ob21lL2phc29uL0RvY3VtZW50cy9uZXdfZGVhbGVyX3RyYWNrZXIvZGV2L2NvbXBvbmVudHMvTG9naW4vTG9naW4uaHRtbFwiLFxuICAgIGlucHV0czogWydsb2dpblNlcnZpY2UnXSxcbiAgICBkaXJlY3RpdmVzOiBbTUFURVJJQUxfRElSRUNUSVZFU11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsb2dpblNlcnZpY2U6IGFueTtcbiAgICBsb2dnaW5nSW46IGJvb2xlYW47XG4gICAgbG9nZ2VkSW46IGJvb2xlYW47XG5cbiAgICByZW1lbWJlcmVkOiBib29sZWFuO1xuICAgIGhhc0NyZWRlbnRpYWxzOiBib29sZWFuO1xuICAgIHVzZXJDcmVkOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbWVtYmVyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNDcmVkZW50aWFscyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5TZXJ2aWNlLmxvZ2luIHx8ICF0aGlzLmxvZ2luU2VydmljZS5sb2dnZWRJbiB8fCAhdGhpcy5sb2dpblNlcnZpY2UubG9nZ2luZ0luKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHNlcnZpY2UgcHJvdmlkZWQgZG9lc24ndCBpbXBsZW1lbnQgSUxvZ2luIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ2luU2VydmljZSk7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2dpbmdJbi5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luZyBpbjogXCIsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5sb2dnaW5nSW4gPSBkYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dnZWRJbi5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIGluOiBcIiwgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlZW50ZXIgdGhlIEFuZ3VsYXIgem9uZSBhbmQgZGlzcGxheSBkb25lXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7IGNvbnNvbGUubG9nKCdPdXRzaWRlIERvbmUhJykgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVtZW1iZXJlZCAmJiAhdGhpcy5oYXNDcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVMb2dpbkNyZWRlbnRpYWxzKHRoaXMudXNlckNyZWRbMF0sIHRoaXMudXNlckNyZWRbMV0sIHRoaXMudXNlckNyZWRbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhcImxvZ2luX2NyZWRlbnRpYWxzLnR4dFwiKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1lbWJlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFzQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGZpbGVDb250ZW50czogYW55ID0gZnMucmVhZEZpbGVTeW5jKFwibG9naW5fY3JlZGVudGlhbHMudHh0XCIsIFwidXRmLThcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlQ29udGVudHMpO1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gZmlsZUNvbnRlbnRzLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmVzKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKGxpbmVzWzBdLCBsaW5lc1sxXSwgbGluZXNbMl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2dpbkNsaWNrKHVzZXJuYW1lLCBwYXNzd29yZCwgc2VjdXJpdHlfa2V5KSB7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgc2VjdXJpdHlfa2V5KTtcbiAgICAgICAgdGhpcy51c2VyQ3JlZCA9IFt1c2VybmFtZSwgcGFzc3dvcmQsIHNlY3VyaXR5X2tleV07XG4gICAgfVxuXG4gICAgb25SZW1lbWJlcmVkQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucmVtZW1iZXJlZCA9ICF0aGlzLnJlbWVtYmVyZWQ7XG4gICAgfVxuXG4gICAgd3JpdGVMb2dpbkNyZWRlbnRpYWxzKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHNlY3VyaXR5X2tleTogc3RyaW5nKSB7XG4gICAgICAgIGZzLndyaXRlRmlsZSgnbG9naW5fY3JlZGVudGlhbHMudHh0JywgdXNlcm5hbWUgKyBcIlxcblwiICsgcGFzc3dvcmQgKyBcIlxcblwiICsgc2VjdXJpdHlfa2V5LCBcInV0Zi04XCIsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
