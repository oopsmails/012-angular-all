import { Component, OnInit } from '@angular/core';
import { SharingBoardService } from '../../services/sharing-board.service';

@Component({
  selector: 'app-spinner2',
  templateUrl: './spinner2.component.html',
  styleUrls: ['./spinner2.component.scss'],
})
export class Spinner2Component implements OnInit {
  constructor(public sharingBoardService: SharingBoardService) {}

  ngOnInit(): void {}
}
