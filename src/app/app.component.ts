import { Component } from '@angular/core';

export class Animal {
    name: string;
    id: number;
    family: Family;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
            <h2>{{animal.name}}</h2>
            <div><label>id: </label>{{animal.id}}</div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="animal.name" placeholder="name">
            </div>

            <h2>My animals</h2>
            <ul class="animals">
                <li *ngFor="let animal of animals" (click)="onSelect(animal)>
                    <span class="badge">{{animal.id}}</span> {{animal.name}}
                </li>
            </ul>`
            ,
            styles: [`
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .animals {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
              }
              .animals li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
              }
              .animals li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
              }
              .animals li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .animals .text {
                position: relative;
                top: -3px;
              }
              .animals .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
              }
            `]
})

export class AppComponent  {
  name = 'Animals';
  animal: Animal = {
    name: 'Toby',
    id: 1
  };
  animals: Animals[] = [
    {id: '11', name: 'Bobby'},
    {id: '12', name: 'Toby'},
    {id: '13', name: 'Speaker'},
    {id: '14', name: 'Zipper'},
    {id: '15', name: 'Walker'},
  ];
}
