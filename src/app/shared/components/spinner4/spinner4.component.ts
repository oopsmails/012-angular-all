import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner4',
  template: `
    <svg class="circular-loader" viewBox="25 25 50 50">
      <circle
        class="loader-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="#70c542"
        stroke-width="2"
      />
    </svg>
  `,
  styleUrls: ['./spinner4.component.scss'],
})
export class Spinner4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
