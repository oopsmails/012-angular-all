import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from 'src/app/home/home.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

const routes = [
  {
    path: 'example/globalfeed',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [CommonModule, HomeModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
