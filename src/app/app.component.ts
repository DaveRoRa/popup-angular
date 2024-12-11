import { Component } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/service/alert.service';
import { AlertTypesEnum } from './alert/types/alert-types.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alertTypes = AlertTypesEnum;
  constructor(private alertService: AlertService) {}
  showAlert(type: AlertTypesEnum) {
    this.alertService.setAlert({
      text: 'This is our test',
      type,
    });
  }
}
