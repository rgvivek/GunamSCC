System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UserService = (function () {
                // Resolve HTTP using the constructor
                function UserService(http) {
                    this.http = http;
                    // private instance variable to hold base url
                    this.usersUrl = 'http://localhost:8000/patients';
                }
                UserService.prototype.loginUser = function (user) {
                    var res = this.http.post(this.usersUrl, user).map(this.extractData)
                        .catch(this.handleError);
                    return res;
                };
                UserService.prototype.signUpUser = function (user) {
                    var res = this.http.post(this.usersUrl, user).map(this.extractData)
                        .catch(this.handleError);
                    return res;
                };
                UserService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                UserService.prototype.handleError = function (error) {
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
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQ0MscUNBQXFDO2dCQUNsQyxxQkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUM5Qiw2Q0FBNkM7b0JBQ3RDLGFBQVEsR0FBRyxnQ0FBZ0MsQ0FBQztnQkFGbEIsQ0FBQztnQkFHdEMsK0JBQVMsR0FBVCxVQUFVLElBQVc7b0JBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7eUJBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1osQ0FBQztnQkFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBVztvQkFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDWixDQUFDO2dCQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQWE7b0JBQ2hDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ08saUNBQVcsR0FBbkIsVUFBcUIsS0FBcUI7b0JBQ3pDLG9FQUFvRTtvQkFDcEUsSUFBSSxNQUFjLENBQUM7b0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxlQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO3dCQUNoQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9DLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxZQUFNLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxVQUFJLEdBQUssQ0FBQztvQkFDaEUsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDNUQsQ0FBQztvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBbENGO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQW1DYixrQkFBQztZQUFELENBbENBLEFBa0NDLElBQUE7WUFsQ0QscUNBa0NDLENBQUEiLCJmaWxlIjoidXNlci91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHQvLyBSZXNvbHZlIEhUVFAgdXNpbmcgdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG4gICAgIC8vIHByaXZhdGUgaW5zdGFuY2UgdmFyaWFibGUgdG8gaG9sZCBiYXNlIHVybFxyXG4gICAgcHJpdmF0ZSB1c2Vyc1VybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvcGF0aWVudHMnOyBcclxuXHRsb2dpblVzZXIodXNlciA6IFVzZXIpIDogdm9pZHtcclxuXHRcdGxldCByZXMgPSB0aGlzLmh0dHAucG9zdCh0aGlzLnVzZXJzVXJsLCB1c2VyKS5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHJcblx0c2lnblVwVXNlcih1c2VyIDogVXNlcikgOiB2b2lke1xyXG5cdFx0bGV0IHJlcyA9IHRoaXMuaHR0cC5wb3N0KHRoaXMudXNlcnNVcmwsIHVzZXIpLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuXHRcdGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuXHRcdHJldHVybiBib2R5IHx8IHsgfTtcclxuXHR9XHJcblx0cHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcblx0XHQvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG5cdFx0bGV0IGVyck1zZzogc3RyaW5nO1xyXG5cdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuXHRcdCAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuXHRcdCAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuXHRcdCAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcblx0fVxyXG59Il19
