import { Component, OnInit, inject } from '@angular/core';
import { RouterLink} from '@angular/router';
import { ScrollTopService } from '../../services/settings/scroll-top.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent implements OnInit{
  scrollToTop = inject(ScrollTopService)
  
  ngOnInit(): void {
    this.scrollToTop.setScrollTopOnRouteChange()
  }
}
