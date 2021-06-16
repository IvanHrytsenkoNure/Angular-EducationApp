import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StaticContentComponent } from './components/static-content/static-content.component';
import { Route1ComponentComponent } from './components/route1-component/route1-component.component';
import { Route2ComponentComponent } from './components/route2-component/route2-component.component';
import { Route3ComponentComponent } from './components/route3-component/route3-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './components/modules/material-module/material-module.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { InputComponent } from './components/input/input.component';

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
    StaticContentComponent,
    Route1ComponentComponent,
    Route2ComponentComponent,
    Route3ComponentComponent,
    ModalWindowComponent,
    DropdownComponent,
    UserRegistrationComponent,
    InputComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModuleModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes),    
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
