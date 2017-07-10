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
        this.animals = [
            { id: '11', name: 'Bobby' },
            { id: '12', name: 'Toby' },
            { id: '13', name: 'Speaker' },
            { id: '14', name: 'Zipper' },
            { id: '15', name: 'Walker' },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{name}}</h1>\n            <h2>{{animal.name}}</h2>\n            <div><label>id: </label>{{animal.id}}</div>\n            <div>\n              <label>name: </label>\n              <input [(ngModel)]=\"animal.name\" placeholder=\"name\">\n            </div>\n\n            <h2>My animals</h2>\n            <ul class=\"animals\">\n                <li *ngFor=\"let animal of animals\" (click)=\"onSelect(animal)>\n                    <span class=\"badge\">{{animal.id}}</span> {{animal.name}}\n                </li>\n            </ul>",
        styles: ["\n              .selected {\n                background-color: #CFD8DC !important;\n                color: white;\n              }\n              .animals {\n                margin: 0 0 2em 0;\n                list-style-type: none;\n                padding: 0;\n                width: 15em;\n              }\n              .animals li {\n                cursor: pointer;\n                position: relative;\n                left: 0;\n                background-color: #EEE;\n                margin: .5em;\n                padding: .3em 0;\n                height: 1.6em;\n                border-radius: 4px;\n              }\n              .animals li.selected:hover {\n                background-color: #BBD8DC !important;\n                color: white;\n              }\n              .animals li:hover {\n                color: #607D8B;\n                background-color: #DDD;\n                left: .1em;\n              }\n              .animals .text {\n                position: relative;\n                top: -3px;\n              }\n              .animals .badge {\n                display: inline-block;\n                font-size: small;\n                color: white;\n                padding: 0.8em 0.7em 0 0.7em;\n                background-color: #607D8B;\n                line-height: 1em;\n                position: relative;\n                left: -1px;\n                top: -4px;\n                height: 1.8em;\n                margin-right: .8em;\n                border-radius: 4px 0 0 4px;\n              }\n            "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map