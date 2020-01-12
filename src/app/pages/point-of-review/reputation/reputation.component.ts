import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from "@nebular/theme";
import { ReportDialogComponent } from "../report/report-dialog/report-dialog.component";
import { ReputationDialogComponent } from "./reputation-dialog/reputation-dialog.component";
import { CodeSnippetsData } from "../../../@core/data/code-snippets";

@Component({
  selector: 'ngx-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.scss']
})
export class ReputationComponent implements OnInit {

  @Input()
  userId: string;

  reputation: number;

  constructor(private dialogService: NbDialogService, protected snippetsService: CodeSnippetsData) { }

  ngOnInit() {
  }

  getReputation(): number {
    this.snippetsService.getReputation(this.userId).subscribe(num => {
      this.reputation = num;
    },
    );
    return this.reputation;
  }

  async openDialog(event) {
    event.stopPropagation();
    this.reputation = this.getReputation();
    await new Promise(resolve => setTimeout(resolve, 300));
    this.dialogService.open(ReputationDialogComponent, {
      context: {
        reputation: this.reputation,
        userId: this.userId,
      },
    });

  }

}
