import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertInterface } from '../types/alert.interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alert$ = new Subject<AlertInterface>();
  setAlert(alert: AlertInterface): void {
    this.alert$.next(alert);
  }
  getAlert() {
    return this.alert$.asObservable();
  }
}
