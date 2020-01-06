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
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class ChartPieComponent implements OnDestroy {
  @Input() statType: String;
  data: any;
  options: any;
  themeSubscription: any;
  stats: Stat[] = [];

  constructor(private theme: NbThemeService, private statisticsService: StatisticsData) {
  }

  createPie() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      const stats: Stat[] = this.stats;

      const labels: String[] = []
      const distribution: Number[] = []
      const data: any[] = []

      console.log('create pie from: ' + this.stats);

      for (let i = 0; i < stats.length; i++) {
        labels[i] = stats[i].tagName;
      }

      for (let i = 0; i <  stats.length; i++) {
        data[i] = {}
        data[i].name = stats[i].tagName;
        data[i].value = stats[i].amount;
      }

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: labels,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Programming languages',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnInit() {
    this.statisticsService.getStatistics(this.statType)
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
