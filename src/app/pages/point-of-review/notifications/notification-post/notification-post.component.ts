import {Component, Input, OnInit} from '@angular/core';
import {CodeSnippet} from '../../../../@core/lib/objects/code-snippet';
import {Notification} from '../../../../@core/lib/objects/notification';
import {StateService} from '../../../../@core/utils';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-notification-post',
  templateUrl: './notification-post.component.html',
  styleUrls: ['./notification-post.component.scss']
})
export class NotificationPostComponent implements OnInit {

  @Input() notification: Notification;

  constructor(private state: StateService, private router: Router) {
    this.state = state;
  }

  ngOnInit() {
  }

  getAction() {
    if (this.notification.action == 'LIKE')
      return 'liked';
    if (this.notification.action == 'REVIEW')
      return 'reviewed';
    return 'ERROR';
  }

  getTime() {
    const current: number = (+ new Date()) - this.notification.timestamp;
    const delta = new Date(current);

    if (current < 1000 * 60) // less than a minute
      return `${delta.getSeconds()} seconds`
    if (current < 1000 * 60 * 60)
      return `${delta.getMinutes()} minutes`;
    if (current < 1000 * 60 * 60 * 24)
      return `${delta.getHours()} hours`;
    return `${delta.getDay()} days`;
  }

  choosePost() {
    this.state.selectCodeSnippet(this.notification.snippet);

    if (this.notification.review) {
      this.state.selectCodeReview(this.notification.review);
      this.router.navigate(['/pages/point-of-review/code-review-view']);
    } else {
      this.router.navigate(['/pages/point-of-review/code-snippet']);
    }
  }
}
