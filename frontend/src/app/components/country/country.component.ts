import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  
  @Input() code: string;
  @Input() nameEs: string;

  constructor() { }
}
