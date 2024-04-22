import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-promo-section',
  templateUrl: './promo-section.component.html',
  styleUrl: './promo-section.component.scss'
})
export class PromoSectionComponent {
  translateService = inject(TranslateService)
}
