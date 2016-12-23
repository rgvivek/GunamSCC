System.register(['@angular/core', '@angular/router', 'app/patient/patient', 'app/patient/patient.service'], function(exports_1, context_1) {
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
    var core_1, router_1, patient_1, patient_service_1;
    var PatientDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patient_1_1) {
                patient_1 = patient_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            PatientDetailComponent = (function () {
                function PatientDetailComponent(patientService, route, router) {
                    this.patientService = patientService;
                    this.route = route;
                    this.router = router;
                    this.sexList = ['Male', 'Female'];
                }
                ;
                PatientDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var id = +params['id'];
                        _this.patient = new patient_1.Patient();
                        if (id != 0) {
                            _this.patientService.getPatient(id).subscribe(function (patient) { return _this.patient = patient; }, function (error) { return _this.errorMessage = error; });
                        }
                    });
                };
                PatientDetailComponent.prototype.savePatient = function () {
                    var _this = this;
                    this.patientService.savePatient(this.patient).subscribe(function (success) {
                        alert('patient details saved');
                        var link = ['/patients'];
                        _this.router.navigate(link);
                    }, function (error) { return _this.errorMessage = error; });
                    ;
                };
                PatientDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                PatientDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-patient-detail',
                        templateUrl: "app/patient-detail/patient-detail.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.ActivatedRoute, router_1.Router])
                ], PatientDetailComponent);
                return PatientDetailComponent;
                var _a;
            }());
            exports_1("PatientDetailComponent", PatientDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtZGV0YWlsL3BhdGllbnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlDLGdDQUFvQixjQUE4QixFQUFVLEtBQXFCLEVBQVUsTUFBYztvQkFBckYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBSGpHLFlBQU8sR0FBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRzBELENBQUM7O2dCQUM5Ryx5Q0FBUSxHQUFSO29CQUFBLGlCQVVDO29CQVRDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWM7d0JBQ3ZDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO3dCQUM3QixFQUFFLENBQUEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQzs0QkFDWCxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQ2pDLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQzt3QkFDbEQsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDRDQUFXLEdBQVg7b0JBQUEsaUJBU0M7b0JBUkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDdEQsVUFBQSxPQUFPO3dCQUNOLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztnQkFDSixDQUFDO2dCQUVELHVDQUFNLEdBQU47b0JBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFuQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixXQUFXLEVBQUMsd0NBQXdDO3FCQUN2RCxDQUFDOzswQ0FBQTtnQkFpQ0YsNkJBQUM7O1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCwyREErQkMsQ0FBQSIsImZpbGUiOiJwYXRpZW50LWRldGFpbC9wYXRpZW50LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQnO1xyXG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnNmLXBhdGllbnQtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL3BhdGllbnQtZGV0YWlsL3BhdGllbnQtZGV0YWlsLmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0cHJpdmF0ZSBzZXhMaXN0OkFycmF5PHN0cmluZz4gPSBbJ01hbGUnLCAnRmVtYWxlJ107XHJcblx0cHJpdmF0ZSBwYXRpZW50OlBhdGllbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9O1xyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdCAgdGhpcy5yb3V0ZS5wYXJhbXMuZm9yRWFjaCgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuXHQgICAgbGV0IGlkID0gK3BhcmFtc1snaWQnXTtcclxuXHQgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoKTtcclxuXHQgICAgaWYoaWQgIT0gMCl7XHJcblx0ICAgIFx0dGhpcy5wYXRpZW50U2VydmljZS5nZXRQYXRpZW50KGlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBwYXRpZW50ID0+IHRoaXMucGF0aWVudCA9IHBhdGllbnQsXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgICAgICB9XHJcblx0ICB9KTtcclxuXHR9XHJcblxyXG5cdHNhdmVQYXRpZW50KCk6IHZvaWQge1xyXG5cdCAgdGhpcy5wYXRpZW50U2VydmljZS5zYXZlUGF0aWVudCh0aGlzLnBhdGllbnQpLnN1YnNjcmliZShcclxuXHQgIFx0c3VjY2VzcyA9PiB7XHJcblx0ICBcdFx0YWxlcnQoJ3BhdGllbnQgZGV0YWlscyBzYXZlZCcpO1xyXG5cdCAgXHRcdGxldCBsaW5rID0gWycvcGF0aWVudHMnXTtcclxuXHQgIFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcclxuXHQgIFx0fSxcclxuXHQgIFx0ZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcblx0ICApO1xyXG5cdH1cclxuXHJcblx0Z29CYWNrKCk6IHZvaWQge1xyXG5cdCAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG5cdH1cclxufSJdfQ==
