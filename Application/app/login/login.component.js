System.register(['@angular/core', '@angular/router', 'app/patient/patient.service', 'app/user/user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, patient_service_1, user_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(patientService, router) {
                    this.patientService = patientService;
                    this.router = router;
                }
                ;
                LoginComponent.prototype.ngOnInit = function () {
                    this.user = new user_1.User();
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.patientService.loginUser(this.user).subscribe(function (success) {
                        var link = ['/main'];
                        _this.router.navigate(link);
                    }, function (error) { return _this.errorMessage = error; });
                    ;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-login',
                        templateUrl: "app/login/login.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
                var _a;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUNDLHdCQUFvQixjQUE4QixFQUFVLE1BQWM7b0JBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO2dCQUFJLENBQUM7O2dCQUMvRSxpQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCw4QkFBSyxHQUFMO29CQUFBLGlCQVFDO29CQVBDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsT0FBTzt3QkFDTixJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztnQkFDSixDQUFDO2dCQWxCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUMsc0JBQXNCO3FCQUNyQyxDQUFDOztrQ0FBQTtnQkFnQkYscUJBQUM7O1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwyQ0FjQyxDQUFBIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvdXNlci91c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduc2YtbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJhcHAvbG9naW4vbG9naW4uaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfTtcclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcblx0fVxyXG5cdGxvZ2luKCk6IHZvaWQge1xyXG5cdCAgdGhpcy5wYXRpZW50U2VydmljZS5sb2dpblVzZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcblx0ICBcdHN1Y2Nlc3MgPT4ge1xyXG5cdCAgXHRcdGxldCBsaW5rID0gWycvbWFpbiddO1xyXG5cdCAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG5cdCAgXHR9LFxyXG5cdCAgXHRlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuXHQgICk7XHJcblx0fVxyXG59Il19
