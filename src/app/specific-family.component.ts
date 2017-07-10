import { Component } from '@angular/core';

export class Animal {
    id: number;
    name: string;
    age: number;
    family: Family;
}

@Component({
  selector: 'specific-family',
})
export class SpecificFamilyComponent {
}
