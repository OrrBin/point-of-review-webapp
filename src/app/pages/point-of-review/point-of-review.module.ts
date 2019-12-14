import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PointOfReviewRoutingModule } from './point-of-review-routing.module';
import { PointOfReviewComponent } from './point-of-review.component';
import { FeedComponent } from './feed/feed.component';
import { CodeSnippetPostComponent } from './feed/code-snippet-post/code-snippet-post.component';
import { NewsPostPlaceholderComponent } from './feed/code-snippet-post-placeholder/code-snippet-post-placeholder.component';
import { NewsService } from './news.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    PointOfReviewRoutingModule,
  ],
  declarations: [
    PointOfReviewComponent,
    NewsPostPlaceholderComponent,
    FeedComponent,
    CodeSnippetPostComponent
  ],
  providers: [
    NewsService,
  ],
})
export class PointOfReviewModule { }
