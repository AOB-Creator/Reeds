import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss'
})
export class LangSelectorComponent {
  lang:string = ''
  languageList:any[] = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: "Ozbek" },
    { code: 'qq', name: 'Qaraqalpaq' },
    { code: 'zh', name: 'Chinese' },
    { code: 'da', name: 'Danish' },  
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'el', name: 'Greek' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'kz', name: "Kazakh" },    
    { code: 'sv', name: 'Swedish' },
    { code: 'tr', name: 'Turkish' },
    { code: 'ae', name: 'Arabic' },
]
  constructor(private translateService: TranslateService){

  }
  changeLanguage(item:any){
    console.log(item);
    
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || 'uz'
  }

  changeLang(lang: any){
    let localeLang = lang
    localStorage.setItem("lang", localeLang)
    this.translateService.use(localeLang)
    window.location.reload()
  }
}
