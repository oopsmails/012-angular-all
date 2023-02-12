import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SharingBoardService } from '../shared/services/sharing-board.service';
import { HomeDataService } from './home.data.service';
import { Card } from './models/home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private COMPONENT_NAME = 'HomeComponent';
  private onDestroy$: Subject<boolean> = new Subject();

  spinner2Switch$: Observable<boolean>;
  cards$: Observable<Card[]>;

  constructor(
    private router: Router,
    private homeDataService: HomeDataService,
    private sharingBoardService: SharingBoardService
  ) {}

  ngOnInit() {
    this.cards$ = this.homeDataService.getCards();
    this.spinner2Switch$ = this.sharingBoardService.spinner2Trigger$.asObservable();
    this.triggerSpinnerOn();
  }

  triggerSpinnerOn() {
    console.log(this.COMPONENT_NAME + ': triggerSpinnerOn function called');
    // this.sharingBoardService.spinner2Trigger$.next(true);
    this.sharingBoardService.setLoading(true);
    setTimeout(() => {
      this.triggerSpinnerOff();
    }, 1000);
  }

  triggerSpinnerOff() {
    console.log(this.COMPONENT_NAME + ': triggerSpinnerOff function called');
    // this.sharingBoardService.spinner2Trigger$.next(false);
    this.sharingBoardService.setLoading(false);
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
