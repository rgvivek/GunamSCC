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
    var PatientsComponent;
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
            PatientsComponent = (function () {
                function PatientsComponent(patientService, router) {
                    var _this = this;
                    this.patientService = patientService;
                    this.router = router;
                    this.columnDefs = [
                        { headerName: "ID", field: "id", sortingOrder: ["asc", "desc"], editable: false, width: 100 },
                        { headerName: "First Name", field: "firstname", sortingOrder: ["asc", "desc"], editable: false, hide: false },
                        { headerName: "Last Name", field: "lastname", sortingOrder: ["asc", "desc"], editable: false, hide: false },
                        { headerName: "Sex", field: "sex", sortingOrder: ["asc", "desc"], editable: false, hide: false },
                        { headerName: "Date Of Birth", field: "dateofbirth", sortingOrder: ["asc", "desc"], editable: false, hide: false },
                        { headerName: "Contact No.", field: "mobilenumber", sortingOrder: ["asc", "desc"], editable: false, hide: false },
                        { headerName: "Father's Name", field: "fathersname", sortingOrder: ["asc", "desc"], editable: false, hide: false }
                    ];
                    this.patientService.getPatients().subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
                    this.gridOptions = {
                        enableSorting: true,
                        rowData: this.patients,
                        columnDefs: this.columnDefs,
                        onGridReady: function (event) {
                            event.api.sizeColumnsToFit();
                        }
                    };
                }
                ;
                PatientsComponent.prototype.getPatients = function () {
                    var _this = this;
                    this.patientService.getPatients().subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
                };
                PatientsComponent.prototype.ngOnInit = function () {
                    this.getPatients();
                };
                PatientsComponent.prototype.gotoDetail = function (event) {
                    var link = ['/detail', event.data.id];
                    this.router.navigate(link);
                };
                PatientsComponent.prototype.goBack = function () {
                    window.history.back();
                };
                PatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-patients',
                        templateUrl: "app/patients/patients.html"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof patient_service_1.PatientService !== 'undefined' && patient_service_1.PatientService) === 'function' && _a) || Object, router_1.Router])
                ], PatientsComponent);
                return PatientsComponent;
                var _a;
            }());
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNDLDJCQUFvQixjQUE4QixFQUFVLE1BQWM7b0JBRDNFLGlCQXNDQztvQkFyQ29CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHO3dCQUNYLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7d0JBQzdGLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7d0JBQzdHLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7d0JBQzNHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7d0JBQ2hHLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7d0JBQ2xILEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7d0JBQ2pILEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7cUJBQ3JILENBQUM7b0JBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQzVCLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLEVBQ3BDLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRzt3QkFDZixhQUFhLEVBQUUsSUFBSTt3QkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7d0JBQzNCLFdBQVcsRUFBRSxVQUFTLEtBQUs7NEJBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDakMsQ0FBQztxQkFDUCxDQUFBO2dCQUNGLENBQUM7O2dCQUNELHVDQUFXLEdBQVg7b0JBQUEsaUJBSUM7b0JBSEEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQ3pCLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLEVBQ3BDLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFDRCxvQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxzQ0FBVSxHQUFWLFVBQVcsS0FBSztvQkFDZCxJQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxrQ0FBTSxHQUFOO29CQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBekNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBQyw0QkFBNEI7cUJBQzNDLENBQUM7O3FDQUFBO2dCQXVDRix3QkFBQzs7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELGlEQXNDQyxDQUFBIiwiZmlsZSI6InBhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnYXBwL3BhdGllbnQvcGF0aWVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduc2YtcGF0aWVudHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJhcHAvcGF0aWVudHMvcGF0aWVudHMuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRTZXJ2aWNlOiBQYXRpZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5jb2x1bW5EZWZzID0gW1xyXG5cdCAgICAgICAgeyBoZWFkZXJOYW1lOiBcIklEXCIsIGZpZWxkOiBcImlkXCIsIHNvcnRpbmdPcmRlcjogW1wiYXNjXCIsIFwiZGVzY1wiXSwgZWRpdGFibGU6IGZhbHNlLCB3aWR0aDogMTAwIH0sXHJcblx0ICAgICAgICB7IGhlYWRlck5hbWU6IFwiRmlyc3QgTmFtZVwiLCBmaWVsZDogXCJmaXJzdG5hbWVcIiwgc29ydGluZ09yZGVyOiBbXCJhc2NcIiwgXCJkZXNjXCJdLCBlZGl0YWJsZTogZmFsc2UsIGhpZGU6IGZhbHNlIH0sXHJcblx0ICAgICAgICB7IGhlYWRlck5hbWU6IFwiTGFzdCBOYW1lXCIsIGZpZWxkOiBcImxhc3RuYW1lXCIsIHNvcnRpbmdPcmRlcjogW1wiYXNjXCIsIFwiZGVzY1wiXSwgZWRpdGFibGU6IGZhbHNlLCBoaWRlOiBmYWxzZSB9LFxyXG5cdCAgICAgICAgeyBoZWFkZXJOYW1lOiBcIlNleFwiLCBmaWVsZDogXCJzZXhcIiwgc29ydGluZ09yZGVyOiBbXCJhc2NcIiwgXCJkZXNjXCJdLCBlZGl0YWJsZTogZmFsc2UsIGhpZGU6IGZhbHNlIH0sXHJcblx0ICAgICAgICB7IGhlYWRlck5hbWU6IFwiRGF0ZSBPZiBCaXJ0aFwiLCBmaWVsZDogXCJkYXRlb2ZiaXJ0aFwiLCBzb3J0aW5nT3JkZXI6IFtcImFzY1wiLCBcImRlc2NcIl0sIGVkaXRhYmxlOiBmYWxzZSwgaGlkZTogZmFsc2UgfSxcclxuXHQgICAgICAgIHsgaGVhZGVyTmFtZTogXCJDb250YWN0IE5vLlwiLCBmaWVsZDogXCJtb2JpbGVudW1iZXJcIiwgc29ydGluZ09yZGVyOiBbXCJhc2NcIiwgXCJkZXNjXCJdLCBlZGl0YWJsZTogZmFsc2UsIGhpZGU6IGZhbHNlIH0sXHJcblx0ICAgICAgICB7IGhlYWRlck5hbWU6IFwiRmF0aGVyJ3MgTmFtZVwiLCBmaWVsZDogXCJmYXRoZXJzbmFtZVwiLCBzb3J0aW5nT3JkZXI6IFtcImFzY1wiLCBcImRlc2NcIl0sIGVkaXRhYmxlOiBmYWxzZSwgaGlkZTogZmFsc2UgfVxyXG5cdCAgICBdO1xyXG5cdCAgICB0aGlzLnBhdGllbnRTZXJ2aWNlLmdldFBhdGllbnRzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnRzID0+IHRoaXMucGF0aWVudHMgPSBwYXRpZW50cyxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuXHQgICAgdGhpcy5ncmlkT3B0aW9ucyA9IHtcclxuXHQgICAgICAgIGVuYWJsZVNvcnRpbmc6IHRydWUsXHJcblx0ICAgICAgICByb3dEYXRhOiB0aGlzLnBhdGllbnRzLFxyXG5cdCAgICAgICAgY29sdW1uRGVmczogdGhpcy5jb2x1bW5EZWZzLFxyXG5cdCAgICAgICAgb25HcmlkUmVhZHk6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBcdCAgICAgICAgZXZlbnQuYXBpLnNpemVDb2x1bW5zVG9GaXQoKTtcclxuXHQgICAgICAgIH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdGdldFBhdGllbnRzKCk6dm9pZHtcclxuXHRcdHRoaXMucGF0aWVudFNlcnZpY2UuZ2V0UGF0aWVudHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudHMgPT4gdGhpcy5wYXRpZW50cyA9IHBhdGllbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZ2V0UGF0aWVudHMoKTtcclxuXHR9XHJcblx0Z290b0RldGFpbChldmVudCk6IHZvaWQge1xyXG5cdCAgbGV0IGxpbmsgPSBbJy9kZXRhaWwnLCBldmVudC5kYXRhLmlkXTtcclxuXHQgIHRoaXMucm91dGVyLm5hdmlnYXRlKGxpbmspO1xyXG5cdH1cclxuXHRnb0JhY2soKTogdm9pZCB7XHJcblx0ICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcblx0fVxyXG59Il19
