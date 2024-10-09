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
        imageshow: '../../../assets/images/showroom/kitchen-1.jpg',
        types: [
         {
          image: "/assets/images/products/20/main.jpg",
          id: "MLDSP-K-0005",
          type_decor: "K-0005"
         },
         {
          image: "/assets/images/products/21/main.jpg",
          id: "MLDSP-K-0006",
          type_decor: "K-0006"
         }
        ]
      },
      {
        id: 2,
        imageshow: '../../../assets/images/showroom/kitchen-2.jpg',
        types: [
          {
            image: "/assets/images/products/14/main.jpg",
            id: "MLDSP-M-0008",
            type_decor: "M-0008"
          },
          {
            image: "/assets/images/products/2/main.jpg",
            id: "MLDSP-S-0002",
            type_decor: "S-0002"
          }
        ]
      },
      {
        id: 3,
        imageshow: '../../../assets/images/showroom/kitchen-3.jpg',
        types: [
          {
            image: "/assets/images/products/2/main.jpg",
            id: "MLDSP-S-0002",
            type_decor: "S-0002"
          },
          {
            image: "/assets/images/products/14/main.jpg",
            id: "MLDSP-M-0008",
            type_decor: "M-0008"
          }
        ]
      },
      {
        id: 4,
        imageshow: '../../../assets/images/showroom/kitchen-7.jpg',
        types: [
          {
            image: "/assets/images/products/2/main.jpg",
            id: "MLDSP-S-0002",
            type_decor: "S-0002"
          },
          {
            image: "/assets/images/products/14/main.jpg",
            id: "MLDSP-M-0008",
            type_decor: "M-0008"
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
