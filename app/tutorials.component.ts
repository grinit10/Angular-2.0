import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h2>Button was clicked {{count}} times</h2>
             <button (click)="onclick($event)">click me</button>`
})
export class TutorialsComponent { 
  public count = 0;
  onclick(event){
    console.log(event);
    this.count++;
  }
}