import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <input #input type="text" />
    <button (click)="onTest(input.value)">TEST</button>
  `,
})
export class AppComponent {
  sum: RegExp = /^[+-]?[0-9]+([+-][0-9]+)*$/;
  trig: RegExp = /^(sin|cos|tan)\([0-9]+\)$/;

  onTest(value: string) {
    console.table({
      sum: this.sum.test(value),
      trig: this.trig.test(value),
    });
  }
}
