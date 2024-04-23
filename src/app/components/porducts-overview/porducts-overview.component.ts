import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/api-service/products.service';
@Component({
  selector: 'app-porducts-overview',
  templateUrl: './porducts-overview.component.html',
  styleUrl: './porducts-overview.component.scss',
})
export class PorductsOverviewComponent implements OnInit {
  number_decor: string = '';
  prodService = inject(ProductsService)
  product_list: any[] = [];
  currentProduct: Employee[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.number_decor = id;
      console.log('Route parameter:', id);
    });

    this.magnify('image1', 1.5)

    this.product_list = [
      {
        id: 1,
        image:
          'https://www.schattdecor.com/media/_processed_/7/4/csm_4000584-01-000_4dddc53838.jpg',
        type: 'Acapulco Rombo',
        number_decor: '4000584-01-000',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },
      {
        id: 2,
        image:
          'https://www.schattdecor.com/media/_processed_/6/2/csm_14-24057-001_44272e863e.jpg',
        type: 'Adalar',
        number_decor: '14-24057-004',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },
      {
        id: 3,
        image:
          'https://www.schattdecor.com/media/_processed_/4/b/csm_4000579-01-000_26912e42a6.jpg',
        type: 'Adour',
        number_decor: '4000579-01-000',
        decor_type: 'Графика и структуры',
        description:
          'Каменный декор с грубой фактурой: вертикальные шлифованные рифленые бороздки придают декору Adour уникальный контраст. Ритмически продольные, мягкие оттенки создают на поверхности глубокий и скульптурный эффект. Adour впечатляет своим ярким 3D-эффектом и характером ручной работы. Этот декор особенно часто используется в ванной комнате или на кухне, где он впечатляет своей естественной элегантностью и вневременной материальностью. Его теплый цвет позволяет создавать красивые сочетания с древесиной.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },
      {
        id: 4,
        image:
          'https://www.schattdecor.com/media/_processed_/e/5/csm_4000561-01-000_86319a1c72.jpg',
        type: 'Affresco',
        number_decor: '4000561-01-000',
        decor_type: 'Графика и структуры',
        description:
          'Восхитительно! Affresco содержит классические элементы, которые напоминают старинную фресковую технику церковной росписи. Отсюда и название этого декора. Свежесть и живость дизайна создаются благодаря захватывающему сочетанию современного эффекта позолоты и традиционного художественного ремесла. В то время вручную создавались такие художественные объекты, которые сохранились до наших дней. Благодаря новой цифровой свободе они теперь захватывающим образом переносятся в будущее с помощью таких дизайнов, как Affresco. В зависимости от предпочтений декор Affresco можно дополнить золотым, розовым или разноцветным покрытием, благодаря чему создается почти голографический эффект. Affresco связывает два мира и поэтому содержит в себе как аналоговые, так и цифровые элементы.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },
      {
        id: 5,
        image:
          'https://www.schattdecor.com/media/_processed_/c/0/csm_4000516-01-000_f049792f4a.jpg',
        type: 'Alpaca',
        number_decor: '4000516-01-000',
        decor_type: 'Имитация камня',
        description:
          '«Альпака» - имитация известняка с увеличенным рисунком, которая предстаёт во всей красе на корпусах, фасадах и рабочих поверхностях кухни, создавая современный дизайн и приятную атмосферу. Тонко проработанные однотонные участки прерываются кристаллическими прожилками, придающими камню красивую глубину. Нерегулярные включения – свидетели процесса формирования минерала, в котором на протяжении веков образовывались слой за слоем.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },
      {
        id: 6,
        image:
          'https://www.schattdecor.com/media/_processed_/3/b/csm_4000531-01-000_de709a69c9.jpg',
        type: 'Anjo',
        number_decor: '4000531-01-000',
        decor_type: 'Металл и бетон',
        description:
          'Прожилки в технике трафаретной печати нарушают однородность цифрового декора Anjo, создавая весьма реалистичную трёхмерность. Металлическая поверхность излучает уникальность, прежде всего в качестве мебельного фасада или в сочетании с металлом.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },
      {
        id: 7,
        image:
          'https://www.schattdecor.com/media/_processed_/8/a/csm_14-12607-001_36c816fe95.jpg',
        type: 'Antique Hickory 2-board',
        number_decor: '14-12607-001',
        decor_type: 'Древесный декор',
        description:
          'Старые массивные деревянные настилы послужили вдохновением для создания данного декора. Весьма рустикальный по структуре материал с чётко выраженным рисунком пор оптически создает эффект изношенности.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/4/csm_14-12607-003_a7d0a6ee8d.jpg',
          'https://www.schattdecor.com/media/_processed_/d/4/csm_14-12607-004_0602604d24.jpg',
        ],
      },

      {
        id: 8,
        image:
          'https://www.schattdecor.com/media/_processed_/6/a/csm_14-54210-001_a15ee23fa1.jpg',
        type: 'Arabescato Gold',
        number_decor: '14-54210-001',
        decor_type: 'Имитация камня',
        description:
          'Серебро, золото, бронза в небольших кристаллических включениях делают всегда актуальный каррарский мрамор «Арабескато Голд» с типичными для данного материала прожилками элегантным и выразительным. Декор с равномерной структурой заставит блистать общественные и жилые интерьеры и придаст благородную ноту любой спальне, ванной комнате или гостиной.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/6/a/csm_14-54210-001_a15ee23fa1.jpg',
          'https://www.schattdecor.com/media/_processed_/1/6/csm_14-54210-002_0817f84679.jpg',
        ],
      },
      {
        id: 9,
        image:
          'https://www.schattdecor.com/media/_processed_/f/4/csm_14-18200-001_0cf9268ebd.jpg',
        type: 'Arenzano Eiche',
        number_decor: '14-18200-001',
        decor_type: 'Древесный декор',
        description:
          'Элегантный двухмерный эффект — особенность этой дощатой текстуры из дуба, подчеркнутой однородным нанесением цвета. На заднем фоне натуральный материал тонко перемежается с многочисленными зеркальными элементами. Таким образом создается спокойный и элегантный вид в сочетании с темными цветами, что подчеркивает структуру древесины и досок.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/f/4/csm_14-18200-001_0cf9268ebd.jpg',
          'https://www.schattdecor.com/media/_processed_/6/b/csm_14-18200-002_706ada4d23.jpg',
          'https://www.schattdecor.com/media/_processed_/3/d/csm_14-18200-003_16c7a51249.jpg',
        ],
      },
      {
        id: 11,
        image:
          'https://www.schattdecor.com/media/_processed_/2/f/csm_4000562-01-000_95860718dc.jpg',
        type: 'Artemis',
        number_decor: '4000562-01-000',
        decor_type: 'Имитация камня',
        description:
          'Этот декор просто изобилует креативным дизайном и свободой художественного оформления. Узор «елочка» с эффектом позолоты структурирует цветовой спектр, который рассеян по всему дизайну в виде различных сильных и мягких мазков насыщенных зеленых тонов. Эти растекающиеся круги цвета, становящиеся то больше, то меньше, выглядят как дикий танец листьев, напоминая лиственные деревья в лесу и абстрактные акварельные композиции, переосмысливающие природу. Artemis — это энергичный и самобытный дизайн. Не зря же он носит имя богини Артемиды, излюбленной средой обитания которой был лес. Новые возможности художественного оформления создают новые интерпретации и привносят в наше жизненное пространство свободу мысли и оптимизм.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/2/f/csm_4000562-01-000_95860718dc.jpg',
        ],
      },
      {
        id: 12,
        image:
          'https://www.schattdecor.com/media/_processed_/f/5/csm_14-54246-001_3a51486edb.jpg',
        type: 'Atlantic Coast',
        number_decor: '14-54246-001',
        decor_type: 'Имитация камня',
        description:
          'Это мелкозернистый декор из камня, похожего на песчаник, с акцентами в виде изысканных, динамичных элементов. Этот уникальный дизайн придает помещению больше характера, создает двухмерный эффект и расставляет современные акценты. Декор Atlantic Coast выделяется своим утонченным внешним видом. Ненавязчивый и в то же время эффектный — современное заявление для современных интерьеров.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/f/5/csm_14-54246-001_3a51486edb.jpg',
          'https://www.schattdecor.com/media/_processed_/f/6/csm_14-54246-004_8b1c2381ec.jpg',
          'https://www.schattdecor.com/media/_processed_/7/e/csm_14-54246-005_9ad218f271.jpg',
        ],
      },
      {
        id: 13,
        image:
          'https://www.schattdecor.com/media/_processed_/f/a/csm_4000528-01-000_3d5b1ab2d7.jpg',
        type: 'Arjuna',
        number_decor: '4000528-01-000',
        decor_type: 'Графика и структуры',
        description:
          'Мягко переплетающиеся друг с другом листья создают равномерное тепло. Глубина и разные уровни обеспечивают сильную трёхмерность рисунка и делают декор ещё более реалистичным и живым. Дизайн обладает медитативной аурой спокойствия и равновесия. С его помощью природа становится элементом современного интерьера и частью помещения.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/f/a/csm_4000528-01-000_3d5b1ab2d7.jpg',
        ],
      },
      {
        id: 14,
        image:
          'https://www.schattdecor.com/media/_processed_/7/7/csm_14-01056-001_615e0cc862.jpg',
        type: 'Atlas Zeder',
        number_decor: '14-01056-001',
        decor_type: 'Древесный декор',
        description:
          '«Кедр Атлас» представляет породу простых, элегантных текстур. Таким его делает полосатая структура древесины кедра с мелкими сучками и диагональными срезами. Спокойный, чёткий рисунок годовых колец и мягкие цветовые переходы создают, в целом, довольно равномерную текстуру.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/7/7/csm_14-01056-001_615e0cc862.jpg',
          'https://www.schattdecor.com/media/_processed_/a/0/csm_14-01056-002_6c4ec8e63c.jpg',
          'https://www.schattdecor.com/media/_processed_/2/7/csm_14-01056-003_1a62f9552e.jpg',
          'https://www.schattdecor.com/media/_processed_/d/3/csm_14-01056-004_89f010c8c1.jpg',
        ],
      },
      {
        id: 15,
        image:
          'https://www.schattdecor.com/media/_processed_/6/6/csm_4000311-23-000_7e3073ab2a.jpg',
        type: 'Barcelona',
        number_decor: '4000311-23-000',
        decor_type: 'Имитация камня',
        description:
          'This large-format marble stone with an oversized layout looks almost expressionistic and shows the impressive diversity and preeminent beauty of nature. In this stone, modernity meets creativity. Whether mirrored or in original size, it feels unique. The decor can be used to set impressive accents in living spaces, especially in combination with dark woods, which act as a strong contrast.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/6/6/csm_4000311-23-000_7e3073ab2a.jpg',
          'https://www.schattdecor.com/media/_processed_/0/2/csm_4000311-06-000_299f2afeea.jpg',
          'https://www.schattdecor.com/media/_processed_/6/1/csm_4000311-05-000_351869d798.jpg',
        ],
      },
    ];

    this.currentProduct = this.CurrentItem(
      this.product_list,
      this.number_decor
    );
  }

  getData(){
    this.prodService.dataArray$.subscribe(
      {
        next: (value)=>{
          this.product_list = value
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  CurrentItem(data: Employee[], number_id: string): Employee[] {
    return data.filter((item: any, ind: number) => {
      if (item.number_decor == number_id) {
        console.log(item);
        return item;
      }
    });
  }

  
magnify(imgID:any, zoom:any) {
  var img:any, glass:any, w:any, h:any, bw:any;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e:any) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e:any) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

}

export interface Employee {
  id: number;
  image: string;
  type: string;
  number_decor: string;
  decor_type: string;
  description: string;
  size: string;
  where_to_use: string;
  other_images: string[];
}
