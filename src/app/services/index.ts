import {HealthService} from './health.service';
import {CountryService} from './country.service';

export const services = [HealthService, CountryService];

export * from './health.service';
export * from './country.service';

