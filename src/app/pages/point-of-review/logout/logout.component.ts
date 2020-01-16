import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../../../@core/utils';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(router: Router, state: StateService) {
    state.selectUser(undefined);
    router.navigate(['']);
  }

  ngOnInit() {
  }

}
