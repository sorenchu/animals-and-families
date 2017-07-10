"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Animals';
        this.animal = {
            name: 'Toby',
            id: 1
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{name}}</h1>\n            <h2>{{animal.name}}</h2>\n            <div><label>id: </label>{{animal.id}}</div>\n            <div>\n              <label>name: </label>\n              <input [(ngModel)]=\"animal.name\" placeholder=\"name\">\n            </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map