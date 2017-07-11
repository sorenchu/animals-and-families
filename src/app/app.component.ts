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
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-app',
  template: `
          <h1 (click)="showGlobalList(true)">{{globalList}}</h1>
            <div *ngIf="globalOrSpecific === true">
            <ul class="animals">
                <li *ngFor="let family of families">
                    <span class="badge">{{family.id}}</span> {{family.name}}
                    eat {{family.diet}} and there are {{getAmount(family)}}
                </li>
            </ul>
            <h3><li (click)="addNew()">Add new...</li></h3>
            <div *ngIf="new">
                <div>
                    <label>Name: </label>
                    <input [(ngModel)]="families[newElement].name" placeholder="name">
                </div>
            </div>
            </div>
            <h1 (click)="showGlobalList(false)">{{specificList}}</h1>
            <div *ngIf="globalOrSpecific === false">
                <li *ngFor="let family of families">
                {{getAnimals(family)}}
                <h2>{{family.name}}</h2>
                    <ul class="animals">
                        <li *ngFor="let animal of animalsOfFamily">
                            <span class="badge">{{animal.id}}</span> {{animal.name}} is {{animal.age}}
                        </li>
                    </ul>
                </li>
            </div>`,
})

export class AppComponent  {
    new = false;
    globalList = 'Global List';
    families: GlobalFamily[] = [
      {id: 1, name: 'Dogs', diet: 'Meat', noise: 'Guau',
          ability: 'Playing with balls'},
      {id: 2, name: 'Cats', diet: 'Milk', noise: 'Miau',
          ability: 'Lazy in the couch all day'},
      {id: 3, name: 'Birds', diet: 'Seed', noise: 'Sing',
          ability: 'Sing'},
    ];
    newFamily: families[families.length-1];
    specificList = 'Specific List';
    animals: Animal[] = [
      {id: '11', name: 'Bobby', age: 6, family: this.families[0]},
      {id: '12', name: 'Toby', age: 24, family: this.families[2]},
      {id: '13', name: 'Speaker', age:2, family: this.families[2]},
      {id: '14', name: 'Zipper', age: 11, family: this.families[1]},
      {id: '15', name: 'Walker', age: 8, family: this.families[0]},
    ];
    selectedFamily: GlobalFamily;
    animalsOfFamily: Animal[];

    showGlobalList(flag: boolean): void {
        this.globalOrSpecific = flag;
    }

    getAnimals(family: GlobalFamily): void {
        console.log(family.name);
        var members = [];
        this.animals.forEach(function(a) {
            if (a.family === family) {
                members.push(a);
            }
        });
        console.log(members);
        console.log(this.animalsOfFamily);
        this.animalsOfFamily = members;
    }

    getAmount(family: GlobalFamily): int {
        var amount = 0;
        this.animals.forEach(function(a) {
            if (a.family === family) {
                amount++;
            }
        });
        return amount;
    }

    addNew(): void {
        this.new = true;
        this.families.push(new GlobalFamily());
        this.newElement = this.countElements()-1;
        console.log(this.newElement);
    }

    countElements(): int {
        return this.families.length;
    }
}
