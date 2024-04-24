import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{
  private dataArraySubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public dataArray$: Observable<any[]> = this.dataArraySubject.asObservable();

  private displayDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public displayableData$: Observable<any[]> = this.dataArraySubject.asObservable();

  productCatalog:any[] = []
  constructor() { 
    this.productCatalog = [
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
      {
        id: 16,
        image:
          'https://www.schattdecor.com/media/_processed_/d/8/csm_4000406-11-000_baf67ec3a9.jpg',
        type: 'Belize',
        number_decor: '4000406-11-000',
        decor_type: 'Имитация камня',
        description:
          'Декор, который сразу завладевает вниманием зрителя. Для создания декора «Белизе» мы выбрали особенный гранит из Китая и постарались сохранить всё его очарование. Тонкая структура гранита с глубокими выразительными прожилками и типичный сего-голубой цвет создают уникальный дизайн. Всю свою силу декор обретает рядом с тёмными тонами древесины. В такой комбинации он способен стать притягательным центром всего помещения – и прежде всего, на столешнице или фартуке кухни.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/d/8/csm_4000406-11-000_baf67ec3a9.jpg',
          'https://www.schattdecor.com/media/user_upload/09_Dekordetailseiten/Belize/40.jpg',
          'https://www.schattdecor.com/media/user_upload/09_Dekordetailseiten/Belize/54.jpg'
        ],
      },
      {
        id: 17,
        image:
          'https://www.schattdecor.com/media/_processed_/0/a/csm_4000522-01-000_00078e08ce.jpg',
        type: 'Bergen',
        number_decor: '4000406-11-000',
        decor_type: 'Металл и бетон',
        description:
          'При создании декора «Берген» мы вдохновлялись ландшафтами одноимённого города на юго-западном побережье Норвегии. Он окружён горами и фьордами – среди них, например, Согне-фьорд, самый глубокий и длинный в стране. В декоре «Берген», как в береговой линии, тоже есть глубокие включения в структуру, задающие ритм и выразительность всему дизайну. Спокойная структура бетона грациозно сливается с красивыми мраморными прожилками. Несмотря на массивность исходного материала, общее впечатление от декора одновременно элегантное, спокойное и грубое – он идеально подойдёт для оформления ванной или кухни.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/0/a/csm_4000522-01-000_00078e08ce.jpg',
        ],
      },
      {
        id: 18,
        image:
          'https://www.schattdecor.com/media/_processed_/8/4/csm_14-20032-005_f1f5a1c658.jpg',
        type: 'Bilbao Walnut',
        number_decor: '14-20032-005',
        decor_type: 'Древесный декор',
        description:
          'Это мелкий узор, напоминающий орех, не содержащий выделяющихся деталей. Благодаря этому дизайн смотрится очень однородно и может использоваться для оформления больших участков и визуального расширения площади. Его особенностью является изогнутый широкий акцент, проходящий мягкой волной по всей поверхности декора.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/8/4/csm_14-20032-005_f1f5a1c658.jpg',
          'https://www.schattdecor.com/media/_processed_/9/b/csm_14-20032-006_83937b6414.jpg',
          'https://www.schattdecor.com/media/_processed_/7/0/csm_14-20032-007_4f030101ac.jpg',
          'https://www.schattdecor.com/media/_processed_/e/9/csm_14-20032-008_cfb45e1f6b.jpg',
        ],
      },
      {
        id: 19,
        image:
          'https://www.schattdecor.com/media/_processed_/d/c/csm_14-54233-001_3cf370a21e.jpg',
        type: 'Biskaya',
        number_decor: '14-54233-001',
        decor_type: 'Имитация камня',
        description:
          'Выразительный трехмерный эффект делает этот декор совершенно особенным. Благодаря своему рельефному трехмерному виду он соответствует тенденции к материальности и обладает тактильным эффектом, что подкрепляется его характером ручного исполнения. Этому способствует рифленый вид филигранных и элегантных контуров, контрастирующих с шероховатой поверхностью. Захватывающий дизайн, который раскрывает весь свой потенциал на больших площадях в ванной и на кухне и при этом выглядит удивительно натурально — как по внешнему виду, так и по тактильным ощущениям.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/d/c/csm_14-54233-001_3cf370a21e.jpg',
          'https://www.schattdecor.com/media/_processed_/0/8/csm_14-54233-002_440529a28c.jpg',
          'https://www.schattdecor.com/media/_processed_/9/3/csm_14-54233-003_ea50cc48ce.jpg',
          'https://www.schattdecor.com/media/_processed_/5/f/csm_14-54233-004_b756801e05.jpg',
        ],
      },
      {
        id: 20,
        image:
          'https://www.schattdecor.com/media/_processed_/a/c/csm_14-18035-001_d9b8a253a9.jpg',
        type: 'Bora Bora',
        number_decor: '14-18035-001',
        decor_type: 'Древесный декор',
        description:
          'Bora Bora внешне напоминает фанеру или шпон. Настоящий шпон представляет собой не порезанное на круглые пластинки дерево, а снятый с бревна тонкий слой. Это позволяет получить особо впечатляющую общую картину. Особенность этого способа изготовления — дизайны с крупным рисунком. Чтобы подчеркнуть естественность материала, был добавлен цилиндр с перламутром. Основой для дизайна Bora Bora послужила дубовая древесина.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/a/c/csm_14-18035-001_d9b8a253a9.jpg',
          'https://www.schattdecor.com/media/_processed_/9/d/csm_14-18035-002_712c5223ce.jpg',
          'https://www.schattdecor.com/media/_processed_/3/c/csm_14-18035-003_2b4bfc88fe.jpg',
          'https://www.schattdecor.com/media/_processed_/4/7/csm_14-18035-004_336bdce4a8.jpg',
        ],
      },
      {
        id: 21,
        image:
          'https://www.schattdecor.com/media/_processed_/3/2/csm_14-24079-001_73fce5ff1f.jpg',
        type: 'Borneo Mango',
        number_decor: '14-24079-001',
        decor_type: 'Древесный декор',
        description:
          'Древесина манго выделяется своим неповторимым внешним видом, который делает ее востребованным материалом для изготовления мебели и стеновых панелей. В этот особый декор сознательно интегрировано множество небольших следов использования, чтобы создать полюбившийся винтажный эффект — так называемый Used Look. Во всех отобранных образцах эффект распила отличается и может проявляться сильнее или слабее, что придает каждому изделию индивидуальный характер.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/3/2/csm_14-24079-001_73fce5ff1f.jpg',
          'https://www.schattdecor.com/media/_processed_/3/b/csm_14-24079-002_cbb9ca8ac8.jpg',
          'https://www.schattdecor.com/media/_processed_/5/a/csm_14-24079-003_2ece36676d.jpg',
          'https://www.schattdecor.com/media/_processed_/5/0/csm_14-24079-004_276f3f151d.jpg',
        ],
      },
      {
        id: 22,
        image:
          'https://www.schattdecor.com/media/_processed_/8/1/csm_14-11007-001_09202c6b20.jpg',
        type: 'Boston',
        number_decor: '14-11007-001',
        decor_type: 'Древесный декор',
        description:
          'Декор, который идеально подходит для мебели в жилых и офисных помещениях. Декор Boston говорит сам за себя: акцент сделан на его нео бычных полосах, эффект от которых усиливается за счет чередования светлых и темных участков. Таким образом этому дизайну удалось придать сдержанности. Это одна из причин, по которой декор также хорошо подходит для создания уютной, но ограниченной рабочей среды, где ничего не отвлекает и преобладает ощущение комфорта.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/8/1/csm_14-11007-001_09202c6b20.jpg',
          'https://www.schattdecor.com/media/_processed_/b/7/csm_14-11007-002_ca314d58ce.jpg',
          'https://www.schattdecor.com/media/_processed_/e/5/csm_14-11007-003_3dda175f6e.jpg',
          'https://www.schattdecor.com/media/_processed_/c/7/csm_14-11007-004_f975e1c58c.jpg',
        ],
      },
      {
        id: 23,
        image:
          'https://www.schattdecor.com/media/_processed_/f/0/csm_4000388-26-000_35d24c869d.jpg',
        type: 'Botanic Garden',
        number_decor: '4000388-26-000',
        decor_type: 'Графика и структуры',
        description:
          'Одна из интереснейших задач нашего времени для дизайнера – как интегрировать в интерьер частичку природы. Наша разработка «Ботаник Гарден» - как раз тот самый декор, который способен внести кусочек природы в каждый дом. Для этого мы поэкспериментировали с фрагментами листьев различных растений. Перед цифровой обработкой дизайн был изготовлен вручную и раскрашен акварелью. «Ботаник Гарден» - прекрасная комбинация из креативного аналогового эксперимента и последних технологических инноваций.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/f/0/csm_4000388-26-000_35d24c869d.jpg'
        ],
      },
      {
        id: 24,
        image:
          'https://www.schattdecor.com/media/_processed_/5/7/csm_14-11069-001_875e51af19.jpg',
        type: 'Brighton',
        number_decor: '14-11069-001',
        decor_type: 'Древесный декор',
        description:
          'Декор Brighton — это цветные вкрапления, узкая, бросающаяся в глаза узорчатая отделка. Универсальный вариант в сфере мебельных декоров. Особенность этого деревянного декора состоит в том, что в нем преобладают цельные цветы, которые придают декору выразительности и естественности. Благодаря привлекательной текстуре и ярким цветовым градиентам Brighton легко комбинировать с другими декорами, что делает его популярным для всех жилых и рабочих помещений.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/5/7/csm_14-11069-001_875e51af19.jpg',
          'https://www.schattdecor.com/media/_processed_/b/0/csm_14-11069-002_f3806d5816.jpg',
          'https://www.schattdecor.com/media/_processed_/9/f/csm_14-11069-003_0344f22711.jpg',
          'https://www.schattdecor.com/media/_processed_/7/5/csm_14-11069-004_fbf99564f2.jpg',
        ],
      },
      {
        id: 25,
        image:
          'https://www.schattdecor.com/media/_processed_/f/7/csm_14-12129-001_1e19116123.jpg',
        type: 'Brisbane Elm',
        number_decor: '14-12129-001',
        decor_type: 'Древесный декор',
        description:
          'Изящная текстура вяза выглядит особенно эффектно на крупногабаритных фасадах, где она создает сдержанную и приятную на вид поверхность. Здесь дизайн полностью раскрывает свою красоту и придает мебели элегантность, соответствующую духу времени. Одной из выдающихся особенностей этого мебельного декора является универсальная сочетаемость. Он органично вписывается в различные стили интерьера и гармонирует с широким спектром цветов и материалов. Это позволяет реализовывать индивидуальные варианты оформления и придавать каждому пространству эстетику, которая неподвластна времени.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/f/7/csm_14-12129-001_1e19116123.jpg',
          'https://www.schattdecor.com/media/_processed_/1/0/csm_14-12129-002_f6e1d2db8a.jpg',
          'https://www.schattdecor.com/media/_processed_/1/f/csm_14-12129-003_81e7eddedf.jpg',
          'https://www.schattdecor.com/media/_processed_/a/d/csm_14-12129-004_a76d2935f2.jpg',
        ],
      },
      {
        id: 26,
        image:
          'https://www.schattdecor.com/media/_processed_/7/9/csm_4000527-02-000_3c2b676f1e.jpg',
        type: 'Butcher Block Gold',
        number_decor: '4000527-02-000',
        decor_type: 'Древесный декор',
        description:
          'Декор Butcher Block Gold, возможно, является лучшей имитацией поверхности наборной разделочной доски. Он будет эффектно смотреться на мебельных корпусах и уникальных столешницах. Золотые элементы придают классическому внешнему виду торцевой древесины непревзойдённую элегантность.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/7/9/csm_4000527-02-000_3c2b676f1e.jpg',
        ],
      },
      {
        id: 27,
        image:
          'https://www.schattdecor.com/media/_processed_/8/7/csm_4000211-02-000_e9bb39f7d4.jpg',
        type: 'Cabana',
        number_decor: '4000211-02-000',
        decor_type: 'Древесный декор',
        description:
          'Кто не захочет отправиться в путешествие при виде этого декора? Благодаря лёгкому градиенту и цветовым переходам от зелёного к синему он напоминает пляжную хижину на море.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/8/7/csm_4000211-02-000_e9bb39f7d4.jpg',
        ],
      },
      {
        id: 28,
        image:
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
        type: 'Calgary',
        number_decor: '14-18008-001',
        decor_type: 'Древесный декор',
        description:
          'Стильный и всегда актуальный, этот декор с его дубовыми ламелями, мягкими тенями и подчёркнутыми заглублёнными участками словно излучает с поверхностей мебели благородство и уют. Мы стремились добиться максимальной натуральности его линий. Данная тема также актуальна для отделочных материалов.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
          'https://www.schattdecor.com/media/_processed_/7/f/csm_14-18008-002_d51b7753e8.jpg',
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
        ],
      },
      {
        id: 29,
        image:
          'https://www.schattdecor.com/media/_processed_/6/5/csm_4000496-02-000_56b1a0b692.jpg',
        type: 'Cali',
        number_decor: '4000496-02-000',
        decor_type: 'Древесный декор',
        description:
          'Характер декора задаётся декоративными швами, создающими вполне реалистичный 3D эффект. Отдельные элементы выглядят как положенные друг на друга плитки из древесины, вместе создающие очень интересный дизайн. Большой формат специально создан таким образом, чтобы идеально подходить для отделки стеновых панелей, а также изготовления мебели или использования в интерьере кухни',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/6/5/csm_4000496-02-000_56b1a0b692.jpg',
          'https://www.schattdecor.com/media/_processed_/7/8/csm_4000496-03-000_212eb88ee8.jpg',
          'https://www.schattdecor.com/media/_processed_/0/0/csm_4000496-01-000_96010fd3c2.jpg',
        ],
      },
      {
        id: 30,
        image:
          'https://www.schattdecor.com/media/_processed_/7/3/csm_14-12095-001_5a9006c5c0.jpg',
        type: 'California Elm',
        number_decor: '14-12095-001',
        decor_type: 'Древесный декор',
        description:
          'Вяз Калифорния – репродукция древесины натурального ясеня. Этот исходный материал очень различается по цвету в зависимости от вида. Данный декор выделяется широким диапазоном оттенков, сбалансированным многоцветием в духе модного сейчас эффекта мозаики. Особо можно выделить окраску вытянутых срезов цветка. В целом, строение декора линейное, что выглядит элегантно и живо – но не кажется рустикальным. Вяз Калифорния может быть выполнен также с использованием перламутра, что придаст ему красивый блеск и ещё больше выделит этот дизайн.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/7/3/csm_14-12095-001_5a9006c5c0.jpg',
          'https://www.schattdecor.com/media/_processed_/7/5/csm_14-12095-002_45496adc7b.jpg',
          'https://www.schattdecor.com/media/_processed_/f/c/csm_14-12095-003_d7a792a579.jpg',
          'https://www.schattdecor.com/media/_processed_/6/9/csm_14-12095-004_977683f8a4.jpg',
          'https://www.schattdecor.com/media/_processed_/a/9/csm_14-12095-005_f2be57ffc0.jpg',
        ],
      },
      {
        id: 31,
        image:
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
        type: 'Calgary',
        number_decor: '14-18008-001',
        decor_type: 'Древесный декор',
        description:
          'Стильный и всегда актуальный, этот декор с его дубовыми ламелями, мягкими тенями и подчёркнутыми заглублёнными участками словно излучает с поверхностей мебели благородство и уют. Мы стремились добиться максимальной натуральности его линий. Данная тема также актуальна для отделочных материалов.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
          'https://www.schattdecor.com/media/_processed_/7/f/csm_14-18008-002_d51b7753e8.jpg',
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
          'https://www.schattdecor.com/media/_processed_/3/3/csm_14-18008-001_dc1b01e254.jpg',
        ],
      },
      {
        id: 32,
        image:
          'https://www.schattdecor.com/media/_processed_/1/e/csm_4000521-01-000_4c4c422764.jpg',
        type: 'Callisto',
        number_decor: '4000521-01-000',
        decor_type: 'Древесный декор',
        description:
          'Слово Callisto происходит от древнегреческого и означает «самый или самая красивая». Декор впечатляет своей предельной натуральностью и благодаря делению на тонкие планки излучает элегантность эллинистической эпохи. Он прекрасно подходит для оформления фасадов мебели, комодов или небольших предметов обстановки, придавая элегантность всему интерьеру. Небольшие фрагменты рифлёных стеновых панелей способны придать помещению сдержанность, структурированность и изящно разделить пространство. Таким образом достигается органичная планировка помещения.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/1/e/csm_4000521-01-000_4c4c422764.jpg',
        ],
      },
      {
        id: 33,
        image:
          'https://www.schattdecor.com/media/_processed_/9/6/csm_4000244-08-000_f3faac9df9.jpg',
        type: 'Batik',
        number_decor: '4000244-08-000',
        decor_type: 'Плитка',
        description:
          'Этот дизайн объединяет в себе художественный контраст графических элементов и состаренной плитки. Многообразие рисунков позволяет при внимательном рассмотрении каждый раз открывать что-то новое. Не имеет значения где: на кухонном фартуке, на столешнице или на столе. Сочетание с каким-либо древесным декором особенно подчеркнёт уникальность декора.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/9/6/csm_4000244-08-000_f3faac9df9.jpg',
        ],
      },
      {
        id: 34,
        image:
          'https://www.schattdecor.com/media/_processed_/2/a/csm_4000502-01-000_17f39c49bf.jpg',
        type: 'Fez',
        number_decor: '4000502-01-000',
        decor_type: 'Плитка',
        description:
          'Кто хоть раз прогуливался по улицам марокканского города Фес, наверняка помнит аромат восточных пряностей, повседневную суету старой медины и удивительно красивые парадные. Декор «Fez» является образцом традиционного марокканского ремесленного искусства, расставляя тем самым прекрасные цветовые акценты в интерьере.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/2/a/csm_4000502-01-000_17f39c49bf.jpg',
        ],
      },
      {
        id: 35,
        image:
          'https://www.schattdecor.com/media/_processed_/2/8/csm_4000503-01-000_2e49829876.jpg',
        type: 'Kallima',
        number_decor: '4000503-01-000',
        decor_type: 'Плитка',
        description:
          'Дизайн Kallima представляет собой мозаику из плитки, которая словно переносит в медину Марокко. Мелкие разноцветные плитки ручной работы выложены вокруг общего центра в форме звезды. Игра цвета между плитками и контрастный шов придают декору особо ощутимую трёхмерность.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/2/8/csm_4000503-01-000_2e49829876.jpg',
        ],
      },
      {
        id: 36,
        image:
          'https://www.schattdecor.com/media/_processed_/7/1/csm_4000330-21-000_7cf50fe046.jpg',
        type: 'Cristallo Mix',
        number_decor: '4000330-21-000',
        decor_type: 'Сочетание материалов',
        description:
          'В импозантную имитацию камня под названием «Кристалло» врывается древесная структура – в результате возникает декор с большим раппортом, демонстрирующий наблюдателю все грани красоты природы. Основой для этой разработки стали имитация мрамора «Кристалло» и декор глубокой печати «Вяз Китами». Данный дизайн выглядит очень убедительно благодаря естественности линий и чёткой структуре.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/7/1/csm_4000330-21-000_7cf50fe046.jpg',
        ],
      },
      {
        id: 37,
        image:
          'https://www.schattdecor.com/media/_processed_/7/1/csm_4000393-11-000_e71dcb0be6.jpg',
        type: 'Globe',
        number_decor: '4000393-11-000',
        decor_type: 'Сочетание материалов',
        description:
          'Комбинация из различных фрагментов камня, лёгкая и спокойная. Декор «Глоуб» отображает всё разнообразие природы. Здесь современные элементы с естественной структурой собраны в единую композицию. Имитации натурального камня остаются высоко актуальным элементом оформления интерьеров во все времена.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/7/1/csm_4000393-11-000_e71dcb0be6.jpg',
        ],
      },
      {
        id: 38,
        image:
          'https://www.schattdecor.com/media/_processed_/7/0/csm_4000296-17-000_f315a2ddd5.jpg',
        type: 'Helsinki',
        number_decor: '4000296-17-000',
        decor_type: 'Сочетание материалов',
        description:
          'Декор «Хельсинки» представляет собой новую и современную интерпретацию тренда «шеврон». Благодаря сочетанию классического древесного декора и различной графики возникает впечатляющая и необычная композиция, излучающая, тем не менее, определённую чёткость и лёгкость. Так же, как и город Хельсинки.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/7/0/csm_4000296-17-000_f315a2ddd5.jpg',
        ],
      },
      {
        id: 39,
        image:
          'https://www.schattdecor.com/media/_processed_/5/1/csm_4000297-04-000_fb8ad1b33d.jpg',
        type: 'Origami',
        number_decor: '4000297-04-000',
        decor_type: 'Сочетание материалов',
        description:
          'Декор «Оригами» передаёт особое чувство материальности. Классические древесные и бетонные текстуры скомбинированы из трёх различных декоров по-новому. Такое произвольное сочетание материалов универсально в применении и вызывает большой интерес за счёт неоднородности элементов.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/5/1/csm_4000297-04-000_fb8ad1b33d.jpg',
        ],
      },
      {
        id: 40,
        image:
          'https://www.schattdecor.com/media/_processed_/a/c/csm_30005-L179832_d430634716.jpg',
        type: 'Samos',
        number_decor: '30005-l179832',
        decor_type: 'Сочетание материалов',
        description:
          'Декор Самос создавался для крупных декоративных панелей. Он представляет собой сочетание фрагментов мрамора каррара и паркетных планок, расположенных по диагонали в форме рисунка "ёлочка". В результате необычной комбинации хорошо известных, традиционных материалов возникает очень современный, привлекающий внимание декор.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/a/c/csm_30005-L179832_d430634716.jpg',
          'https://www.schattdecor.com/media/_processed_/d/1/csm_30005-L179941_5f5cd85b5f.jpg',
          'https://www.schattdecor.com/media/_processed_/1/8/csm_30005-L179943_1f68704fc0.jpg',
        ],
      },
      {
        id: 41,
        image:
          'https://www.schattdecor.com/media/_processed_/d/3/csm_14-26099-010_d7b2764d0d.jpg',
        type: 'Лофтвуд',
        number_decor: '14-26099-010',
        decor_type: 'Сочетание материалов',
        description:
          'Свежая интерпретация под названием «Лофтвуд» — ответ от наших дизайнеров на новый тренд: спрос на поверхности, напоминающие грубый бетон. Вместе с этим востребовано и сочетание разных материалов. Результат смешивания: декор, поверхность которого словно чувствуется при прикосновении к нему. Тонкие трещины являются свидетельством присутствия цемента и шпателя. Сфера использования декора довольна обширна, безусловно, он будет хорошо смотреться и в современных кухнях.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/d/3/csm_14-26099-010_d7b2764d0d.jpg',
          'https://www.schattdecor.com/media/_processed_/6/1/csm_14-26099-001_36cd67a63b.jpg',
          'https://www.schattdecor.com/media/_processed_/d/2/csm_14-26099-003_b7a2e6ed5c.jpg',
          'https://www.schattdecor.com/media/_processed_/c/c/csm_14-26099-004_4529a31113.jpg',
        ],
      },
      {
        id: 42,
        image:
          'https://www.schattdecor.com/media/_processed_/d/0/csm_30004-L173091_6caf75cabe.jpg',
        type: 'Магдалена',
        number_decor: '30004-l173091',
        decor_type: 'Сочетание материалов',
        description:
          'Новый декор под названием Madalena представляет собой симбиоз двух разных текстур, прекрасно подходящий для корпусной мебели и оформления столешниц. Фрагменты поперечных срезов ствола дерева и участки каменной текстуры дополняют друг друга довольно необычным образом. Возникает современный планочный декор с широкими полосами материала.',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/d/0/csm_30004-L173091_6caf75cabe.jpg',
          'https://www.schattdecor.com/media/_processed_/a/3/csm_30004-L174084_3641309237.jpg',
          'https://www.schattdecor.com/media/_processed_/0/d/csm_30004-L174143_bf06f5c33f.jpg',
        ],
      },
      {
        id: 43,
        image:
          'https://www.schattdecor.com/media/_processed_/c/6/csm_14-26081-001_fbc449f9be.jpg',
        type: 'Неаполис',
        number_decor: '14-26081-001',
        decor_type: 'Сочетание материалов',
        description:
          'Очень гармоничная комбинация графических элементов и классической текстуры дуба — основа декора Неаполис. Этот напольный декор со сплошным рисунком подойдёт и для мебельных поверхностей, если Вам нужно создать особо рустикальную атмосферу',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/c/6/csm_14-26081-001_fbc449f9be.jpg',
          'https://www.schattdecor.com/media/_processed_/b/2/csm_14-26081-002_af13036086.jpg',
          'https://www.schattdecor.com/media/_processed_/d/8/csm_14-26081-003_e4aa4cb63b.jpg',
          'https://www.schattdecor.com/media/_processed_/e/3/csm_14-26081-010_76b371072b.jpg',
          'https://www.schattdecor.com/media/_processed_/9/a/csm_14-26081-004_b90af708cc.jpg'
        ],
      },
      {
        id: 44,
        image:
          'https://www.schattdecor.com/media/_processed_/3/d/csm_30030-L187611_195b57fdab.jpg',
        type: 'Стилвуд Шеврон',
        number_decor: '30030-l187611',
        decor_type: 'Сочетание материалов',
        description:
          'Созданный на основе французского наборного паркета, данный напольный декор уже необычен самим выбором материала. Солидный дуб совмещён с массивными стальными планками. Неравномерность расположения обеих текстур создаёт удивительную, очень современную и весьма декоративную имитацию паркета',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'https://www.schattdecor.com/media/_processed_/3/d/csm_30030-L187611_195b57fdab.jpg',
          'https://www.schattdecor.com/media/_processed_/e/4/csm_30030-L187613_3315ae3194.jpg',
          'https://www.schattdecor.com/media/_processed_/5/6/csm_30030-L188013_abb30157a8.jpg',
          'https://www.schattdecor.com/media/_processed_/f/c/csm_30030-L188014_3fe11aa201.jpg',
          'https://www.schattdecor.com/media/_processed_/9/4/csm_30030-L188015_28c70a8a69.jpg'
        ],
      },
    ];
    this.dataArraySubject.next(this.productCatalog);  
    this.displayDataSubject.next(this.productCatalog);
  }
  ngOnInit(): void {
       
  }
  
  setDataArray(dataArray: any[]): void {
    this.dataArraySubject.next(dataArray);
  }
  addData(data: any): void {
    const currentData = this.dataArraySubject.getValue();
    this.dataArraySubject.next([...currentData, data]);
  }
  setDisplayData(dataArray:any):void{
    this.displayDataSubject.next(dataArray)
  }
  addDisplayData(data: any): void {
    const currentData = this.displayDataSubject.getValue();
    this.displayDataSubject.next([...currentData, data]);
  }

  

  

}
