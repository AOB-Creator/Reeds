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
  productCatalog2:any[] = []

  constructor() { 

    this.productCatalog2 = [
      {
        id: 1,
        image:
          'assets/images/products/1/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: '4000584-01-000',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'assets/images/products/1/image1.jpg',
          'assets/images/products/1/image2.jpg',
        ],
      },
      {
        id: 2,
        image:
          'assets/images/products/2/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: '4000584-01-000',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          'assets/images/products/1/image1.jpg',
          'assets/images/products/1/image2.jpg',
        ],
      },
    ]

    // decor_type: 'Сочетание материалов',
    // decor_type: 'Графика и структуры',
    // decor_type: 'Имитация камня',
    // decor_type: 'Металл и бетон',
    // decor_type: 'Древесный декор',


    this.productCatalog = [
      {
        id: 1,
        image:
          '/assets/images/products/1/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-S-0001',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/1/image1.jpg',
          '/assets/images/products/1/image2.jpg',
        ],
      },
      {
        id: 2,
        image:
          '/assets/images/products/2/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-S-0002',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          // '/assets/images/products/1/image1.jpg',
          // '/assets/images/products/1/image2.jpg',
        ],
      },
      {
        id: 3,
        image:
          '/assets/images/products/3/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-S-0003',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          // '/assets/images/products/3/image1.jpg',
          // '/assets/images/products/3/image2.jpg',
        ],
      },
      {
        id: 4,
        image:
          '/assets/images/products/4/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-S-0004',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          // '/assets/images/products/4/image1.jpg',
          // '/assets/images/products/4/image2.jpg',
        ],
      },
      {
        id: 5,
        image:
          '/assets/images/products/5/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-S-0005',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/5/image1.jpg',
          '/assets/images/products/5/image2.jpg',
        ],
      },
      {
        id: 6,
        image:
          '/assets/images/products/6/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-S-0006',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/6/image1.jpg',
          '/assets/images/products/6/image2.jpg',
        ],
      },
      {
        id: 7,
        image:
          '/assets/images/products/7/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0001',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/7/image1.jpg',
        ],
      },
      {
        id: 8,
        image:
          '/assets/images/products/8/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0002',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/8/image1.jpg',
        ],
      },
      {
        id: 9,
        image:
          '/assets/images/products/9/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0003',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/9/image1.jpg',
          '/assets/images/products/9/image2.jpg',
          '/assets/images/products/9/image3.jpg',
        ],
      },
      {
        id: 10,
        image:
          '/assets/images/products/10/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0004',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/10/image1.jpg',
        ],
      },
      {
        id: 11,
        image:
          '/assets/images/products/11/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0005',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/11/image1.jpg',
        ],
      },
      {
        id: 12,
        image:
          '/assets/images/products/12/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0006',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/12/image1.jpg',
        ],
      },
      {
        id: 13,
        image:
          '/assets/images/products/13/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0007',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/13/image1.jpg',
          '/assets/images/products/13/image2.jpg',
          '/assets/images/products/13/image3.jpg',
          '/assets/images/products/13/image4.jpg',
        ],
      },
      {
        id: 14,
        image:
          '/assets/images/products/14/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0008',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/14/image1.jpg',
          '/assets/images/products/14/image2.jpg',
          '/assets/images/products/14/image3.jpg',
          '/assets/images/products/14/image4.jpg',
        ],
      },
      {
        id: 15,
        image:
          '/assets/images/products/15/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-M-0009',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/15/image1.jpg',
          // '/assets/images/products/15/image2.jpg',
          // '/assets/images/products/15/image3.jpg',
          // '/assets/images/products/15/image4.jpg',
        ],
      },
      {
        id: 16,
        image:
          '/assets/images/products/16/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0001',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/16/image1.jpg',
          // '/assets/images/products/15/image2.jpg',
          // '/assets/images/products/15/image3.jpg',
          // '/assets/images/products/15/image4.jpg',
        ],
      },
      {
        id: 17,
        image:
          '/assets/images/products/17/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0002',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/17/image1.jpg',
          '/assets/images/products/17/image2.jpg',
          '/assets/images/products/17/image3.jpg',
          '/assets/images/products/17/image4.jpg',
          '/assets/images/products/17/image5.jpg',
        ],
      },
      {
        id: 18,
        image:
          '/assets/images/products/18/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0003',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/18/image1.jpg',
          '/assets/images/products/18/image2.jpg',
          '/assets/images/products/18/image3.jpg',
        ],
      },
      {
        id: 19,
        image:
          '/assets/images/products/19/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0004',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/19/image1.jpg',
          '/assets/images/products/19/image2.jpg',
          '/assets/images/products/19/image3.jpg',
          '/assets/images/products/19/image4.jpg',
          '/assets/images/products/19/image5.jpg',
        ],
      },
      {
        id: 20,
        image:
          '/assets/images/products/20/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0005',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/20/image1.jpg',
        ],
      },
      {
        id: 21,
        image:
          '/assets/images/products/21/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0006',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/21/image1.jpg',
          '/assets/images/products/21/image2.jpg',
          '/assets/images/products/21/image3.jpg',
        ],
      },
      {
        id: 22,
        image:
          '/assets/images/products/22/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-K-0007',
        decor_type: 'Имитация камня',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/22/image1.jpg',
        ],
      },
      {
        id: 23,
        image:
          '/assets/images/products/23/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0001',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/23/main.jpg',
        ],
      },
      {
        id: 24,
        image:
          '/assets/images/products/24/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0002',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/24/image1.jpg',
          '/assets/images/products/24/image2.jpg',
          '/assets/images/products/24/image3.jpg',
          '/assets/images/products/24/image4.jpg',
        ],
      },
      {
        id: 25,
        image:
          '/assets/images/products/25/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0003',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/25/image1.jpg',
          '/assets/images/products/25/image2.jpg',
          '/assets/images/products/25/image3.jpg',
          '/assets/images/products/25/image4.jpg',
        ],
      },
      {
        id: 26,
        image:
          '/assets/images/products/26/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0004',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/26/image1.jpg',
          '/assets/images/products/26/image2.jpg',
          '/assets/images/products/26/image3.jpg',
        ],
      },
      {
        id: 27,
        image:
          '/assets/images/products/27/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0005',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/27/image1.jpg',
          '/assets/images/products/27/image2.jpg',
          '/assets/images/products/27/image3.jpg',
          '/assets/images/products/27/image4.jpg',
        ],
      },
      {
        id: 28,
        image:
          '/assets/images/products/28/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0006',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/28/image1.jpg',
          '/assets/images/products/28/image2.jpg',
          '/assets/images/products/28/image3.jpg',
          '/assets/images/products/28/image4.jpg',
        ],
      },
      {
        id: 29,
        image:
          '/assets/images/products/29/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0007',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/29/image1.jpg',
          '/assets/images/products/29/image2.jpg',
          '/assets/images/products/29/image3.jpg',
        ],
      },
      {
        id: 30,
        image:
          '/assets/images/products/30/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0008',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/30/image1.jpg',
          '/assets/images/products/30/image2.jpg',
          '/assets/images/products/30/image3.jpg',
          '/assets/images/products/30/image4.jpg',
        ],
      },
      {
        id: 31,
        image:
          '/assets/images/products/31/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0008',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/31/image1.jpg',
          '/assets/images/products/31/image2.jpg',
          '/assets/images/products/31/image3.jpg',
          '/assets/images/products/31/image4.jpg',
        ],
      },
      {
        id: 32,
        image:
          '/assets/images/products/32/main.jpg',
        type: 'Acapulco Rombo',
        number_decor: 'MLDSP-T-0008',
        decor_type: 'Древесный декор',
        description: '',
        size: '750 x 1300 mm',
        where_to_use: 'Мебель',
        other_images: [
          '/assets/images/products/32/image1.jpg',
          '/assets/images/products/32/image2.jpg',
          '/assets/images/products/32/image3.jpg',
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
