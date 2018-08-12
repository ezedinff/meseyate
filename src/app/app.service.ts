import { Injectable } from '@angular/core';
import {DashBoardMenus, MENUS} from './pages-menu';
import {Router} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {SidnavComponent} from './admin/sidnav/sidnav.component';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
  isLogged = false;
  constructor(private route: Router, private http: HttpClient) { }
  API_URL = 'http://localhost:8000/api';

  getServiceCategories() {
    return this.http.get(this.API_URL + '/services');
  }
}
