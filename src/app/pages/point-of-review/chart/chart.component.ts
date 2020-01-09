import { Component, OnInit } from '@angular/core';
import {AuthorizedComponentComponent} from '../authorized-component/authorized-component.component';
import {StateService} from '../../../@core/utils';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  extends AuthorizedComponentComponent {

  constructor(state: StateService, router: Router) {
    super(state, router);
  }
  language: String = 'language';
  feedback: String = 'feedback';

  ngOnInit() {
  }

}
