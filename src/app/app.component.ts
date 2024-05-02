import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { SEOServiceService } from './services/settings/seoservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'reeds';
  loading:boolean = false
  SEOService:SEOServiceService = inject(SEOServiceService)

  constructor(private translateService: TranslateService){   
    this.loading = true
    console.log("Bundle files loaded");
    
    this.translateService.setDefaultLang('uz')
    this.translateService.use(localStorage.getItem('lang') || 'en')
  }

  ngOnInit(): void {

    const title = 'Muynak Reed Organic Panels';
    const description = 'Инвестиционный проект по производству строительных материалов из древесно-стружечных панелей';
    const imageUrl = 'https://ucarecdn.com/a4eba690-e8db-4339-ad61-88930b38d0c4/ldsp.jpg';

    this.SEOService.updateMetaTags(title, description, imageUrl);
    
  }

}
