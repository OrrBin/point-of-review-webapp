import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input()
  username: string;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogService.open(ReportDialogComponent, {
      context: {
        username: this.username,
      },
    });
  }

}
