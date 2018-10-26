import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    IndexComponent,
    LoginComponent,
    ProductsComponent,
    SignupComponent,
    SingleProductComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:IndexComponent},
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'products',component:ProductsComponent},
      {path:'product/:id',component:SingleProductComponent},
      {path:'signup',component:SignupComponent},
      {path:'contactus',component:ContactusComponent},
      {path:'about',component:AboutusComponent},
      {path:'**',component:PageNotFoundComponent}


    ])
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
