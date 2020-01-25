import { Country } from './country';

export interface CountryList {
  items: Country[];
  totalItems: number;
  skippedItems: number;
}
