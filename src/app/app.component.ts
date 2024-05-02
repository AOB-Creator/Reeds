import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reeds';
  loading:boolean = false
  constructor(private translateService: TranslateService){   
    this.loading = true
    console.log("Bundle files loaded");
    
    this.translateService.setDefaultLang('uz')
    this.translateService.use(localStorage.getItem('lang') || 'en')
  }
}
