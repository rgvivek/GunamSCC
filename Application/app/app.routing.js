System.register(['@angular/router', './login/login.component', './sign-up/sign-up.component', './main/main.component', './patients/patients.component', './patient-detail/patient-detail.component', './add-patient/add-patient.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, sign_up_component_1, main_component_1, patients_component_1, patient_detail_component_1, add_patient_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: "/main",
                    pathMatch: "full"
                }, {
                    path: 'login',
                    component: login_component_1.LoginComponent
                }, {
                    path: 'signup',
                    component: sign_up_component_1.SignUpComponent
                }, {
                    path: 'main',
                    component: main_component_1.MainComponent
                }, {
                    path: 'patients',
                    component: patients_component_1.PatientsComponent
                }, {
                    path: 'patients/:id',
                    component: patient_detail_component_1.PatientDetailComponent
                }, {
                    path: 'detail/:id',
                    component: patient_detail_component_1.PatientDetailComponent
                }, {
                    path: 'patients/new',
                    component: add_patient_component_1.AddPatientComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFTTSxTQUFTLEVBNkJGLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE3QmQsU0FBUyxHQUFXO2dCQUN2QjtvQkFDQyxJQUFJLEVBQUUsRUFBRTtvQkFDUixVQUFVLEVBQUUsT0FBTztvQkFDbkIsU0FBUyxFQUFDLE1BQU07aUJBQ2YsRUFBQztvQkFDQSxJQUFJLEVBQUUsT0FBTztvQkFDYixTQUFTLEVBQUUsZ0NBQWM7aUJBQzFCLEVBQUM7b0JBQ0EsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLG1DQUFlO2lCQUMzQixFQUFDO29CQUNBLElBQUksRUFBRSxNQUFNO29CQUNaLFNBQVMsRUFBRSw4QkFBYTtpQkFDekIsRUFBQztvQkFDQSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjtpQkFDN0IsRUFBQztvQkFDQSxJQUFJLEVBQUUsY0FBYztvQkFDcEIsU0FBUyxFQUFFLGlEQUFzQjtpQkFDbEMsRUFBQztvQkFDRCxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsU0FBUyxFQUFFLGlEQUFzQjtpQkFDbEMsRUFBQztvQkFDQyxJQUFJLEVBQUUsY0FBYztvQkFDcEIsU0FBUyxFQUFFLDJDQUFtQjtpQkFDL0I7YUFDSixDQUFDO1lBRVcscUJBQUEsT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gIGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9ICBmcm9tICcuL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9ICBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF0aWVudHNDb21wb25lbnQgfSBmcm9tICcuL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXRpZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9wYXRpZW50LWRldGFpbC9wYXRpZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkUGF0aWVudENvbXBvbmVudCB9ICBmcm9tICcuL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50LmNvbXBvbmVudCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICBcdHtcbiAgXHRcdHBhdGg6ICcnLFxuICBcdFx0cmVkaXJlY3RUbzogXCIvbWFpblwiLFxuICBcdFx0cGF0aE1hdGNoOlwiZnVsbFwiXG4gICAgfSx7XG4gICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICAgIH0se1xuICAgICAgcGF0aDogJ3NpZ251cCcsXG4gICAgICBjb21wb25lbnQ6IFNpZ25VcENvbXBvbmVudFxuICAgIH0se1xuICAgICAgcGF0aDogJ21haW4nLFxuICAgICAgY29tcG9uZW50OiBNYWluQ29tcG9uZW50XG4gICAgfSx7XG4gICAgICBwYXRoOiAncGF0aWVudHMnLFxuICAgICAgY29tcG9uZW50OiBQYXRpZW50c0NvbXBvbmVudFxuICAgIH0se1xuICAgICAgcGF0aDogJ3BhdGllbnRzLzppZCcsXG4gICAgICBjb21wb25lbnQ6IFBhdGllbnREZXRhaWxDb21wb25lbnRcbiAgICB9LHtcbiAgICBcdHBhdGg6ICdkZXRhaWwvOmlkJyxcbiAgICBcdGNvbXBvbmVudDogUGF0aWVudERldGFpbENvbXBvbmVudFxuICBcdH0se1xuICAgICAgcGF0aDogJ3BhdGllbnRzL25ldycsXG4gICAgICBjb21wb25lbnQ6IEFkZFBhdGllbnRDb21wb25lbnRcbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7Il19
