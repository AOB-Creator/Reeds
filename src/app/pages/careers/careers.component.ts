import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit{
  ngOnInit(): void {
    console.log('Carreer');
  }
}
