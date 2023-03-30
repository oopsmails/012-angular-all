import { I18nService } from './../shared/services/i18n.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Color } from '../shared/models/local.share.model';

@Component({
  selector: 'app-sandbox-home',
  templateUrl: './sandbox.home.component.html',
  styleUrls: ['./sandbox.home.component.scss'],
})
export class SandboxHomeComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  public selectedColor: Color | null = null;
  public colors = [Color.RED, Color.BLUE, Color.GREEN];

  constructor(private router: Router, public i18nService: I18nService) {}

  ngOnInit() {}

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
