import { Component, Input, OnInit } from '@angular/core';
import { CountryDetails } from '../../models/country-details';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.scss']
})
export class CountryModalComponent implements OnInit {
  @Input() countryDetails: CountryDetails;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
