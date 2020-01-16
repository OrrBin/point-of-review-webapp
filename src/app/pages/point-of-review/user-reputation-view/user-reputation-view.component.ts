import {Component, Input, OnInit} from '@angular/core';
import {CodeSnippetsData} from '../../../@core/data/code-snippets';
import {ReputationDialogComponent} from '../reputation/reputation-dialog/reputation-dialog.component';

@Component({
  selector: 'ngx-user-reputation-view',
  templateUrl: './user-reputation-view.component.html',
  styleUrls: ['./user-reputation-view.component.scss']
})
export class UserReputationViewComponent implements OnInit {

  @Input() username: string;

  reputation: number;

  constructor(private snippetsService: CodeSnippetsData) { }

  ngOnInit() {
      this.snippetsService.getReputation(this.username).subscribe(num => {
          this.reputation = num;
        },
      );
      return this.reputation;
    }
}
