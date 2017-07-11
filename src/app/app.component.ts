import { Component } from '@angular/core';
import { GlobalFamily } from './global-family';
import { Animal } from './animal';

@Component({
  selector: 'my-app',
  template: `<h1>{{globalList}}</h1>
            <ul class="animals">
                <li *ngFor="let family of families"
                [class.selected]="family === selectedFamily"
                (click)="onSelect(family)">
                    <span class="badge">{{family.id}}</span> {{family.name}}
                    eat {{family.diet}} and there are {{families.length}}
                </li>
            </ul>
            <div *ngIf="selectedFamily">
                <h2>{{selectedFamily.name}}</h2>
                <li *ngFor="let animal of animalsOfFamily">
                    <span class="badge">{{animal.id}}</span> {{animal.name}}
                </li>
            </div>`,
})

export class AppComponent  {
    globalList = 'Global List';
    families: GlobalFamily[] = [
      {id: 1, name: 'Dogs', diet: 'Meat', noise: 'Guau',
          ability: 'Playing with balls'},
      {id: 2, name: 'Cats', diet: 'Milk', noise: 'Miau',
          ability: 'Lazy in the couch all day'},
      {id: 3, name: 'Birds', diet: 'Seed', noise: 'Sing',
          ability: 'Sing'},
    ];
    animals: Animal[] = [
      {id: '11', name: 'Bobby', family: this.families[0]},
      {id: '12', name: 'Toby', family: this.families[1]},
      {id: '13', name: 'Speaker', family: this.families[2]},
      {id: '14', name: 'Zipper', family: this.families[0]},
      {id: '15', name: 'Walker', family: this.families[0]},
    ];
    selectedFamily: GlobalFamily;
    animalsOfFamily: Animal[];

    onSelect(family: GlobalFamily): void {
        this.selectedFamily = family;
        this.getAnimals(family, this.animals);
    }

    count(family: GlobalFamily): int {
        return family.length;
    }

    getAnimals(family: GlobalFamily, animals: Animal[]): void {
        var arrayOfAnimals = [];
        animals.forEach(function(a) {
            if (a.family === family) {
                arrayOfAnimals.push(a);
                console.log(a);
                console.log(arrayOfAnimals);
            }
        });
        console.log(arrayOfAnimals);
        this.animalsOfFamily = arrayOfAnimals;
    }
}
