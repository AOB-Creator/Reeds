import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wanted-cards',
  templateUrl: './wanted-cards.component.html',
  styleUrl: './wanted-cards.component.scss'
})
export class WantedCardsComponent implements OnInit {
  @Input() products:any;

  ngOnInit(): void {
    console.log(this.products);
    
  }
}
