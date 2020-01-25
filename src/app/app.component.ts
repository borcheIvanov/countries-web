import { Component } from '@angular/core';
import { HealthService } from './services';
import { take } from 'rxjs/operators';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faThumbsUp = faThumbsUp;
  public faThumbsDown = faThumbsDown;
  public title = 'Countries Website!';
  public apiIsActive = false;
  public apiActiveIcon = this.faThumbsDown;
  public apiIsActiveColor = 'red';

  constructor(private healthService: HealthService) {
    this.getHealthCheck();
  }

  getHealthCheck(): void {
    this.healthService
      .getHealth()
      .pipe(take(1))
      .subscribe(
        apiHealth => {
          this.apiIsActive = apiHealth === 'Healthy';
          this.apiActiveIcon = this.apiIsActive
            ? this.faThumbsUp
            : this.faThumbsUp;
          this.apiIsActiveColor = this.apiIsActive ? 'green' : 'red';
        },
        _ => {
          this.apiIsActive = false;
          this.apiActiveIcon = this.faThumbsDown;
          this.apiIsActiveColor = 'red';
        }
      );
  }
}
