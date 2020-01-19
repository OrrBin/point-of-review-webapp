import {CodeSnippet} from './code-snippet';
import {CodeReview} from './code-review';

export class Notification {
  timestamp: number = +new Date();
  sender: string; // the user who triggered the notification
  receiver: string; // the user who received the notification
  action: string; // LIKE or REVIEW
  snippet: CodeSnippet;
  review: CodeReview;

  constructor($sender: string, $receiver: string, $action: string) {
    this.sender = $sender;
    this.receiver = $receiver;
    this.action = $action;
  }
}
