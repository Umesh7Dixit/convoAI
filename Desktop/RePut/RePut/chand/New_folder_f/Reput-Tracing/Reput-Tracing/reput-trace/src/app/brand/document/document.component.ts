import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule,CommonModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  isFilterDocumentDropdownOpen = false;

  toggleFilterDocumentDropdown() {
    this.isFilterDocumentDropdownOpen = !this.isFilterDocumentDropdownOpen;
  }

  closeFilterDocumentDropdown() {
    this.isFilterDocumentDropdownOpen = false;
  }

  resetFilters() {
    // Reset the filters to default
    console.log('Filters reset');
  }
}
