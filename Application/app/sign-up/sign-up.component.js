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
    var SignUpComponent;
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
            SignUpComponent = (function () {
                function SignUpComponent(patientService, router) {
                    this.patientService = patientService;
                    this.router = router;
                }
                ;
                SignUpComponent.prototype.ngOnInit = function () {
                    this.user = new user_1.User();
                };
                SignUpComponent.prototype.signUp = function () {
                    var _this = this;
                    this.patientService.signUpUser(this.user).subscribe(function (success) {
                        var status = success.status;
                        if (status === 0) {
                            var link = ['/patients'];
                            _this.router.navigate(link);
                        }
                        alert(success.message);
                        _this.user = new user_1.User();
                    }, function (error) { return _this.errorMessage = error; });
                    ;
                };
                SignUpComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-sign-up',
                        templateUrl: "app/sign-up/sign-up.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.Router])
                ], SignUpComponent);
                return SignUpComponent;
                var _a;
            }());
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAvc2lnbi11cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFDQyx5QkFBb0IsY0FBOEIsRUFBVSxNQUFjO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFBSSxDQUFDOztnQkFDL0Usa0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsZ0NBQU0sR0FBTjtvQkFBQSxpQkFhQztvQkFaQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNsRCxVQUFBLE9BQU87d0JBQ04sSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDNUIsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ2hCLElBQUksSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM1QixDQUFDO3dCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztnQkFDSixDQUFDO2dCQXZCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUMsMEJBQTBCO3FCQUN6QyxDQUFDOzttQ0FBQTtnQkFxQkYsc0JBQUM7O1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCw2Q0FtQkMsQ0FBQSIsImZpbGUiOiJzaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ2FwcC91c2VyL3VzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zZi1zaWduLXVwJyxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL3NpZ24tdXAvc2lnbi11cC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfTtcclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcblx0fVxyXG5cdHNpZ25VcCgpOiB2b2lkIHtcclxuXHQgIHRoaXMucGF0aWVudFNlcnZpY2Uuc2lnblVwVXNlcih0aGlzLnVzZXIpLnN1YnNjcmliZShcclxuXHQgIFx0c3VjY2VzcyA9PiB7XHJcblx0ICBcdFx0dmFyIHN0YXR1cyA9IHN1Y2Nlc3Muc3RhdHVzO1xyXG5cdCAgXHRcdGlmKHN0YXR1cyA9PT0gMCl7XHJcblx0ICBcdFx0XHRsZXQgbGluayA9IFsnL3BhdGllbnRzJ107XHJcblx0ICBcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuXHQgIFx0XHR9XHJcblx0ICBcdFx0YWxlcnQoc3VjY2Vzcy5tZXNzYWdlKTtcclxuXHQgIFx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG5cdCAgXHR9LFxyXG5cdCAgXHRlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuXHQgICk7XHJcblx0fVxyXG59Il19
