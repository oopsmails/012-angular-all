import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingBoardService {
  public generalSharing$: Subject<string> = new Subject();
  public spinner2Trigger$: Subject<boolean> = new Subject();

  private loading: boolean = false;

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
