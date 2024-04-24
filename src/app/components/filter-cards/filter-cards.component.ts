import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/api-service/products.service';

@Component({
  selector: 'app-filter-cards',
  templateUrl: './filter-cards.component.html',
  styleUrl: './filter-cards.component.scss'
})
export class FilterCardsComponent implements OnInit{
    category:any[] = ['all']
    products:any[]= []
    productService = inject(ProductsService)
    displayData:any[] = []
    ngOnInit(): void {
      this.getData()
    }

    getData(){
      this.productService.dataArray$.subscribe(
        {
          next: (value:any)=>{
            this.products = value
            console.log(this.products);
            
          },
          error: (err:any)=>{
            console.log(err);
          }
        }
      )
      this.productService.displayableData$.subscribe(
        {
          next: (value)=>{
            this.displayData = value
            console.log(value);
          },
          error: (err)=>{
            console.log(err);            
          }
        }
      )
    }

    selectCategory(change: any){
      if(this.existanceCheck(change)){
        this.category = this.deleteItem(change)
      }else{
        if(change != 'all'){
          this.category = this.deleteItem('all')
          this.category.push(change)
        }else{
          this.category = []
          this.category.push(change)
        }
      }
      this.filterCardsByCategory(this.category)
    }

    existanceCheck(text:any):boolean{
      let exist = false
      this.category.forEach((item, index)=>{
        if(item==text){
          exist = true
        }
      })
      return exist
    }

    deleteItem(text:any):any[]{
      return this.category.filter((item, index)=>{
        if(item!=text){
          return item
        }
      })
    }

    filterCardsByCategory(prods:any[]){
      let emptyArr:any[] = []

      this.products.filter((item, index)=>{
        prods.filter((each, ind)=>{
          if(each=="graphy"){
            if(item.decor_type=="Графика и структуры"){
              emptyArr.push(item)
            }            
          }else if(each=="stonedecor"){
            if(item.decor_type=="Имитация камня"){
              emptyArr.push(item)
            }   
          }else if(each=="treedekor"){
            if(item.decor_type=="Древесный декор"){
              emptyArr.push(item)
            }   
          }else if(each=="combination"){
            if(item.decor_type=="Сочетание материалов"){
              emptyArr.push(item)
            }   
          }else if(each=="metal"){
            if(item.decor_type=="Металл и бетон"){
              emptyArr.push(item)
            }   
          }else if(each=="plate"){
            if(item.decor_type=="Плитка"){
              emptyArr.push(item)
            }   
          }
          else if(each=="all"){
            emptyArr.push(item)
          }
        })
      })
      // console.log(emptyArr);
      this.displayData = emptyArr
      this.productService.addDisplayData(emptyArr)
    }
    
}
