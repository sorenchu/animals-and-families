import { Component } from '@angular/core';
import { GlobalFamily } from './global-family';
import { Animal } from './animal';

@Component({
  selector: 'my-app',
  template: `<h1>{{globalList}}</h1>
            <ul class="animals">
                <li *ngFor="let family of families" >
                    <span class="badge">{{family.id}}</span> {{family.name}}
                    eat {{family.diet}} and there are {{families.length}}
                </li>
            </ul>`,
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
      {id: '11', name: 'Bobby'},
      {id: '12', name: 'Toby'},
      {id: '13', name: 'Speaker'},
      {id: '14', name: 'Zipper'},
      {id: '15', name: 'Walker'},
    ];
}
