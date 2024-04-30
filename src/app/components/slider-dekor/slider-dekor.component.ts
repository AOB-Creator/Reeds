import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-slider-dekor',
  templateUrl: './slider-dekor.component.html',
  styleUrl: './slider-dekor.component.scss'
})
export class SliderDekorComponent implements OnInit{

  products:any[] = []
  sliderPerImage:string = '4'

  ngOnInit(): void {
  this.getWindow()  
    this.products = [
      {
        id: 1,
        types: [
         {
          image: "https://www.schattdecor.com/media/_processed_/c/b/csm_4000398-07-000_5fd0a651fc.jpg",
          id: "4000398-07-000",
          type_decor: "Fern"
         },
         {
          image: "https://www.schattdecor.com/media/_processed_/5/7/csm_14-11069-001_875e51af19.jpg",
          id: "14-11069-001",
          type_decor: "Brighton"
         }
        ]
      },
      {
        id: 2,
        types: [
          {
            image: "https://www.schattdecor.com/media/_processed_/f/5/csm_14-54246-001_3a51486edb.jpg",
            id: "14-54246-001",
            type_decor: "Atlantic Coast"
          },
          {
            image: "https://www.schattdecor.com/media/_processed_/e/5/csm_14-54152-001_613211a36a.jpg",
            id: "4000531-01-000",
            type_decor: "Barcelona"
          },
          {
           image: "https://www.schattdecor.com/media/_processed_/5/7/csm_14-11069-001_875e51af19.jpg",
           id: "14-11069-001",
           type_decor: "Brighton"
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
  getWindow(){
    
    if(window.screen.width>1000){
      this.sliderPerImage = '4'
    }else if(window.screen.width<=1000 && window.screen.width>700){
      this.sliderPerImage = '3'
    }else if(window.screen.width<=700 && window.screen.width>600){
      this.sliderPerImage = '2'
    }else if(window.screen.width<=600 ){
      this.sliderPerImage = '2'
    }
    console.log(window.screen.width, this.sliderPerImage);
  }
}
