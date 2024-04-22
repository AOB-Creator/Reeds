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
  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('uz')
    this.translateService.use(localStorage.getItem('lang') || 'en')
  }
}
