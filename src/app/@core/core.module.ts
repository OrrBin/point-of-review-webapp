import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
} from './utils';
import { CodeSnippetsData } from './data/code-snippets';
import { CodeSnippetsService } from './services/code-snippets.service';
import { AuthService } from './services/auth.service';
import { StatisticsData } from './data/statistics';
import { StatisticsService } from './services/statistics.service';

const DATA_SERVICES = [
  { provide: CodeSnippetsData, useClass: CodeSnippetsService },
  { provide: StatisticsData, useClass: StatisticsService },
  { provide: AuthService, useClass: AuthService },
  { provide: StateService, useClass: StateService },
];

export const NB_CORE_PROVIDERS = [
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({
  }).providers,
  LayoutService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
