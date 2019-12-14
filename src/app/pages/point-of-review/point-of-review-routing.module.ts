import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointOfReviewComponent } from './point-of-review.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [{
  path: '',
  component: PointOfReviewComponent,
  children: [
    {
      path: 'feed',
      component: FeedComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointOfReviewRoutingModule {
}
