import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor() {}
  cards = document.querySelector('.cards');
  images = document.querySelectorAll('.card__img');
  backgrounds = document.querySelectorAll('.card__bg');
  range = 40;
  timeouter: any;
  // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
  calcValue = (a: any, b: any) =>
    ((a / b) * this.range - this.range / 2).toFixed(1); // thanks @alice-mx
}
