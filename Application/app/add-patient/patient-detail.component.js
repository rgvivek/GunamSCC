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
    var PatientDetailComponent;
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
            PatientDetailComponent = (function () {
                function PatientDetailComponent(patientService, route) {
                    this.patientService = patientService;
                    this.route = route;
                }
                ;
                PatientDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var id = +params['id'];
                        //this.patientService.getPatient(id).then(patient => this.patient = patient);
                        _this.patientService.getPatients().then(function (patients) { return _this.patient = patients[0]; });
                    });
                };
                PatientDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                PatientDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-patient-detail',
                        templateUrl: "app/patient-detail/patient-detail.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.ActivatedRoute])
                ], PatientDetailComponent);
                return PatientDetailComponent;
                var _a;
            }());
            exports_1("PatientDetailComponent", PatientDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wYXRpZW50L3BhdGllbnQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVDLGdDQUFvQixjQUE4QixFQUFVLEtBQXFCO29CQUE3RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7Z0JBQUksQ0FBQzs7Z0JBQ3RGLHlDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYzt3QkFDdkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZCLDZFQUE2RTt3QkFDN0UsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUUsT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO29CQUMvRSxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUNELHVDQUFNLEdBQU47b0JBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFqQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixXQUFXLEVBQUMsd0NBQXdDO3FCQUN2RCxDQUFDOzswQ0FBQTtnQkFlRiw2QkFBQzs7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELDJEQWFDLENBQUEiLCJmaWxlIjoiYWRkLXBhdGllbnQvcGF0aWVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudCc7XHJcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduc2YtcGF0aWVudC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJhcHAvcGF0aWVudC1kZXRhaWwvcGF0aWVudC1kZXRhaWwuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRwYXRpZW50OlBhdGllbnQ7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH07XHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0ICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG5cdCAgICBsZXQgaWQgPSArcGFyYW1zWydpZCddO1xyXG5cdCAgICAvL3RoaXMucGF0aWVudFNlcnZpY2UuZ2V0UGF0aWVudChpZCkudGhlbihwYXRpZW50ID0+IHRoaXMucGF0aWVudCA9IHBhdGllbnQpO1xyXG5cdCAgICB0aGlzLnBhdGllbnRTZXJ2aWNlLmdldFBhdGllbnRzKCkudGhlbihwYXRpZW50cz0+dGhpcy5wYXRpZW50ID0gcGF0aWVudHNbMF0pO1xyXG5cdCAgfSk7XHJcblx0fVxyXG5cdGdvQmFjaygpOiB2b2lkIHtcclxuXHQgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
