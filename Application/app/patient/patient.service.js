System.register(['@angular/core', '@angular/http', 'angular2-cookie/core', 'rxjs/Observable', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, http_1, core_2, Observable_1, router_1;
    var PatientService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PatientService = (function () {
                // Resolve HTTP using the constructor
                function PatientService(http, cookieService, router) {
                    this.http = http;
                    this.cookieService = cookieService;
                    this.router = router;
                    // private instance variable to hold base url
                    this.patientsUrl = 'http://localhost:8000/patients';
                    this.header = { headers: {} };
                }
                PatientService.prototype.authenticate = function () {
                    this.header.headers['x-access-token'] = this.cookieService.get('gscc-token');
                    return this.http.post('http://localhost:8000/authenticate', {}, this.header).map(this.extractData.bind(this))
                        .catch(this.handleError);
                };
                PatientService.prototype.getPatients = function () {
                    return this.http.get(this.patientsUrl, this.header)
                        .map(this.extractData.bind(this))
                        .catch(this.handleError);
                };
                PatientService.prototype.getPatient = function (id) {
                    return this.http.get(this.patientsUrl + "/" + id, this.header)
                        .map(this.extractData.bind(this))
                        .catch(this.handleError);
                };
                PatientService.prototype.savePatient = function (patient) {
                    var res = this.http.post(this.patientsUrl, patient, this.header).map(this.extractData.bind(this))
                        .catch(this.handleError);
                    return res;
                };
                PatientService.prototype.signUpUser = function (user) {
                    var res = this.http.post('http://localhost:8000/signUp', user, this.header).map(this.extractData.bind(this))
                        .catch(this.handleError);
                    return res;
                };
                PatientService.prototype.loginUser = function (user) {
                    var res = this.http.post('http://localhost:8000/login', user, this.header).map(this.extractData.bind(this))
                        .catch(this.handleError);
                    return res;
                };
                PatientService.prototype.extractData = function (res) {
                    var body = res.json();
                    if (body && body.status != null) {
                        switch (body.status) {
                            case 4: {
                                this.router.navigate(['/login']);
                                break;
                            }
                            case 0: {
                                var expiryDate = new Date();
                                expiryDate.setDate(expiryDate.getDate() + 30);
                                this.cookieService.put('gscc-token', body.token, { expires: expiryDate });
                                this.header.headers['x-access-token'] = body.token;
                                break;
                            }
                        }
                    }
                    return body || {};
                };
                PatientService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    var errMsg;
                    if (error instanceof http_1.Response) {
                        var body = error.json() || '';
                        var err = body.error || JSON.stringify(body);
                        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                    }
                    else {
                        errMsg = error.message ? error.message : error.toString();
                    }
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                PatientService = __decorate([
                    core_1.Injectable({
                        providers: [core_2.CookieService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, core_2.CookieService, router_1.Router])
                ], PatientService);
                return PatientService;
            }());
            exports_1("PatientService", PatientService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQvcGF0aWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQ0MscUNBQXFDO2dCQUNqQyx3QkFBcUIsSUFBVSxFQUFVLGFBQTRCLEVBQVMsTUFBYztvQkFBdkUsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUM1Riw2Q0FBNkM7b0JBQ3JDLGdCQUFXLEdBQUcsZ0NBQWdDLENBQUM7b0JBQy9DLFdBQU0sR0FBRyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsQ0FBQztnQkFIaUUsQ0FBQztnQkFLcEcscUNBQVksR0FBWjtvQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0NBQW9DLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3pGLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0Qsb0NBQVcsR0FBWDtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO3lCQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUQsbUNBQVUs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TUFBYyxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzt3QkFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMvQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxHQUFLLENBQUM7b0JBQ2hFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzVELENBQUM7b0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQTdFRjtvQkFBQyxpQkFBVSxDQUFDO3dCQUNYLFNBQVMsRUFBRSxDQUFDLG9CQUFhLENBQUM7cUJBQzFCLENBQUM7O2tDQUFBO2dCQTRFRixxQkFBQztZQUFELENBMUVBLEFBMEVDLElBQUE7WUExRUQsMkNBMEVDLENBQUEiLCJmaWxlIjoicGF0aWVudC9wYXRpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XHJcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICcuL3BhdGllbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlcnM6IFtDb29raWVTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRTZXJ2aWNlIHtcclxuXHQvLyBSZXNvbHZlIEhUVFAgdXNpbmcgdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XHJcbiAgICAgLy8gcHJpdmF0ZSBpbnN0YW5jZSB2YXJpYWJsZSB0byBob2xkIGJhc2UgdXJsXHJcbiAgICAgcHJpdmF0ZSBwYXRpZW50c1VybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvcGF0aWVudHMnOyBcclxuICAgICBwcml2YXRlIGhlYWRlciA9IHtoZWFkZXJzOnt9fTtcclxuXHJcblx0YXV0aGVudGljYXRlKCkgOiB2b2lke1xyXG5cdFx0dGhpcy5oZWFkZXIuaGVhZGVyc1sneC1hY2Nlc3MtdG9rZW4nXSA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2dzY2MtdG9rZW4nKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1dGhlbnRpY2F0ZScse30sIHRoaXMuaGVhZGVyKS5tYXAodGhpcy5leHRyYWN0RGF0YS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHR9XHJcblx0Z2V0UGF0aWVudHMoKSA6IE9ic2VydmFibGU8UGF0aWVudFtdPntcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucGF0aWVudHNVcmwsIHRoaXMuaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHR9XHJcblxyXG5cdGdldFBhdGllbnQoaWQ6c3RyaW5nKSA6IE9ic2VydmFibGU8UGF0aWVudD57XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnBhdGllbnRzVXJsfS8ke2lkfWAsIHRoaXMuaGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHR9XHJcblxyXG5cdHNhdmVQYXRpZW50KHBhdGllbnQgOiBQYXRpZW50KSA6IHZvaWR7XHJcblx0XHRsZXQgcmVzID0gdGhpcy5odHRwLnBvc3QodGhpcy5wYXRpZW50c1VybCwgcGF0aWVudCwgdGhpcy5oZWFkZXIpLm1hcCh0aGlzLmV4dHJhY3REYXRhLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblxyXG5cdHNpZ25VcFVzZXIodXNlciA6IFVzZXIpIDogdm9pZHtcclxuXHRcdGxldCByZXMgPSB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NpZ25VcCcsIHVzZXIsIHRoaXMuaGVhZGVyKS5tYXAodGhpcy5leHRyYWN0RGF0YS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cclxuXHRsb2dpblVzZXIodXNlciA6IFVzZXIpIDogdm9pZHtcclxuXHRcdGxldCByZXMgPSB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2xvZ2luJywgdXNlciwgdGhpcy5oZWFkZXIpLm1hcCh0aGlzLmV4dHJhY3REYXRhLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG5cdFx0bGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG5cdFx0aWYoYm9keSAmJiBib2R5LnN0YXR1cyAhPSBudWxsKXtcclxuXHRcdFx0c3dpdGNoKGJvZHkuc3RhdHVzKXtcclxuXHRcdFx0XHRjYXNlIDQ6e1xyXG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSAwOntcclxuXHRcdFx0XHRcdGxldCBleHBpcnlEYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRcdGV4cGlyeURhdGUuc2V0RGF0ZShleHBpcnlEYXRlLmdldERhdGUoKSArIDMwKTtcclxuXHRcdFx0XHRcdHRoaXMuY29va2llU2VydmljZS5wdXQoJ2dzY2MtdG9rZW4nLCBib2R5LnRva2VuLCB7ZXhwaXJlczpleHBpcnlEYXRlfSk7XHJcblx0XHRcdFx0XHR0aGlzLmhlYWRlci5oZWFkZXJzWyd4LWFjY2Vzcy10b2tlbiddID0gYm9keS50b2tlbjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGJvZHkgfHwgeyB9O1xyXG5cdH1cclxuXHRwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuXHRcdC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcblx0XHRsZXQgZXJyTXNnOiBzdHJpbmc7XHJcblx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xyXG5cdFx0ICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xyXG5cdFx0ICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0ICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuXHR9XHJcbn0iXX0=
