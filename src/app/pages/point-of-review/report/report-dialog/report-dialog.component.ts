import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef, NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition } from '@nebular/theme';
import { CodeSnippetsData } from '../../../../@core/data/code-snippets';

@Component({
  selector: 'ngx-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent {

  @Input()
  userId: string;

  reportType = 'spam';

  constructor(protected snippetsService: CodeSnippetsData, protected ref: NbDialogRef<ReportDialogComponent>, private toastrService: NbToastrService) { }

  dismiss() {
    this.ref.close();
  }

  report() {
    console.log(`reporting : ${this.reportType} on user ${this.userId}`)
    this.snippetsService.report(this.userId, this.reportType).subscribe((user) => {
      this.successToast();
      this.dismiss();
    });
  }

  successToast() {
    let status: NbComponentStatus = 'warning';
    this.showToast(status, 'Sucess', 'Your report  was created succesfuly');
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
