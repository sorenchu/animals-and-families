import { Component } from '@angular/core';

export class Animal {
    name: string;
    id: number;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
            <h2>{{animal.name}}</h2>
            <div><label>id: </label>{{animal.id}}</div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="animal.name" placeholder="name">
            </div>`,
})

export class AppComponent  {
  name = 'Animals';
  animal: Animal = {
    name: 'Toby',
    id: 1
  };
}
