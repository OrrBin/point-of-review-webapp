import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointOfReviewComponent } from './point-of-review.component';
import { FeedComponent } from './feed/feed.component';
import { CodeSnippetViewComponent } from './code-snippet-view/code-snippet-view.component';
import { CreateCodeSnippetComponent } from './create-code-snippet/create-code-snippet.component';
import { CreateCodeReviewComponent } from './create-code-review/create-code-review.component';

const routes: Routes = [{
  path: '',
  component: PointOfReviewComponent,
  children: [
    {
      path: 'feed',
      component: FeedComponent,
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
      component: CreateCodeReviewComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointOfReviewRoutingModule {
}
