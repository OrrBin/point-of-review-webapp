import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointOfReviewComponent } from './point-of-review.component';
import { FeedComponent } from './feed/feed.component';
import { CodeSnippetViewComponent } from './code-snippet-view/code-snippet-view.component';
import { CreateCodeSnippetComponent } from './create-code-snippet/create-code-snippet.component';
import { CreateCodeReviewComponent } from './create-code-review/create-code-review.component';
import { CodeReviewsViewComponent } from './code-reviews-view/code-reviews-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonalFeedComponent } from './personal-feed/personal-feed.component';
import {ChartComponent} from './chart/chart.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [{
  path: '',
  component: PointOfReviewComponent,
  children: [
    {
      path: 'feed',
      component: FeedComponent,
    },
    {
      path: 'personal-feed',
      component: PersonalFeedComponent
    },
    {
      path: 'code-snippet',
      component: CodeSnippetViewComponent,
    },
    {
      path: 'create-code-snippet',
      component: CreateCodeSnippetComponent,
    },
    {
      path: 'create-code-review',
      component: CreateCodeReviewComponent,
    },
    {
      path: 'code-review-view',
      component: CodeReviewsViewComponent,
    },
    {
      path: 'statistics',
      component: ChartComponent,
    },
    {
      path: 'logout',
      component: LogoutComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointOfReviewRoutingModule {
}
