import { Component } from '@angular/core';

@Component({
  selector: 'app-branding-companies',
  templateUrl: './branding-companies.component.html',
  styleUrl: './branding-companies.component.scss'
})
export class BrandingCompaniesComponent {
  images:string[] = [
    '../../../assets/images/trustedby/Simens.svg', 
    '../../../assets/images/trustedby/doppstadt.svg', 
    '../../../assets/images/trustedby/kdmachinery.png', 
    '../../../assets/images/trustedby/madeinchina.png', 
    '../../../assets/images/trustedby/hammel.svg'
  ]
  
}
