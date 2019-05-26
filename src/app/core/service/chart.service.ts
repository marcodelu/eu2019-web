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
          'rgba(17, 157, 164, 1)',
          'rgba(255, 225, 156, 1)',
          'rgba(237, 255, 217, 1)',
          'rgba(96, 165, 97, 1)',
          'rgba(191, 177, 193, 1)',
          'rgba(58, 48, 66, 1)',
          'rgba(188, 124, 156, 1)',
          'rgba(146, 220, 229, 1)',
          'rgba(23, 18, 25, 1)',
          'rgba(249, 194, 46, 1)',
          'rgba(118, 129, 142, 1)',
          'rgba(71, 44, 27, 1)'
        ]
      }
    ];
  }

  getPolarColors() {
    return [
      {
        backgroundColor: [
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)',
          'rgba(132, 97, 155, 0.4)'
        ]
      }
    ];
  }
}
