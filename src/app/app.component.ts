import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(
    private sharingBoardService: SharingBoardService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    // this.spinner2Switch$ = this.sharingBoardService.spinner2Trigger$
    //   .asObservable()
    //   .pipe(takeUntil(this.onDestroy$));
    // this.triggerSpinnerOn();
    setTimeout(() => {
      console.log('before delay ................ this.showSpinner = ', this.showSpinner);
      this.showSpinner = false;
    }, 1000); // timeout of loading spinner configured here, 1000

    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.translate
      .get('TEST_DESCRIPTION')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((translated: string) => {
        console.log('translated: ', translated);
        const translatedRed = this.translate.instant('colors.RED');
        console.log('translatedRed: ', translatedRed);
      });
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
