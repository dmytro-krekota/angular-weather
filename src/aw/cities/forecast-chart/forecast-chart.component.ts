import {Component, ViewChild, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Label} from 'ng2-charts';
import {ForecastData} from 'src/aw/shared/types/forecast-data.interface';

@Component({
  selector: 'aw-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastChartComponent implements OnInit {
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left'
        },
        {
          id: 'y-axis-1',
          position: 'right'
        }
      ]
    }
  };

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;
  @Input() data: ForecastData[];

  ngOnInit() {
    this.lineChartLabels = this.data.map(item => item.dateTime.replace('00:00', '00'));
    this.lineChartData = [
      {data: this.data.map(item => item.averageTemperature), label: 'Average temperature (°C)'},
      {data: this.data.map(item => item.windSpeed), label: 'Wind speed (m/s)'}
    ];
  }
}
