import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-notification-bar',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule,CommonModule],
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent {
  showFiller = false; // Define the showFiller property
  isDrawerOpen = false; // Track the drawer state

  // Method to toggle the drawer state
  onDrawerToggle() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  
}