"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var global_family_1 = require("./global-family");
var FAMILIES = [
    { id: 1, name: 'Dogs', diet: 'Meat', noise: 'Guau',
        ability: 'Playing with balls' },
    { id: 2, name: 'Cats', diet: 'Milk', noise: 'Miau',
        ability: 'Lazy in the couch all day' },
    { id: 3, name: 'Birds', diet: 'Seed', noise: 'Sing',
        ability: 'Sing' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.new = false;
        this.globalList = 'Global List';
        this.families = [
            { name: 'Dogs', diet: 'Meat', noise: 'Guau',
                ability: 'Playing with balls', members: [] },
            { name: 'Cats', diet: 'Milk', noise: 'Miau',
                ability: 'Lazy in the couch all day', members: [] },
            { name: 'Birds', diet: 'Seed', noise: 'Sing',
                ability: 'Sing', members: [] },
        ];
        this.newFamily = -1;
        this.specificList = 'Specific List';
        this.animals = [
            { id: '11', name: 'Bobby', age: 6, family: 'Dogs' },
            { id: '12', name: 'Toby', age: 24, family: 'Birds' },
            { id: '13', name: 'Speaker', age: 2, family: 'Birds' },
            { id: '14', name: 'Zipper', age: 11, family: 'Cats' },
            { id: '15', name: 'Walker', age: 8, family: 'Dogs' },
        ];
    }
    ;
    AppComponent.prototype.showGlobalList = function (flag) {
        this.globalOrSpecific = flag;
    };
    AppComponent.prototype.getAnimals = function (family) {
        var members = [];
        this.animals.forEach(function (a) {
            if (a.family === family.name) {
                var found = false;
                family.members.forEach(function (m) {
                    if (a.name === m.name)
                        found = true;
                });
                if (found === false) {
                    family.members.push(a);
                }
            }
        });
    };
    AppComponent.prototype.addNew = function () {
        this.new = true;
        this.families.push(new global_family_1.GlobalFamily());
        this.newElement = this.countFamilies() - 1;
        this.families[this.newElement].members = [];
    };
    AppComponent.prototype.countFamilies = function () {
        return this.families.length;
    };
    AppComponent.prototype.onSelect = function (family) {
        this.selectedFamily = family;
    };
    AppComponent.prototype.remove = function (animal) {
        var elementToDelete = -1;
        var counter = 0;
        this.animals.forEach(function (a) {
            if (animal === a) {
                elementToDelete = counter;
            }
            counter++;
        });
        if (elementToDelete !== -1) {
            this.animals.splice(elementToDelete, 1);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n          <li *ngFor=\"let family of families\">\n              {{getAnimals(family)}}\n          </li>\n          <h1 (click)=\"showGlobalList(true)\">{{globalList}}</h1>\n            <div *ngIf=\"globalOrSpecific === true\">\n            <ul class=\"animals\">\n                <li *ngFor=\"let family of families\">\n                    <span class=\"badge\">{{family.name}}</span>\n                        eat {{family.diet}} and\n                        there are {{family.members.length}}\n                </li>\n            </ul>\n            <h3><li (click)=\"addNew()\">Add new...</li></h3>\n            <div *ngIf=\"new\">\n                <div>\n                    <label>Name: </label>\n                    <input [(ngModel)]=\"families[newElement].name\"\n                          placeholder=\"name\">\n                </div>\n                <div>\n                    <label>Diet: </label>\n                    <input [(ngModel)]=\"families[newElement].diet\"\n                          placeholder=\"diet\">\n                </div>\n                <div>\n                    <label>Noise: </label>\n                    <input [(ngModel)]=\"families[newElement].noise\"\n                          placeholder=\"noise\">\n                </div>\n                <div>\n                    <label>Ability: </label>\n                    <input [(ngModel)]=\"families[newElement].ability\"\n                          placeholder=\"ability\">\n                </div>\n            </div>\n            </div>\n            <h1 (click)=\"showGlobalList(false)\">{{specificList}}</h1>\n            <div *ngIf=\"globalOrSpecific === false\">\n                <li *ngFor=\"let family of families\" (click)=\"onSelect(family)\">\n                <h2>{{family.name}}</h2>\n                    <div *ngIf=\"selectedFamily === family\">\n                      <ul class=\"animals\">\n                        <li *ngFor=\"let animal of family.members\">\n                            <span class=\"badge\">{{animal.id}}</span>\n                                {{animal.name}} is {{animal.age}}\n                            <button (click)=\"remove(animal)\">\n                                Remove\n                            </button>\n                        </li>\n                      </ul>\n                    </div>\n                </li>\n            </div>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map