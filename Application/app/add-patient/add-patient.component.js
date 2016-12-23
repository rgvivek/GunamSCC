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
    var AddPatientComponent;
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
            AddPatientComponent = (function () {
                function AddPatientComponent(patientService, router) {
                    this.patientService = patientService;
                    this.router = router;
                    this.sexList = ['Male', 'Female'];
                }
                ;
                AddPatientComponent.prototype.ngOnInit = function () {
                    this.patient = new patient_1.Patient();
                };
                AddPatientComponent.prototype.addPatient = function () {
                    var _this = this;
                    this.patientService.savePatient(this.patient).subscribe(function (success) {
                        var link = ['/patients'];
                        _this.router.navigate(link);
                    }, function (error) { return _this.errorMessage = error; });
                    ;
                };
                AddPatientComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-add-patient',
                        templateUrl: "app/add-patient/add-patient.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.Router])
                ], AddPatientComponent);
                return AddPatientComponent;
                var _a;
            }());
            exports_1("AddPatientComponent", AddPatientComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXRpZW50L2FkZC1wYXRpZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlDLDZCQUFvQixjQUE4QixFQUFVLE1BQWM7b0JBQXRELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUhuRSxZQUFPLEdBQWlCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUc0QixDQUFDOztnQkFDL0Usc0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUNELHdDQUFVLEdBQVY7b0JBQUEsaUJBUUM7b0JBUEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDdEQsVUFBQSxPQUFPO3dCQUNOLElBQUksSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO29CQUMxQyxDQUFDO2dCQUNKLENBQUM7Z0JBckJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsV0FBVyxFQUFDLGtDQUFrQztxQkFDakQsQ0FBQzs7dUNBQUE7Z0JBbUJGLDBCQUFDOztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQscURBaUJDLENBQUEiLCJmaWxlIjoiYWRkLXBhdGllbnQvYWRkLXBhdGllbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICdhcHAvcGF0aWVudC9wYXRpZW50JztcclxuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tICdhcHAvcGF0aWVudC9wYXRpZW50LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zZi1hZGQtcGF0aWVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDpcImFwcC9hZGQtcGF0aWVudC9hZGQtcGF0aWVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRQYXRpZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdHB1YmxpYyBzZXhMaXN0OkFycmF5PHN0cmluZz4gPSBbJ01hbGUnLCAnRmVtYWxlJ107XHJcblx0cHJpdmF0ZSBwYXRpZW50OlBhdGllbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH07XHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnBhdGllbnQgPSBuZXcgUGF0aWVudCgpO1xyXG5cdH1cclxuXHRhZGRQYXRpZW50KCk6IHZvaWQge1xyXG5cdCAgdGhpcy5wYXRpZW50U2VydmljZS5zYXZlUGF0aWVudCh0aGlzLnBhdGllbnQpLnN1YnNjcmliZShcclxuXHQgIFx0c3VjY2VzcyA9PiB7XHJcblx0ICBcdFx0bGV0IGxpbmsgPSBbJy9wYXRpZW50cyddO1xyXG5cdCAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG5cdCAgXHR9LFxyXG5cdCAgXHRlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuXHQgICk7XHJcblx0fVxyXG59Il19
