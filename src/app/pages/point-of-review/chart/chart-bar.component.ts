import {Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import {StatisticsData} from '../../../@core/data/statistics';
import {Stat} from '../../../@core/lib/objects/stat';

@Component({
  selector: 'ngx-chart-bar',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class ChartBarComponent implements OnDestroy {
  @Input() statType: String;
  @Input() reviews: boolean;
  data: any;
  options: any;
  themeSubscription: any;
  stats: Stat[] = [];

  constructor(private theme: NbThemeService, private statisticsService: StatisticsData) {
  }

  createBar() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      const stats: Stat[] = this.stats;

      let labels: String[] = []
      let amount: Number[] = []

      for (let i = 0; i < stats.length; i++) {
        labels[i] = stats[i].tagName;
      }

      for (let i = 0; i <  stats.length; i++) {
        amount[i] = stats[i].amount;
      }

      if (stats.length == 0) {
        labels = ['No data available'];
        amount = [1];
      }

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: labels,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'posts',
            type: 'bar',
            barWidth: '60%',
            data: amount,
          },
        ],
      };
    });
  }

  ngOnInit() {
    if (!this.reviews) {
      this.statisticsService.getStatistics(this.statType)
        .subscribe(stat => {
          this.stats = stat;
          this.createBar();
        });
    } else {
      this.statisticsService.getReviewStatistics()
        .subscribe(stat => {
          this.stats = stat;
          this.createBar();
        });
    }
  }

  ngOnDestroy(): void {
    try {
      this.themeSubscription.unsubscribe();
    } catch (e) {
      console.log('chart-bar finished');
    }
  }
}
