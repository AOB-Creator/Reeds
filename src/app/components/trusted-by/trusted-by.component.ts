import { Component } from '@angular/core';

@Component({
  selector: 'app-trusted-by',
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.scss'
})
export class TrustedByComponent {
  images:string[] = [
    '../../../assets/images/trustedby/Simens.svg', 
    '../../../assets/images/trustedby/doppstadt.svg', 
    '../../../assets/images/trustedby/kdmachinery.png', 
    '../../../assets/images/trustedby/madeinchina.png', 
    '../../../assets/images/trustedby/hammel.svg'
  ]

}
