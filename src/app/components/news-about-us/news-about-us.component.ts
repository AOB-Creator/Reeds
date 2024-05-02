import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-about-us',
  templateUrl: './news-about-us.component.html',
  styleUrl: './news-about-us.component.scss'
})
export class NewsAboutUsComponent implements OnInit{
  news:any[]= []

  ngOnInit(): void {
    this.news = [
      {
        id: 1,
        title: "B Муйнакском районе Каракалпакстана открылся завод по производству ЛДСП, который обошелся в 81 миллиард..",
        description: "Информационная служба Министерства инвестиций ..",
        image: "../../../assets/images/news/2-21.jpg",
        reference: "https://nuz.uz/2022/12/09/v-mujnakskom-rajone-karakalpakstana-otkrylsya-zavod-po-proizvodstvu-ldsp-kotoryj-oboshelsya-v-81-milliard-sumov/?ysclid=lvaq5na6bx490046294" 
      },
      {
        id: 2,
        title: "B Каракалпакстане запущено новое предприятие по производству...",
        description: "B Муйнакском районе запущено новое предприятие по ...",
        image: "../../../assets/images/news/dca7c224b7f022cb0318c41f7ffa721f.jpg",
        reference: "https://kun.uz/ru/news/2022/12/09/v-karakalpakstane-zapushcheno-novoye-predpriyatiye-po-proizvodstvu-dsp-paneley" 
      },
      {
        id: 3,
        title: "Мойнақ районында “MUYNAK LDSP” кәрханасының ашылыў мәресими болып өтти",
        description: "Onda Qaraqalpaqstan Respublikasi Joqarǵi Keńesiniń Basliǵi Amanbay Orinbaev...",
        image: "../../../assets/images/news/photo_2023-01-26_23-14-29-1024x682.jpg",
        reference: "https://joqargikenes.uz/qr/15076.html?print=print" 
      },
    ]
  }
}
