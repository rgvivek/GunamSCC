System.register(['@angular/core', './header'], function(exports_1, context_1) {
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
    var core_1, header_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', header_1.Header)
                ], HeaderComponent.prototype, "header", void 0);
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'nsf-header',
                        templateUrl: "app/common/header/header.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO2dCQUdBLENBQUM7Z0JBRkE7b0JBQUMsWUFBSyxFQUFFOzsrREFBQTtnQkFMVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUMsK0JBQStCO3FCQUM5QyxDQUFDOzttQ0FBQTtnQkFJRixzQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsNkNBR0MsQ0FBQSIsImZpbGUiOiJjb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnNmLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDpcImFwcC9jb21tb24vaGVhZGVyL2hlYWRlci5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcblx0QElucHV0KClcclxuXHRoZWFkZXI6IEhlYWRlcjtcclxufSJdfQ==
