import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.scss']
})
export class CountryListItemComponent implements OnInit {
  @Input() country: Country;
  @Output() clicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
