import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {

  msSelect1: number;
  msSelect2: number;
  select1: boolean;
  select2: boolean;
  start: boolean;
  countdown: number;
  interval: any;

  constructor() {
    this.countdown = 3;
    this.msSelect1 = 5;
    this.msSelect2 = 38;
    this.start = false;
    this.select1 = false;
    this.select2 = false;
  }

  ngOnInit(): void {
  }

  startCountdown() {
    this.startCheck();
  }

  startCheck() {
    this.start = true;
    this.finishCountdown(1, this.msSelect1);
    this.finishCountdown(2, this.msSelect2);
  }

  resetCountdown() {
    this.start = false;
    this.select1 = false;
    this.select2 = false;
    this.countdown = 3;
  }

  finishCountdown(obj: number, ms) {
    if (obj === 1) {
      setTimeout(() => this.select1 = true, ms);
    }
    if (obj === 2) {
      setTimeout(() => this.select2 = true, ms);
    }
  }

}
