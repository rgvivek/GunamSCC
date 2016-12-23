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
                    this.patientService.login(this.user).subscribe(function (success) {
                        var link = ['/patients'];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luIC0gQ29weS9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFDQyx3QkFBb0IsY0FBOEIsRUFBVSxNQUFjO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFBSSxDQUFDOztnQkFDL0UsaUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsOEJBQUssR0FBTDtvQkFBQSxpQkFRQztvQkFQQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFBLE9BQU87d0JBQ04sSUFBSSxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7b0JBQzFDLENBQUM7Z0JBQ0osQ0FBQztnQkFsQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFDLHNCQUFzQjtxQkFDckMsQ0FBQzs7a0NBQUE7Z0JBZ0JGLHFCQUFDOztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsMkNBY0MsQ0FBQSIsImZpbGUiOiJsb2dpbiAtIENvcHkvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ2FwcC91c2VyL3VzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zZi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDpcImFwcC9sb2dpbi9sb2dpbi5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRTZXJ2aWNlOiBQYXRpZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9O1xyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuXHR9XHJcblx0bG9naW4oKTogdm9pZCB7XHJcblx0ICB0aGlzLnBhdGllbnRTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG5cdCAgXHRzdWNjZXNzID0+IHtcclxuXHQgIFx0XHRsZXQgbGluayA9IFsnL3BhdGllbnRzJ107XHJcblx0ICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcblx0ICBcdH0sXHJcblx0ICBcdGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG5cdCAgKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
