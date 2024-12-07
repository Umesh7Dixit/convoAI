import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf and ngFor
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel for two-way data binding

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'] // Changed to styleUrls
})
export class FormComponent {
  isModalOpen = false; // State for modal visibility
  isCardModalOpen = false; // State for card clickmodal visibility

  openModal() {
    this.isModalOpen = true; // Function to open the modal
  }

  closeModal() {
    this.isModalOpen = false; // Function to close the modal
  }

  openCardModal() {
    this.isModalOpen = false; // Function to close the modal

    this.isCardModalOpen = true; // Function to open the modal
  }

  closeCardModal() {
    this.isCardModalOpen = false; // Function to close the modal
  }
}
