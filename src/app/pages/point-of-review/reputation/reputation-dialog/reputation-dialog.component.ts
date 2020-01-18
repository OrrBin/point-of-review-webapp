import {Component, Input, OnInit} from '@angular/core';
import {StateService} from '../../../../@core/utils';
import {CodeSnippetsData} from '../../../../@core/data/code-snippets';
import {NbComponentStatus, NbDialogRef, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {Tag} from '../../../../@core/lib/objects/tag';
import {Observable} from 'rxjs';

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

  constructor(protected state: StateService, protected ref: NbDialogRef<ReputationDialogComponent>, private toastrService: NbToastrService) {
  }

  dismiss() {
    this.ref.close();
  }

  getRank() {
    if (this.reputation < 40) {
      return 'Junior';
    }
    if (this.reputation < 100) {
      return 'Senior';
    }
    if (this.reputation < 200) {
      return 'Master';
    }

    return 'Elite';
  }

  getIcon() {
    if (this.reputation < 40) {
      return 'https://i.imgur.com/xNnFkfk.png'; // bug
    }
    if (this.reputation < 100) {
      return 'https://i.imgur.com/idyFaBE.png'; // bronze medal
    }
    if (this.reputation < 200) {
      return 'https://i.imgur.com/J6dViiB.png'; // silver medal
    }
    return 'https://i.imgur.com/b9IazUp.png'; // gold medal
  }
}
