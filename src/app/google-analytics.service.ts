import { Injectable } from '@angular/core';

declare let ga: Function; // Declare ga as a function

@Injectable()
export class GoogleAnalyticsService {

  constructor() { }


  // create our event emitter to send our data to google analytics
  public eventEmitter(eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

}
