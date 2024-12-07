import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';  // Import Angular Material Tabs
import { MatButtonModule } from '@angular/material/button';  // Import Angular Material Button
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule,CommonModule, FormsModule],  // Include necessary modules for tabs and buttons
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss', '../products/products.component.scss' ]  // Correct plural form: 'styleUrls'
})
export class SuppliersComponent {

  isFilterDropdownOpen = false;
  showCompany: boolean = false;
  userEmail: string = '';
  isModalOpen = false; // State for modal visibility
  isInviteModalOpen = false;
  isUploadModalOpen = false;
  uploadedFile: File | null = null;
  isBrandForm: boolean = true; // To toggle between Brand and Supplier forms

  tableData = [
    { company: 'ColorPlus', tier: 'Tier 1', rating: '3.4', category: 'Clothing & Apparels', gstNumber: '29GGGGG1314R9Z6', contactPerson: 'Mr Venkatesh', location: 'Mumbai' },
    { company: 'Unilever', tier: 'Tier 1', rating: '4.2', category: 'Consumer Goods', gstNumber: '16FFFFFF1314T7G2', contactPerson: 'Mr Robert', location: 'Delhi'}
  ];

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  openDetails(){    
      this.showCompany = true;
  }

  onback(){
    this.showCompany = false;
  }

  toggleForm(formType: string): void {
    this.isBrandForm = formType === 'brand';
  }

  closeFilterDropdown() {
    this.isFilterDropdownOpen = false;
  }

  isFilterDocumentDropdownOpen = false;

  toggleFilterDocumentDropdown() {
    this.isFilterDocumentDropdownOpen = !this.isFilterDocumentDropdownOpen;
  }

  closeFilterDocumentDropdown() {
    this.isFilterDocumentDropdownOpen = false;
  }

  setRating(rating: number) {
    // Implement rating filter logic
    console.log('Selected rating:', rating);
  }

  resetFilters() {
    // Reset the filters to default
    console.log('Filters reset');
  }

  openModal() {
    this.isModalOpen = true; // Function to open the modal
  }
  openInviteModal(){
    this.isInviteModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false; // Function to close the modal
    this.isInviteModalOpen = false;
  }

  uploadFiles() {
    // Function to handle file upload logic
    console.log('Upload files clicked');
  }

  openUploadModal() {
    this.isUploadModalOpen = true;
  }

  closeUploadModal() {
    this.isUploadModalOpen = false;
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
    }
  }

  removeFile() {
    this.uploadedFile = null;
  }

  onSubmit() {
    console.log('Email Submitted:', this.userEmail);
    // Perform any additional actions here (e.g., send email to the server)
    this.closeModal();
  }
}