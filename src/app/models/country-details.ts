import { Country } from './country';

export interface CountryDetails extends Country {
  region: string;
  subRegion: string;
  capital: string;
  population: string;
  nativeName: string;
  borderingCountries: Country[];
}
