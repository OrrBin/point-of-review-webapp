import { Component, OnInit } from '@angular/core';
import {Notification} from '../../../@core/lib/objects/notification';
import {AuthorizedComponentComponent as AuthorizedComponent} from '../authorized-component/authorized-component.component';
import {AuthService} from '../../../@core/services/auth.service';
import {CodeSnippetsData} from '../../../@core/data/code-snippets';
import {StateService} from '../../../@core/utils';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent extends AuthorizedComponent implements OnInit {

  notifications: Notification[];

  constructor(auth: AuthService, state: StateService, router: Router, private codeSnippetsService: CodeSnippetsData) {
    super(auth, state, router);
    auth.getNotifications(this.currentUserName())
      .subscribe(notifications => this.notifications = notifications);
  }

  ngOnInit() {
  }

}
