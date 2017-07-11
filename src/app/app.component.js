"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
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
        this.specificList = 'Specific List';
        this.animals = [
            { id: '11', name: 'Bobby', age: 6, family: this.families[0] },
            { id: '12', name: 'Toby', age: 24, family: this.families[2] },
            { id: '13', name: 'Speaker', age: 2, family: this.families[2] },
            { id: '14', name: 'Zipper', age: 11, family: this.families[1] },
            { id: '15', name: 'Walker', age: 8, family: this.families[0] },
        ];
    }
    AppComponent.prototype.showGlobalList = function (flag) {
        this.globalOrSpecific = flag;
    };
    AppComponent.prototype.getAnimals = function (family) {
        console.log(family.name);
        var members = [];
        this.animals.forEach(function (a) {
            if (a.family === family) {
                members.push(a);
            }
        });
        this.animalsOfFamily = members;
        console.log(members);
        console.log(this.animalsOfFamily);
    };
    AppComponent.prototype.getAmount = function (family) {
        var amount = 0;
        this.animals.forEach(function (a) {
            if (a.family === family) {
                amount++;
            }
        });
        return amount;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        changeDetection: core_2.ChangeDetectionStrategy.OnPush,
        selector: 'my-app',
        template: "\n          <h1 (click)=\"showGlobalList(true)\">{{globalList}}</h1>\n            <div *ngIf=\"globalOrSpecific === true\">\n            <ul class=\"animals\">\n                <li *ngFor=\"let family of families\">\n                    <span class=\"badge\">{{family.id}}</span> {{family.name}}\n                    eat {{family.diet}} and there are {{this.getAmount(family)}}\n                </li>\n            </ul>\n            </div>\n            <h1 (click)=\"showGlobalList(false)\">{{specificList}}</h1>\n            <div *ngIf=\"globalOrSpecific === false\">\n                <li *ngFor=\"let family of families\">\n                {{this.getAnimals(family)}}\n                <h2>{{family.name}}</h2>\n                    <ul class=\"animals\">\n                        <li *ngFor=\"let animal of animalsOfFamily\">\n                            <span class=\"badge\">{{animal.id}}</span> {{animal.name}} is {{animal.age}}\n                        </li>\n                    </ul>\n                </li>\n            </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map