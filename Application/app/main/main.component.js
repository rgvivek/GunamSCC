System.register(['@angular/core', '@angular/router', 'app/patient/patient.service'], function(exports_1, context_1) {
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
    var core_1, router_1, patient_service_1;
    var MainComponent;
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
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(patientService, router) {
                    this.patientService = patientService;
                    this.router = router;
                }
                ;
                MainComponent.prototype.goToPatients = function () {
                    var link = ['/patients'];
                    this.router.navigate(link);
                };
                MainComponent.prototype.addPatient = function () {
                    var link = ['/patients/0'];
                    this.router.navigate(link);
                };
                MainComponent.prototype.addUser = function () {
                    var link = ['/signup'];
                    this.router.navigate(link);
                };
                MainComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.patientService.authenticate().subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-main',
                        templateUrl: "app/main/main.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.Router])
                ], MainComponent);
                return MainComponent;
                var _a;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFDQyx1QkFBb0IsY0FBOEIsRUFBVSxNQUFjO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFBSSxDQUFDOztnQkFDL0Usb0NBQVksR0FBWjtvQkFDRSxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxrQ0FBVSxHQUFWO29CQUNFLElBQUksSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUNELCtCQUFPLEdBQVA7b0JBQ0UsSUFBSSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsZ0NBQVEsR0FBUjtvQkFBQSxpQkFJQztvQkFIQSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FDMUIsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsRUFDcEMsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQXRCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUMsb0JBQW9CO3FCQUNuQyxDQUFDOztpQ0FBQTtnQkFvQkYsb0JBQUM7O1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx5Q0FtQkMsQ0FBQSIsImZpbGUiOiJtYWluL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduc2YtbWFpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDpcImFwcC9tYWluL21haW4uaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRTZXJ2aWNlOiBQYXRpZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9O1xyXG5cdGdvVG9QYXRpZW50cygpOiB2b2lkIHtcclxuXHQgIGxldCBsaW5rID0gWycvcGF0aWVudHMnXTtcclxuXHQgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG5cdH1cclxuXHRhZGRQYXRpZW50KCkgOiB2b2lkIHtcclxuXHQgIGxldCBsaW5rID0gWycvcGF0aWVudHMvMCddO1xyXG5cdCAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcblx0fVxyXG5cdGFkZFVzZXIoKSA6IHZvaWQge1xyXG5cdCAgbGV0IGxpbmsgPSBbJy9zaWdudXAnXTtcclxuXHQgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMucGF0aWVudFNlcnZpY2UuYXV0aGVudGljYXRlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnRzID0+IHRoaXMucGF0aWVudHMgPSBwYXRpZW50cyxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuXHR9XHJcbn0iXX0=
