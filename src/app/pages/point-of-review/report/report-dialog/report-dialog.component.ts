import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef, NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition } from '@nebular/theme';
import { CodeSnippetsData } from '../../../../@core/data/code-snippets';
import {StateService} from '../../../../@core/utils';

@Component({
  selector: 'ngx-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent {

  @Input()
  username: string;

  reportType = 'spam';

  constructor(protected state: StateService, protected snippetsService: CodeSnippetsData, protected ref: NbDialogRef<ReportDialogComponent>, private toastrService: NbToastrService) { }

  dismiss() {
    this.ref.close();
  }

  report() {
    let isSelf: boolean = false;
    console.log(`reporting: ${this.reportType} on user ${this.username}`)
    this.state.user.subscribe((user) => {
      if (this.username === user.username) {
        this.showToast('warning', "You can't report your own post", '');
        isSelf = true;
      }
    });
    if (!isSelf) {
      this.snippetsService.report(this.username, this.reportType).subscribe((user) => {
        this.successToast();
        this.dismiss();
      });
    }
  }

  successToast() {
    let status: NbComponentStatus = 'warning';
    this.showToast(status, 'Your report was sent successfully', '');
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 5000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true,
    };

    this.toastrService.show(
      body,
      title,
      config);
  }

}
