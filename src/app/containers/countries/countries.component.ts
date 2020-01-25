import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services';
import { Subject } from 'rxjs';
import { CountriesRequest } from '../../models/countries-request';
import { CountryList } from '../../models/country-list';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryDetails } from '../../models/country-details';
import { CountryModalComponent } from '../../components';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  itemsPerPage = 20;
  totalItems = 0;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private countriesService: CountryService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getCountries({ skipItems: 0, getItems: this.itemsPerPage });
  }

  getCountries(request: CountriesRequest) {
    this.countriesService
      .getAllCountries(request)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: CountryList) => {
        this.countries = result.items;
        this.totalItems = result.totalItems;
      });
  }

  skipItems(numberOfItemsToSkip: number) {
    this.getCountries({
      skipItems: numberOfItemsToSkip,
      getItems: this.itemsPerPage
    });
  }

  showDetails(code: string) {
    this.countriesService
      .getCountryByCode(code)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: CountryDetails) => {
        if (result) {
          this.openModal(result);
        }
      });
  }

  openModal(countryDetails: CountryDetails) {
    const modalRef = this.modalService.open(CountryModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.countryDetails = countryDetails;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
