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
    var AddPatientComponent;
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
            AddPatientComponent = (function () {
                function AddPatientComponent(patientService, route) {
                    this.patientService = patientService;
                    this.route = route;
                }
                ;
                AddPatientComponent.prototype.ngOnInit = function () {
                };
                AddPatientComponent.prototype.addPatient = function (patient) {
                    this.patientService.savePatient(patient);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtZGV0YWlsL2FkZC1wYXRpZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVDLDZCQUFvQixjQUE4QixFQUFVLEtBQWE7b0JBQXJELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUFJLENBQUM7O2dCQUM5RSxzQ0FBUSxHQUFSO2dCQUVBLENBQUM7Z0JBQ0Qsd0NBQVUsR0FBVixVQUFXLE9BQWdCO29CQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFiRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBQyxrQ0FBa0M7cUJBQ2pELENBQUM7O3VDQUFBO2dCQVdGLDBCQUFDOztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQscURBU0MsQ0FBQSIsImZpbGUiOiJwYXRpZW50LWRldGFpbC9hZGQtcGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQnO1xyXG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnNmLWFkZC1wYXRpZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFBhdGllbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0cGF0aWVudDpQYXRpZW50O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXIpIHsgfTtcclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHQgIFxyXG5cdH1cclxuXHRhZGRQYXRpZW50KHBhdGllbnQ6IFBhdGllbnQpOiB2b2lkIHtcclxuXHQgIHRoaXMucGF0aWVudFNlcnZpY2Uuc2F2ZVBhdGllbnQocGF0aWVudCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
