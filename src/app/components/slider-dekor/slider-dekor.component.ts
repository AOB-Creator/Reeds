import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-slider-dekor',
  templateUrl: './slider-dekor.component.html',
  styleUrl: './slider-dekor.component.scss'
})
export class SliderDekorComponent implements OnInit{

  products:any[] = []

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        types: [
         {
          image: "https://www.schattdecor.com/media/_processed_/c/b/csm_4000398-07-000_5fd0a651fc.jpg",
          id: "4000531-01-000",
          type_decor: "Belize"
         },
         {
          image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
          id: "4000531-01-000",
          type_decor: "Barcelona"
         }
        ]
      },
      {
        id: 2,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Borneo Mango"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Barcelona"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/6/2/csm_14-24057-001_44272e863e.jpg",
           id: "14-24057-004",
           type_decor: "Adalar"
          },
         ]
      },
      {
        id: 3,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Belize"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Adalar"
          },
          {
            image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
            id: "4000531-01-000",
            type_decor: "Belize"
           },
           {
            image: "https://www.schattdecor.com/media/_processed_/7/1/csm_4000330-21-000_7cf50fe046.jpg",
            id: "4000531-01-000",
            type_decor: "Borneo Mango"
           },
         ]
      },
      {
        id: 4,
        types: [
          {
            image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
            id: "4000531-01-000",
            type_decor: "Belize"
           },
           {
            image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
            id: "4000531-01-000",
            type_decor: "Adalar"
           },
         ]
      },
      {
        id: 5,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Belize"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Barcelona"
          }
         ]
      },
      {
        id: 6,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Belize"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Artemis"
          }
         ]
      },
      {
        id: 7,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Belize"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Borneo Mango"
          },
          {
            image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
            id: "4000531-01-000",
            type_decor: "Artemis"
           }
         ]
      },
      {
        id: 8,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Belize"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Artemis"
          },
          {
            image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
            id: "4000531-01-000",
            type_decor: "Artemis"
           }
         ]
      },
      {
        id: 9,
        types: [
          {
           image: "https://www.schattdecor.com/media/_processed_/e/e/csm_14-54191-001_183ef7ecce.jpg",
           id: "4000531-01-000",
           type_decor: "Belize"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
           id: "4000531-01-000",
           type_decor: "Artemis"
          },
          {
            image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
            id: "4000531-01-000",
            type_decor: "Artemis"
           }
         ]
      },
     
    ]
  }

}
