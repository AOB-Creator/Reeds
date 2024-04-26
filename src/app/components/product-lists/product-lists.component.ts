import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/api-service/products.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrl: './product-lists.component.scss'
})
export class ProductListsComponent implements OnInit{
  classProducts:string = ''
  productServ = inject(ProductsService)
  products:any[] = []
  @Input() text: any

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    console.log(this.text);  
    this.getData()
    console.log(this.products);    
  }

  navigateToRoute(str:string) {
    
    this.router.navigate(['/products/detailed-info/'+str]);
    window.location.reload()
    console.log('/products/detailed-info/'+str);
    
  }

  getData(){
    this.productServ.dataArray$.subscribe(
      {
        next: (val)=>{
          this.products = val.filter((item, ind)=>{
            if(item.decor_type==this.text){
              return item
            }
          })
        },
        error: (err)=>{
          console.log(err);
        }
      }
    )
  }


  
}
