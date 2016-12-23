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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXRpZW50IC0gQ29weS9hZGQtcGF0aWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJQyw2QkFBb0IsY0FBOEIsRUFBVSxNQUFjO29CQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFIbkUsWUFBTyxHQUFpQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFHNEIsQ0FBQzs7Z0JBQy9FLHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCx3Q0FBVSxHQUFWO29CQUFBLGlCQVFDO29CQVBDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ3RELFVBQUEsT0FBTzt3QkFDTixJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztnQkFDSixDQUFDO2dCQXJCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBQyxrQ0FBa0M7cUJBQ2pELENBQUM7O3VDQUFBO2dCQW1CRiwwQkFBQzs7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHFEQWlCQyxDQUFBIiwiZmlsZSI6ImFkZC1wYXRpZW50IC0gQ29weS9hZGQtcGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQnO1xyXG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gJ2FwcC9wYXRpZW50L3BhdGllbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnNmLWFkZC1wYXRpZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFBhdGllbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0cHVibGljIHNleExpc3Q6QXJyYXk8c3RyaW5nPiA9IFsnTWFsZScsICdGZW1hbGUnXTtcclxuXHRwcml2YXRlIHBhdGllbnQ6UGF0aWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfTtcclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KCk7XHJcblx0fVxyXG5cdGFkZFBhdGllbnQoKTogdm9pZCB7XHJcblx0ICB0aGlzLnBhdGllbnRTZXJ2aWNlLnNhdmVQYXRpZW50KHRoaXMucGF0aWVudCkuc3Vic2NyaWJlKFxyXG5cdCAgXHRzdWNjZXNzID0+IHtcclxuXHQgIFx0XHRsZXQgbGluayA9IFsnL3BhdGllbnRzJ107XHJcblx0ICBcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XHJcblx0ICBcdH0sXHJcblx0ICBcdGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG5cdCAgKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
