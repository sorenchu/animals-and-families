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
            { id: '11', name: 'Bobby', family: this.families[0] },
            { id: '12', name: 'Toby', family: this.families[1] },
            { id: '13', name: 'Speaker', family: this.families[2] },
            { id: '14', name: 'Zipper', family: this.families[0] },
            { id: '15', name: 'Walker', family: this.families[0] },
        ];
    }
    AppComponent.prototype.onSelect = function (family) {
        this.selectedFamily = family;
        this.getAnimals(family, this.animals);
    };
    AppComponent.prototype.count = function (family) {
        return family.length;
    };
    AppComponent.prototype.getAnimals = function (family, animals) {
        var arrayOfAnimals = [];
        animals.forEach(function (a) {
            if (a.family === family) {
                arrayOfAnimals.push(a);
                console.log(a);
                console.log(arrayOfAnimals);
            }
        });
        console.log(arrayOfAnimals);
        this.animalsOfFamily = arrayOfAnimals;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>{{globalList}}</h1>\n            <ul class=\"animals\">\n                <li *ngFor=\"let family of families\"\n                [class.selected]=\"family === selectedFamily\"\n                (click)=\"onSelect(family)\">\n                    <span class=\"badge\">{{family.id}}</span> {{family.name}}\n                    eat {{family.diet}} and there are {{families.length}}\n                </li>\n            </ul>\n            <div *ngIf=\"selectedFamily\">\n                <h2>{{selectedFamily.name}}</h2>\n                <li *ngFor=\"let animal of animalsOfFamily\">\n                    <span class=\"badge\">{{animal.id}}</span> {{animal.name}}\n                </li>\n            </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map