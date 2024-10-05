import { Component, OnInit, signal } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-decor-cards',
  templateUrl: './decor-cards.component.html',
  styleUrl: './decor-cards.component.scss',
})


export class DecorCardsComponent implements OnInit{

  count = signal(0);
  isSaveAble:boolean = false
  isNote:boolean = true
  textToCopy: string = '';
  btnContent:string = 'Copy'

  isDynamcos:any = {
    saveable: this.isSaveAble,
    whiteText: true,
    pads: true
  }

  constructor(private _clipboardService: ClipboardService){
    console.log('The count is: ' + this.count());
    
  }

  increase(){
    this.count.set(this.count()+1)
  }
  decrease(){
    this.count.update(nums => nums + 10)
  }

  ngOnInit(): void { 
  }

  changeSaveAblity(){
    
    let a = setInterval(()=>{
      this.isNote = !this.isNote
      this.isSaveAble = true
    }, 1000)
    
  }

  copy(text: string){
    this.btnContent = 'Copied'
    this.isNote = !this.isNote
    setTimeout(() => {
      this.btnContent = 'Copy'
      this.isNote = !this.isNote
    }, 1500);
    this._clipboardService.copy(text)
  }

  

}
