import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf and ngFor
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel for two-way data binding

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule in imports
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // tableData = [
  //   { yearSeason: '2024, Season-less', type: 'Shirt', id: 'FUR001', group: '--', product: 'Formals', suppliers: 'Colorplus manufacturers', facilityName: '#112 Bangalore', materialComposition: 'Cotton 70%\nPolyester 30%', certificates: 'Not available', available: false, checked: false },
  //   { yearSeason: '2024, Season-less', type: 'Jeans', id: 'FUR001', group: '--', product: 'Skinny', suppliers: 'Colorplus manufacturers', facilityName: '#223 Coimbatore', materialComposition: 'Cotton 70%\nPolyester 30%', certificates: 'Not available', available: false, checked: false },
  //   { yearSeason: '2024, Season-less', type: 'Skirt', id: 'FUR001', group: '--', product: 'Casual', suppliers: 'Colorplus manufacturers', facilityName: '#034 Tiruppur', materialComposition: 'Cotton 70%\nPolyester 30%', certificates: 'Available', available: true, checked: false },
  //   { yearSeason: '2024, Season-less', type: 'Hoodies', id: 'FUR001', group: '--', product: 'Zip-up', suppliers: 'Colorplus manufacturers', facilityName: 'Not available', materialComposition: 'Cotton 70%\nPolyester 30%', certificates: 'Not available', available: false, checked: false },
  //   // Add more rows as needed
  // ];

  tableData = [
    { yearSeason: 'S2024', type: 'Dress', id: 'TRK342', group: 'Apparel', product: 'Casuals', suppliers: 'Sunrise Garments', facilityName: 'MUM#205', materialComposition: 'Cotton 60%,\n Linen 38%, Spandex 2%', certificates: 'Available', available: true, checked: false },
    { yearSeason: 'W2024', type: 'Sweater', id: 'LEX520', group: 'Knitwear', product: 'Casuals', suppliers: 'Apex Knitters', facilityName: 'LDH#341', materialComposition: 'Wool 80%,\n Acrylic 15%, Nylon 5%', certificates: 'Available', available: true, checked: false },
    { yearSeason: 'B2024', type: 'Jacket', id: 'QWX073', group: 'Outerwear', product: 'Formals', suppliers: 'Trendy Threads Co.', facilityName: 'DL#122', materialComposition: 'Polyester 70%,\n Nylon 30%', certificates: 'Available', available: true, checked: false },
    { yearSeason: 'F2024', type: 'Scarf', id: 'ZXP658', group: 'Accessories', product: 'Seasonal', suppliers: 'Heritage Looms', facilityName: 'JAI#89', materialComposition: 'Silk 40%,\n Wool 40%, Polyester 20%', certificates: 'Not Available', available: false, checked: false },
    { yearSeason: 'S2025', type: 'T-shirt', id: 'NYT971', group: 'Apparel', product: 'Casuals', suppliers: 'UrbanWeave Textiles', facilityName: 'HYD#57', materialComposition: 'Cotton 95%, Spandex 5%', certificates: 'Available', available: true, checked: false },
    // Add more rows as needed
  ];

// 2024, Summer	Dress	TRK342	Apparel	Casuals	Sunrise Garments	#205 Mumbai	Cotton 60%, Linen 40%	Available
// 2024, Winter	Sweater	LEX520	Knitwear	Casuals	Apex Knitters	#341 Ludhiana	Wool 80%, Acrylic 20%	Available
// 2024, Spring	Jacket	QWX073	Outerwear	Formals	Trendy Threads Co.	#122 Delhi	Polyester 70%, Nylon 30%	Available
// 2024, Autumn	Scarf	ZXP658	Accessories	Seasonal	Heritage Looms	#89 Jaipur	Silk 50%, Wool 50%	Not Available
// 2025, Summer	T-shirt	NYT971	Apparel	Casuals	UrbanWeave Textiles	#57 Hyderabad	Cotton 100%	Available


  isModalOpen = false; // State for modal visibility

  openModal() {
    this.isModalOpen = true; // Function to open the modal
  }

  closeModal() {
    this.isModalOpen = false; // Function to close the modal
  }

  uploadFiles() {
    // Function to handle file upload logic
    console.log('Upload files clicked');
  }

  isFilterDropdownOpen = false;

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  closeFilterDropdown() {
    this.isFilterDropdownOpen = false;
  }

  setRating(rating: number) {
    // Implement rating filter logic
    console.log('Selected rating:', rating);
  }

  resetFilters() {
    // Reset the filters to default
    console.log('Filters reset');
  }

  isUploadModalOpen = false;
  uploadedFile: File | null = null;

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

}