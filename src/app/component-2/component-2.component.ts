import { Component, OnInit } from '@angular/core';
import {GoogleAnalyticsService} from "../google-analytics.service"; // import our analytics service

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  SendLikeEvent() {
    //We call the event emmiter function from our service and pass in the details
    this.googleAnalyticsService.eventEmitter("userPage", "like", "userLabel", 1);
  }

}
