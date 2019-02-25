import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'; // import Router and NavigationEnd

  // declare ga as a function to set and sent the events
 declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

   constructor(public router: Router) {

    // subscribe to router events and send page views to google analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

      }

    });

  }

}
