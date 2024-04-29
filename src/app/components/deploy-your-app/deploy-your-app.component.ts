import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deploy-your-app',
  templateUrl: './deploy-your-app.component.html',
  styleUrl: './deploy-your-app.component.scss'
})
export class DeployYourAppComponent implements OnInit{
  cardDetails:any[] = []

  ngOnInit(): void {
    this.cardDetails = [
      {
        id: 1,
        title: 'Размещение заказа',
        description: 'Готовы начать? Заполните форму заказа с необходимыми деталями, и мы свяжемся с вами в кратчайшие сроки. Наша команда готова обсудить ваши требования и предложить индивидуальные решения для вашего проекта.',
        slugs: 'icon-chat-light.svg'
      },
      {
        id: 2,
        title: 'Мы можем принимать заказы из любого уголка мира',
        description: 'Мы готовы принимать заказы из любой точки мира. Независимо от вашего местоположения, вы можете обращаться к нам для заказа наших услуг или продукции.',
        slugs: 'icon-planet-light.svg'
      },
      {
        id: 3,
        title: 'Мой доступный для приема заказов круглосуточно, 7 дней в неделю',
        description: 'Мы доступны для приема заказов круглосуточно, 7 дней в неделю. Независимо от времени суток, вы можете оставить свой заказ, и мы обработаем его в кратчайшие сроки.',
        slugs: 'icon-fast-checkout-light.svg'
      },
      {
        id: 4,
        title: 'Мы можем регулярно поставлять вам нашу продукцию',
        description: 'Мы рады предложить регулярные поставки нашей продукции. Обсудите с нами ваши потребности, и мы разработаем гибкий график доставки, удовлетворяющий вашему бизнесу.',
        slugs: 'icon-delivery-light.svg'
      },

    ]  
  }
}
