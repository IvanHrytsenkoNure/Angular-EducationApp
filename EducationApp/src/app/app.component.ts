import { Component } from '@angular/core';
import { Route1ComponentComponent } from './components/route1-component/route1-component.component';
import { Route2ComponentComponent } from './components/route2-component/route2-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sharedModelHeaderName = "Shared modal header"

  onActivate(event: any)
  {
    if(event instanceof Route2ComponentComponent)
    {
      (event as Route2ComponentComponent).modalHeader = this.sharedModelHeaderName;      
    }
  }


}
