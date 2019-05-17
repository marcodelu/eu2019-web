import {Injectable} from '@angular/core';
import {ChartOptions} from 'chart.js';

@Injectable()
export class ChartService {

  constructor() {
  }

  getOptions(): ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontFamily: 'Montserrat, sans-serif'
        },
        position: 'bottom'
      },
      tooltips: {
        bodyFontFamily: 'Montserrat, sans-serif',
        footerFontFamily: 'Montserrat, sans-serif',
        titleFontFamily: 'Montserrat, sans-serif'
      },
      title: {
        text: null,
        fontFamily: 'Montserrat, sans-serif'
      }
    };
  }

  getColors() {
    return [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(91, 192, 235, 1)',
          'rgba(253, 231, 76, 1)',
          'rgba(155, 197, 61, 1)',
          'rgba(229, 89, 52, 1)',
          'rgba(250, 121, 33, 1)',
          'rgba(23, 18, 25, 1)'
        ]
      }
    ];
  }
}
