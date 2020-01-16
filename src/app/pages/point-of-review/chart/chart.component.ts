import { Component, OnInit } from '@angular/core';
import {AuthorizedComponentComponent} from '../authorized-component/authorized-component.component';
import {StateService} from '../../../@core/utils';
import {Router} from '@angular/router';
import {AuthService} from '../../../@core/services/auth.service';

@Component({
  selector: 'ngx-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  extends AuthorizedComponentComponent {

  constructor(auth: AuthService, state: StateService, router: Router) {
    super(auth, state, router);
  }
  language: String = 'language';
  feedback: String = 'feedback';

  ngOnInit() {
  }

}
