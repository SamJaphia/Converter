import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'GBP';
  to = 'AUD';
  rate = 1.80;
  
  convert(): number {
    return this.amount * this.rate;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
