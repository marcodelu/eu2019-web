import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let container = document.getElementById('about-text-div');
    container.scrollTop = container.scrollHeight;
  }

}
