import {HomeComponent} from '../home/home.component';
import {Routes} from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {ContactComponent} from '../contact/contact.component';
import {ServiceComponent} from '../service/service.component';
import {BlogComponent} from '../blog/blog.component';
import {MallComponent} from '../mall/mall.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'malls', component: MallComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];
