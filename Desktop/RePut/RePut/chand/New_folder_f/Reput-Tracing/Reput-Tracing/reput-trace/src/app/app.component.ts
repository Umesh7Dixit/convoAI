import { Component } from '@angular/core';
import { Router,RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd, ChildActivationStart, ChildActivationEnd } from '@angular/router';
import { HeaderComponent } from '../app/shared-component/header/header.component';
import { MenuBarComponent } from '../app/shared-component/menu-bar/menu-bar.component';
import { NotificationBarComponent } from '../app/shared-component/notification-bar/notification-bar.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  
    RouterOutlet,
    HeaderComponent,
    MenuBarComponent,
    NotificationBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})
export class AppComponent {
  title = 'reput-trace';
  page: any = { isLogin : true }
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Define routes where layout components should be hidden
        const loginRoutes = ['login', 'reset-password'];

        // Extract route path without query parameters
        const currentRoute = event.url.split('?')[0].replace('/', '');

        // Check if the current route matches one of the login-related routes
        this.page.isLogin = loginRoutes.includes(currentRoute) || currentRoute === '';
      }
    });
  }
}
