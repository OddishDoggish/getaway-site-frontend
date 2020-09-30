import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelModule } from './travel/travel.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    TravelModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD

=======
>>>>>>> 1be001419cc2c5858922b24a96f8f3a6824d54ca
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){   
  }
 }
