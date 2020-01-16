import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule, NbIconModule, NbSelectModule, NbDatepickerModule, NbRadioModule, NbCheckboxModule, NbActionsModule, NbInputModule, NbDialogModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PointOfReviewRoutingModule } from './point-of-review-routing.module';
import { PointOfReviewComponent } from './point-of-review.component';
import { FeedComponent } from './feed/feed.component';
import { CodeSnippetPostComponent } from './feed/code-snippet-post/code-snippet-post.component';
import { NewsPostPlaceholderComponent } from './feed/code-snippet-post-placeholder/code-snippet-post-placeholder.component';
import { NewsService } from './news.service';
import { CodeSnippetViewComponent } from './code-snippet-view/code-snippet-view.component';
import { CommentComponent } from './comment/comment.component';
import { ScoreComponent } from './score/score.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { TagsComponent } from './tags/tags.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { CreateCodeSnippetComponent } from './create-code-snippet/create-code-snippet.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateCodeReviewComponent } from './create-code-review/create-code-review.component';
import { CodeReviewViewComponent } from './code-review-view/code-review-view.component';
import { CodeCompareComponent } from './code-compare/code-compare.component';
import { CodeReviewsViewComponent } from './code-reviews-view/code-reviews-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizedComponentComponent } from './authorized-component/authorized-component.component';
import { PersonalFeedComponent } from './personal-feed/personal-feed.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from '../charts/charts.module';
import { ChartModule } from 'angular2-chartjs';
import { ChartPieComponent } from './chart/chart-pie.component';
import { ChartBarComponent } from './chart/chart-bar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReportComponent } from './report/report.component';
import { ReportDialogComponent } from './report/report-dialog/report-dialog.component';
import { ReputationComponent } from './reputation/reputation.component';
import { ReputationDialogComponent } from './reputation/reputation-dialog/reputation-dialog.component';
import { LogoutComponent } from './logout/logout.component';
import { UserReputationViewComponent } from './user-reputation-view/user-reputation-view.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbInputModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    MonacoEditorModule,
    PointOfReviewRoutingModule,
    NgMultiSelectDropDownModule,
    MatButtonModule,
    MatIconModule,
    AngularEditorModule,
    ChartsModule,
    ChartModule,
    NgxEchartsModule,
    NbDialogModule.forChild(),
  ],
  declarations: [
    PointOfReviewComponent,
    NewsPostPlaceholderComponent,
    FeedComponent,
    CodeSnippetPostComponent,
    CodeSnippetViewComponent,
    CommentComponent,
    ScoreComponent,
    CodeEditorComponent,
    TagsComponent,
    CreateCodeSnippetComponent,
    CodeViewerComponent,
    CreateCodeReviewComponent,
    CodeReviewViewComponent,
    CodeCompareComponent,
    CodeReviewsViewComponent,
    AuthorizedComponentComponent,
    PersonalFeedComponent,
    ChartComponent,
    ChartPieComponent,
    ChartBarComponent,
    ReportComponent,
    ReportDialogComponent,
    ReputationComponent,
    ReputationDialogComponent,
    LogoutComponent,
    UserReputationViewComponent,
  ],
  providers: [
    NewsService,
  ],
  entryComponents: [
    ReportDialogComponent,
    ReputationDialogComponent
  ]
})
export class PointOfReviewModule { }
