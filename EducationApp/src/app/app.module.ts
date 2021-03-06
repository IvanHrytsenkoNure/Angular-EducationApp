import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { StaticContentComponent } from './components/static-content/static-content.component';
import { Route1ComponentComponent } from './components/route1-component/route1-component.component';
import { Route2ComponentComponent } from './components/route2-component/route2-component.component';
import { Route3ComponentComponent } from './components/route3-component/route3-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  {path: 'route1', component:Route1ComponentComponent },
  {path: 'route2', component:Route2ComponentComponent },
  {path: 'route3', component:Route3ComponentComponent },  
    
];

@NgModule({
  declarations: [
    
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationBarComponent,
    StaticContentComponent,
    Route1ComponentComponent,
    Route2ComponentComponent,
    Route3ComponentComponent,
    ModalWindowComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
