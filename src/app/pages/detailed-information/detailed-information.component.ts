import { Component, OnInit, inject } from '@angular/core';
import { ScrollTopService } from '../../services/settings/scroll-top.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrl: './detailed-information.component.scss'
})
export class DetailedInformationComponent implements OnInit{
  scrollTopService = inject(ScrollTopService)

  constructor() { }

  ngOnInit(): void {
    this.scrollTopService.setScrollTopOnRouteChange();
  }
}
