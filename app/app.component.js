System.register(['angular2/core', './services/Salesforce.service', './components/Login/Login.component', './components/MainApp/main.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, Salesforce_service_1, Login_component_1, main_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Salesforce_service_1_1) {
                Salesforce_service_1 = Salesforce_service_1_1;
            },
            function (Login_component_1_1) {
                Login_component_1 = Login_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_salesforceService) {
                    this._salesforceService = _salesforceService;
                    console.log(_salesforceService);
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._salesforceService.loggedIn.subscribe(function (data) {
                        if (data === true) {
                            _this.loggedIn = true;
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/home/jason/Documents/new_dealer_tracker/dev/app.html',
                        providers: [Salesforce_service_1.SalesforceService],
                        directives: [Login_component_1.LoginComponent, main_component_1.MainComponent]
                    }),
                    __param(0, core_1.Inject(Salesforce_service_1.SalesforceService)), 
                    __metadata('design:paramtypes', [Object])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFTSUEsc0JBQStDQSxrQkFBa0JBO29CQUFsQkMsdUJBQWtCQSxHQUFsQkEsa0JBQWtCQSxDQUFBQTtvQkFDN0RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkFFREQsK0JBQVFBLEdBQVJBO29CQUFBRSxpQkFPQ0E7b0JBTkdBLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsSUFBSUE7d0JBQzVDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDaEJBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO3dCQUV6QkEsQ0FBQ0E7b0JBQ0xBLENBQUNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTtnQkFwQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsV0FBV0EsRUFBRUEsdURBQXVEQTt3QkFDcEVBLFNBQVNBLEVBQUVBLENBQUNBLHNDQUFpQkEsQ0FBQ0E7d0JBQzlCQSxVQUFVQSxFQUFFQSxDQUFDQSxnQ0FBY0EsRUFBRUEsOEJBQWFBLENBQUNBO3FCQUM5Q0EsQ0FBQ0E7b0JBSWVBLFdBQUNBLGFBQU1BLENBQUNBLHNDQUFpQkEsQ0FBQ0EsQ0FBQUE7O2lDQWUxQ0E7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtZQXhCRCx1Q0F3QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NhbGVzZm9yY2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL1NhbGVzZm9yY2Uuc2VydmljZSc7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL01haW5BcHAvbWFpbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcvaG9tZS9qYXNvbi9Eb2N1bWVudHMvbmV3X2RlYWxlcl90cmFja2VyL2Rldi9hcHAuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbU2FsZXNmb3JjZVNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtMb2dpbkNvbXBvbmVudCwgTWFpbkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGxvZ2dlZEluOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKCBASW5qZWN0KFNhbGVzZm9yY2VTZXJ2aWNlKSBwdWJsaWMgX3NhbGVzZm9yY2VTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9zYWxlc2ZvcmNlU2VydmljZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3NhbGVzZm9yY2VTZXJ2aWNlLmxvZ2dlZEluLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQodGhpcy5vbkxvZ2dlZEluKCksIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBvbkxvZ2dlZEluKCkge1xuICAgIC8vIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
