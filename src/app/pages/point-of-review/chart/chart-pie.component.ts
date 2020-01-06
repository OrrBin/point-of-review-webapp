import {Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { StatisticsData} from '../../../@core/data/statistics';
import {CodeSnippetsData} from '../../../@core/data/code-snippets';
import {Stat} from '../../../@core/lib/objects/stat';
import {of as observableOf} from 'rxjs';
import {CodeSnippet} from '../../../@core/lib/objects/code-snippet';
import {Color, color, RGBColor, RGBColorFactory} from 'd3-color';

@Component({
  selector: 'ngx-chart-pie',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartPieComponent implements OnDestroy {
  // @Input() statType;
  data: any;
  options: any;
  themeSubscription: any;
  stats: Stat[] = [];

  constructor(private theme: NbThemeService, private statisticsService: StatisticsData) {
  }

  createPie() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      const stats: Stat[] = this.stats;

      const labels: String[] = []
      const amounts: Number[] = []

      console.log(this.stats);

      for (let i = 0; i < stats.length; i++) {
        labels[i] = stats[i].tagName;
      }

      for(let i = 0; i <  stats.length; i++) {
        amounts[i] = stats[i].distribution * 100;
      }

      this.data = {
        labels: labels,
        datasets: [{
          data: amounts,
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnInit() {
    this.statisticsService.getStatistics('language')
      .subscribe(stat => {
        console.log('stat from server');
        console.log(stat);
        this.stats = stat;
        this.createPie();
      });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
