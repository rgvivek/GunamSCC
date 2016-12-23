System.register(['@angular/core', '@angular/platform-browser', 'angular2-cookie/services/cookies.service', '@angular/forms', '@angular/http', 'ag-grid-ng2/main', './app.routing', './app.component', './common/header/header.component', './common/footer/footer.component', './login/login.component', './sign-up/sign-up.component', './main/main.component', './patients/patients.component', './patient-detail/patient-detail.component', './add-patient/add-patient.component', './patient/patient.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, cookies_service_1, forms_1, http_1, main_1, app_routing_1, app_component_1, header_component_1, footer_component_1, login_component_1, sign_up_component_1, main_component_1, patients_component_1, patient_detail_component_1, add_patient_component_1, patient_service_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (cookies_service_1_1) {
                cookies_service_1 = cookies_service_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (sign_up_component_1_1) {
                sign_up_component_1 = sign_up_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (patients_component_1_1) {
                patients_component_1 = patients_component_1_1;
            },
            function (patient_detail_component_1_1) {
                patient_detail_component_1 = patient_detail_component_1_1;
            },
            function (add_patient_component_1_1) {
                add_patient_component_1 = add_patient_component_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            main_1.AgGridModule.withNg2ComponentSupport(),
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            login_component_1.LoginComponent,
                            sign_up_component_1.SignUpComponent,
                            main_component_1.MainComponent,
                            patients_component_1.PatientsComponent,
                            patient_detail_component_1.PatientDetailComponent,
                            add_patient_component_1.AddPatientComponent
                        ],
                        providers: [patient_service_1.PatientService, cookies_service_1.CookieService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQ0E7Z0JBQUE7Z0JBQXlCLENBQUM7Z0JBdkIxQjtvQkFBQyxlQUFRLENBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNSLGdDQUFhOzRCQUNaLG1CQUFXOzRCQUNYLGlCQUFVOzRCQUNWLGtCQUFXOzRCQUNYLG1CQUFZLENBQUMsdUJBQXVCLEVBQUU7NEJBQ3ZDLHFCQUFPO3lCQUNQO3dCQUNELFlBQVksRUFBRTs0QkFDYiw0QkFBWTs0QkFDWixrQ0FBZTs0QkFDZixrQ0FBZTs0QkFDZCxnQ0FBYzs0QkFDZCxtQ0FBZTs0QkFDZiw4QkFBYTs0QkFDZCxzQ0FBaUI7NEJBQ2pCLGlEQUFzQjs0QkFDckIsMkNBQW1CO3lCQUNwQjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLCtCQUFhLENBQUU7d0JBQzNDLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7cUJBQzVCLENBQUM7OzZCQUFBO2dCQUN1QixnQkFBQztZQUFELENBQXpCLEFBQTBCLElBQUE7WUFBMUIsaUNBQTBCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvc2VydmljZXMvY29va2llcy5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBKc29ucE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWdHcmlkTW9kdWxlIH0gZnJvbSAnYWctZ3JpZC1uZzIvbWFpbic7XG5pbXBvcnQgeyByb3V0aW5nIH0gICAgICAgIGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9ICBmcm9tICcuL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSAgZnJvbSAnLi9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSAgZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gIGZyb20gJy4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gIGZyb20gJy4vbWFpbi9tYWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXRpZW50c0NvbXBvbmVudCB9ICBmcm9tICcuL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXRpZW50RGV0YWlsQ29tcG9uZW50IH0gIGZyb20gJy4vcGF0aWVudC1kZXRhaWwvcGF0aWVudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZFBhdGllbnRDb21wb25lbnQgfSAgZnJvbSAnLi9hZGQtcGF0aWVudC9hZGQtcGF0aWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tICcuL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBcbiAgXHRCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgSnNvbnBNb2R1bGUsXG4gICAgQWdHcmlkTW9kdWxlLndpdGhOZzJDb21wb25lbnRTdXBwb3J0KCksXG4gIFx0cm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgXG4gIFx0QXBwQ29tcG9uZW50LCBcbiAgXHRIZWFkZXJDb21wb25lbnQsXG4gIFx0Rm9vdGVyQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNpZ25VcENvbXBvbmVudCxcbiAgICBNYWluQ29tcG9uZW50LFxuICBcdFBhdGllbnRzQ29tcG9uZW50LFxuICBcdFBhdGllbnREZXRhaWxDb21wb25lbnQsXG4gICAgQWRkUGF0aWVudENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtQYXRpZW50U2VydmljZSwgQ29va2llU2VydmljZSBdLFxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==
