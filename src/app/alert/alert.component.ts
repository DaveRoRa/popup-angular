import { Component, OnInit } from '@angular/core';
import { AlertInterface } from './types/alert.interface';
import { AlertTypesEnum } from './types/alert-types.enum';
import { NgClass, NgIf } from '@angular/common';
import { AlertService } from './service/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent implements OnInit {
  alert?: AlertInterface;
  timeoutId?: number;
  constructor(private alertService: AlertService) {}
  ngOnInit(): void {
    this.alertService.getAlert().subscribe((alert) => {
      this.alert = alert;
      this.resetTimer();
    });
  }
  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.alert = undefined;
    }, 3000);
  }
}
