System.register(['@angular/core', './patient/patient.service'], function(exports_1, context_1) {
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
    var core_1, patient_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(patientService) {
                    this.patientService = patientService;
                    this.header = { title: "Gunam Siddha Cure Center",
                        subTitle: "Patients Record Holder"
                    };
                }
                ;
                AppComponent.prototype.getPatients = function () {
                    var _this = this;
                    this.patientService.getPatients().subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    //this.getPatients();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-app',
                        templateUrl: "app/app.html"
                    }), 
                    __metadata('design:paramtypes', [patient_service_1.PatientService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFDQyxzQkFBb0IsY0FBOEI7b0JBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFDbEQsV0FBTSxHQUFZLEVBQUUsS0FBSyxFQUFHLDBCQUEwQjt3QkFDakQsUUFBUSxFQUFHLHdCQUF3QjtxQkFDbEMsQ0FBQztnQkFIK0MsQ0FBQzs7Z0JBSXZELGtDQUFXLEdBQVg7b0JBQUEsaUJBSUM7b0JBSEEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQ3hCLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLEVBQ3BDLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUNDLHFCQUFxQjtnQkFDdEIsQ0FBQztnQkFwQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsV0FBVyxFQUFDLGNBQWM7cUJBQzdCLENBQUM7O2dDQUFBO2dCQWtCRixtQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsdUNBY0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbW1vbi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJy4vcGF0aWVudC9wYXRpZW50JztcclxuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tICcuL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduc2YtYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL2FwcC5odG1sXCJcclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudFNlcnZpY2UpIHsgfTtcclxuXHRoZWFkZXIgOiBIZWFkZXIgPSB7IHRpdGxlIDogXCJHdW5hbSBTaWRkaGEgQ3VyZSBDZW50ZXJcIixcclxuXHRcdFx0XHRcdFx0c3ViVGl0bGUgOiBcIlBhdGllbnRzIFJlY29yZCBIb2xkZXJcIlxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdGdldFBhdGllbnRzKCk6dm9pZHtcclxuXHRcdHRoaXMucGF0aWVudFNlcnZpY2UuZ2V0UGF0aWVudHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgIHBhdGllbnRzID0+IHRoaXMucGF0aWVudHMgPSBwYXRpZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Ly90aGlzLmdldFBhdGllbnRzKCk7XHJcblx0fVxyXG59Il19
