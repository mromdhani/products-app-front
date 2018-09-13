import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

import {RouterModule, Route} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { MyJwtInterceptor } from './interceptors/my-jwt-interceptor';
import { ProductAddGuard } from './guards/product-add.guard';
import { LogoutResolver } from './resolvers/logout.service';

const routes: Route[] = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'products/:id', component: ProductsDetailComponent},
  { path: 'add', component: ProductsAddComponent, canActivate: [ProductAddGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: WelcomeComponent,  resolve: [LogoutResolver]},
  { path: '**', component: NotFoundComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsListComponent,
    ProductsAddComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyJwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
