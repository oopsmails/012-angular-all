import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { SharedDataService, RandomItem } from 'oops-lib002';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService implements OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private sharedDataService: SharedDataService) {}

  getOptionData(): Observable<RandomItem[]> {
    return this.sharedDataService.getRandomItems();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
