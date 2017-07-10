"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Family = (function () {
    function Family() {
    }
    return Family;
}());
exports.Family = Family;
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Animals';
        this.animals = [
            { id: '11', name: 'Bobby' },
            { id: '12', name: 'Toby' },
            { id: '13', name: 'Speaker' },
            { id: '14', name: 'Zipper' },
            { id: '15', name: 'Walker' },
        ];
        this.family = {
            id: 1,
            name: 'Dogs',
            diet: 'Meat',
            noise: 'guau',
            ability: 'playing with balls'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{name}}</h1>\n            <ul class=\"animals\">\n                <li *ngFor=\"let animal of animals\" >\n                    <span class=\"badge\">{{animal.id}}</span> {{animal.name}}\n                </li>\n            </ul>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map