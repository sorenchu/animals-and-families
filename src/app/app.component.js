"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.globalList = 'Global List';
        this.families = [
            { id: 1, name: 'Dogs', diet: 'Meat', noise: 'Guau',
                ability: 'Playing with balls' },
            { id: 2, name: 'Cats', diet: 'Milk', noise: 'Miau',
                ability: 'Lazy in the couch all day' },
            { id: 3, name: 'Birds', diet: 'Seed', noise: 'Sing',
                ability: 'Sing' },
        ];
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
        template: "<h1>{{globalList}}</h1>\n            <ul class=\"animals\">\n                <li *ngFor=\"let family of families\" >\n                    <span class=\"badge\">{{family.id}}</span> {{family.name}}\n                    eat {{family.diet}} and there are {{families.length}}\n                </li>\n            </ul>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map