import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay-up-to-date',
  templateUrl: './stay-up-to-date.component.html',
  styleUrl: './stay-up-to-date.component.scss'
})
export class StayUpToDateComponent implements OnInit{
  vacancy: any[] = []

  ngOnInit(): void {
    this.vacancy = [
      {
        id: 1,
        when: "2",
        requirements: ['Знание компьютера, навыки работы в 1с ( MS office )'],
        images: [
          "../../../assets/images/vacancy/0x0.webp",
          "../../../assets/images/vacancy/34116-festool-tks80-saw-5.jpg",
          "../../../assets/images/vacancy/6d4ee6a5b30b467c8189e843063ef9a4.jpg"
        ]
      },
      {
        id: 2,
        when: "3",
        requirements: ['Знание компьютера, навыки работы в 1с ( MS office )'],
        images: [
          "../../../assets/images/vacancy/6d4ee6a5b30b467c8189e843063ef9a4.jpg",
          "../../../assets/images/vacancy/34116-festool-tks80-saw-5.jpg",
          "../../../assets/images/vacancy/ECON01-durables-082516-adobe.jpg"
        ]
      },
    ]
  }

}
