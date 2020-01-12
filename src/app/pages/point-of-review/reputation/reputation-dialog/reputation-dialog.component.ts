import {Component, Input, OnInit} from '@angular/core';
import {StateService} from "../../../../@core/utils";
import {CodeSnippetsData} from "../../../../@core/data/code-snippets";
import {NbComponentStatus, NbDialogRef, NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";
import {Tag} from "../../../../@core/lib/objects/tag";
import {Observable} from "rxjs";

@Component({
  selector: 'ngx-reputation-dialog',
  templateUrl: './reputation-dialog.component.html',
  styleUrls: ['./reputation-dialog.component.scss']
})
export class ReputationDialogComponent {

  @Input()
  userId: string;
  @Input()
  reputation: number;
  @Input()
  tags: Tag[];

  constructor(protected state: StateService, protected ref: NbDialogRef<ReputationDialogComponent>, private toastrService: NbToastrService) { }

  dismiss() {
    this.ref.close();
  }

}
