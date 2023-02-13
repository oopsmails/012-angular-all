import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner3',
  template: `
    <svg class="svg-circle-loading-spinner" viewBox="0 0 52 52">
      <circle
        class="path"
        cx="26px"
        cy="26px"
        r="20px"
        fill="none"
        stroke="#2e2659"
        stroke-width="5px"
      ></circle>
    </svg>
  `,
  styleUrls: ['./spinner3.component.scss'],
})
export class Spinner3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
