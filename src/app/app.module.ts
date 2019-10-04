import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { MaterialModule } from './material.module';



// Route
import { RouteModule } from './route/route.component';

//IMPORTS PARA EL LOGIN
import {SignInComponent} from './components/user/sign-in/sign-in.component';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import {UserComponent} from './components/user/user.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';import {AuthInterceptor} from './auth/auth.interceptor';
import {UserService} from './services/user.service';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent} from './components/services/services.component';
import { UsersComponent} from './components/users/users.component';
import { ClientsComponent} from './components/clients/clients.component';
import { NavpagesComponent } from './components/navpages/navpages.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { InventoriesComponent } from './components/inventories/inventories.component';
import {FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ServicesComponent,
    ClientsComponent,
    UsersComponent,
    NavpagesComponent,
    IndexComponent,
    FooterComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    SuppliesComponent,
    InventoriesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFDMAPqmDSLIzpAyTi2To3I2jv0O0qS1M'
    })
  ],
     providers: [{
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor,
     multi: true
    },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
