import { Component } from '@angular/core';
import { GlobalFamily } from './global-family';
import { Animal } from './animal';
import {  Component, ChangeDetectionStrategy } from '@angular/core';

const FAMILIES: GlobalFamily[] = [
  {id: 1, name: 'Dogs', diet: 'Meat', noise: 'Guau',
      ability: 'Playing with balls'},
  {id: 2, name: 'Cats', diet: 'Milk', noise: 'Miau',
      ability: 'Lazy in the couch all day'},
  {id: 3, name: 'Birds', diet: 'Seed', noise: 'Sing',
      ability: 'Sing'}
];

@Component({
  selector: 'my-app',
  template: `
          <li *ngFor="let family of families">
              {{getAnimals(family)}}
          </li>
          <h1 (click)="showGlobalList(true)">{{globalList}}</h1>
            <div *ngIf="globalOrSpecific === true">
            <ul class="animals">
                <li *ngFor="let family of families">
                    <span class="badge">{{family.name}}</span>
                        eat {{family.diet}} and
                        there are {{family.members.length}}
                </li>
            </ul>
            <h3><li (click)="addNew()">Add new...</li></h3>
            <div *ngIf="new">
                <div>
                    <label>Name: </label>
                    <input [(ngModel)]="families[newElement].name"
                          placeholder="name">
                </div>
                <div>
                    <label>Diet: </label>
                    <input [(ngModel)]="families[newElement].diet"
                          placeholder="diet">
                </div>
                <div>
                    <label>Noise: </label>
                    <input [(ngModel)]="families[newElement].noise"
                          placeholder="noise">
                </div>
                <div>
                    <label>Ability: </label>
                    <input [(ngModel)]="families[newElement].ability"
                          placeholder="ability">
                </div>
            </div>
            </div>
            <h1 (click)="showGlobalList(false)">{{specificList}}</h1>
            <div *ngIf="globalOrSpecific === false">
                <li *ngFor="let family of families" (click)="onSelect(family)">
                <h2>{{family.name}}</h2>
                    <div *ngIf="selectedFamily === family">
                      <ul class="animals">
                        <li *ngFor="let animal of family.members">
                            <span class="badge">{{animal.id}}</span>
                                {{animal.name}} is {{animal.age}}
                            <button (click)="remove(animal)">
                                Remove
                            </button>
                        </li>
                      </ul>
                    </div>
                </li>
            </div>`,
})

export class AppComponent  {
    new = false;
    globalList = 'Global List';
    families: GlobalFamily[] = [
      {name: 'Dogs', diet: 'Meat', noise: 'Guau',
          ability: 'Playing with balls', members:[]},
      {name: 'Cats', diet: 'Milk', noise: 'Miau',
          ability: 'Lazy in the couch all day', members:[]},
      {name: 'Birds', diet: 'Seed', noise: 'Sing',
          ability: 'Sing', members:[]},
    ];
    newFamily: families[families.length-1];
    specificList = 'Specific List';
    animals: Animal[] = [
      {id: '11', name: 'Bobby', age: 6, family: 'Dogs'},
      {id: '12', name: 'Toby', age: 24, family: 'Birds'},
      {id: '13', name: 'Speaker', age:2, family: 'Birds'},
      {id: '14', name: 'Zipper', age: 11, family: 'Cats'},
      {id: '15', name: 'Walker', age: 8, family: 'Dogs'},
    ];
    selectedFamily: GlobalFamily;
    animalsOfFamily: Animal[];

    showGlobalList(flag: boolean): void {
        this.globalOrSpecific = flag;
    }

    getAnimals(family: GlobalFamily): void {
        var members = [];
        this.animals.forEach(function(a) {
            if (a.family === family.name) {
                var found = false;
                family.members.forEach(function(m) {
                    if (a.name === m.name)
                        found = true;
                });
                if (found === false) {
                    family.members.push(a);
                }
            }
        });
    }

    addNew(): void {
        this.new = true;
        this.families.push(new GlobalFamily());
        this.newElement = this.countFamilies()-1;
        this.families[this.newElement].members = [];
    }

    countFamilies(): int {
        return this.families.length;
    }

    onSelect(family: GlobalFamily): void {
        this.selectedFamily = family;
    }

    remove(animal: Animal): void {
        var elementToDelete = -1;
        var counter = 0;
        this.animals.forEach(function(a) {
            if (animal === a) {
                elementToDelete = counter
            }
            counter++;
        });
        if (elementToDelete !== -1) {
            this.animals.splice(elementToDelete, 1);
        }
    }
}
