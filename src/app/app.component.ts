import { Component } from '@angular/core';

export class Family {
    id: number;
    name: string;
    diet: string;
    noise: string;
    ability: string;
}

export class Animal {
    id: number;
    name: string;
    age: number;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
            <ul class="animals">
                <li *ngFor="let animal of animals" >
                    <span class="badge">{{animal.id}}</span> {{animal.name}}
                </li>
            </ul>`,
})

export class AppComponent  {
    name = 'Animals';
    animals: Animals[] = [
      {id: '11', name: 'Bobby'},
      {id: '12', name: 'Toby'},
      {id: '13', name: 'Speaker'},
      {id: '14', name: 'Zipper'},
      {id: '15', name: 'Walker'},
    ];
    family: Family = {
      id: 1,
      name: 'Dogs',
      diet: 'Meat',
      noise: 'guau',
      ability: 'playing with balls'
    }
}
