import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/api-service/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  productCatalog: any[] = [];
  numbers: number = 8;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getData();
  }

  incrementProducts() {
    if (this.numbers < this.productCatalog.length) {
      this.numbers = this.numbers + 8;
    }
  }
  getData() {
    this.productService.dataArray$.subscribe({
      next: (value) => {
        this.productCatalog = value;
      },
      error: (err) => console.log(err),
    });
  }
}
