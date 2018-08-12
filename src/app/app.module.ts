import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MallComponent } from './mall/mall.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {DashboardRoutingModule} from './admin/dashboard/dashboard-routing/dashboard-routing.module';
import {AppService} from './app.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicDirective } from './dynamic.directive';

import { AdminMallComponent } from './admin/admin-mall/admin-mall.component';
import {SidnavComponent} from './admin/sidnav/sidnav.component';
import { AdminAddMallComponent } from './admin/admin-add-mall/admin-add-mall.component';
import { ServicesComponent } from './admin/services/services.component';
import { PortfoliosComponent } from './admin/portfolios/portfolios.component';
import { BlogsComponent } from './admin/blogs/blogs.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    MallComponent,
    FooterComponent,
    PortfolioComponent,
    DashboardComponent,
    DynamicComponent,
    DynamicDirective,
    HeaderComponent,
    SidnavComponent,
    AdminMallComponent,
    AdminAddMallComponent,
    ServicesComponent,
    PortfoliosComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent, DashboardComponent]
})
export class AppModule { }
