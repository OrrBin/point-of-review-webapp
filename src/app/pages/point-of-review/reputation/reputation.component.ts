import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from "@nebular/theme";
import { ReportDialogComponent } from "../report/report-dialog/report-dialog.component";
import { ReputationDialogComponent } from "./reputation-dialog/reputation-dialog.component";
import { CodeSnippetsData } from "../../../@core/data/code-snippets";
import {Tag} from "../../../@core/lib/objects/tag";
import {Observable} from "rxjs";

@Component({
  selector: 'ngx-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.scss']
})
export class ReputationComponent implements OnInit {

  @Input()
  userId: string;

  reputation: number;

  tags: Tag[];

  constructor(private dialogService: NbDialogService, protected snippetsService: CodeSnippetsData) { }

  ngOnInit() {
    this.snippetsService.getTopTags(this.userId).subscribe(tags => this.tags = tags);
    this.snippetsService.getReputation(this.userId).subscribe(reputation => this.reputation = reputation);
  }

  async openDialog(event) {
    event.stopPropagation();
    // await new Promise(resolve => setTimeout(resolve, 500));
    this.dialogService.open(ReputationDialogComponent, {
      context: {
        reputation: this.reputation,
        userId: this.userId,
        tags: this.tags,
      },
    });

  }

}
