import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharingBoardService } from './shared/services/sharing-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  spinner2Switch$;

  showSpinner = true; // when app loading

  constructor(private sharingBoardService: SharingBoardService) {}

  ngOnInit() {
    // this.spinner2Switch$ = this.sharingBoardService.spinner2Trigger$
    //   .asObservable()
    //   .pipe(takeUntil(this.onDestroy$));
    // this.triggerSpinnerOn();
    setTimeout(() => {
      console.log('before delay ................ this.showSpinner = ', this.showSpinner);
      this.showSpinner = false;
    }, 2000);
  }

  triggerSpinnerOn() {
    console.log('First function called');
    this.sharingBoardService.spinner2Trigger$.next(true);
    setTimeout(() => {
      // this.loaderService.setLoading(true);
      this.triggerSpinnerOff();
    }, 1000);
  }

  triggerSpinnerOff() {
    console.log('Second function called');
    this.sharingBoardService.spinner2Trigger$.next(false);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
