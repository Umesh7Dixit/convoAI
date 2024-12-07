import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgOptimizedImage],
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'] 
})
export class LoginSignupComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  userDetailsForm: FormGroup;
  wasteDetailsForm: FormGroup;
  userId: any;
  isPasswordVisible: { [key: string]: boolean } = {
    loginPassword: false,       // Login password field
    registerPassword: false,    // "Create new password" field
    confirmPassword: false,     // "Re-enter password" field
  };
  forgotEmail = ''; // Store email address for Forgot Password
  forgotPwdSubmitted:boolean; // Track if the reset email has been sent
  selectedOptions: { [key: string]: string } = {};
  selectedCharacteristics: string[] = []; // Tracks selected waste characteristics
  specificCharacteristics: string[] = ['']; // Tracks additional characteristic fields
  rawMaterials = ['Material 1', 'Material 2', 'Material 3']; // Example raw materials
   /**
   * Variable for login-signup screeen
   */
   screen : any = { isLogin : true,isRegister: false,isForgotPassword: false,basicDetails: false,productDetails: false,uploadDocument: false }
  errorMessage: any;
   /**
    * Function for login-signup screeen
    */
   isRoleSelected: boolean = false;
   isBrandRole: boolean = false; // Whether the current role is Brand
   isSupplierRole: boolean = false; // Whether the current role is Supplier
   isTier1: boolean = false; // Whether the selected tier is 1
   isTier2OrBelow: boolean = false; // Whether the selected tier is 2 or below
  constructor(
    private router: Router,private fb: FormBuilder, private authService: AuthService, private cdr: ChangeDetectorRef, private renderer: Renderer2
  ){
    this.activateScreen({ isLogin: true });
  }

  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value || this.validateEmail(value)) {
        return null; // Valid email
      }
      return { invalidEmail: true }; // Invalid email
    };
  }
  
  togglePasswordVisibility(field: string, input: HTMLInputElement): void {
    this.isPasswordVisible[field] = !this.isPasswordVisible[field];
    input.type = this.isPasswordVisible[field] ? 'text' : 'password';
  }
  
  selectOption(group: string, option: string): void {
    if (group === 'companyType') {
      this.userDetailsForm.get('companyType')?.setValue(option);
    }
    if (group === 'companySize') {
      this.userDetailsForm.get('companySize')?.setValue(option);
    }
  }
  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.strongPasswordValidator
        ]),
    },{
      validator: this.strongPasswordValidator
    }
  );

  this.registerForm = this.fb.group({
    email: ['', [Validators.required, this.customEmailValidator()]],
    password: ['', [Validators.required, Validators.minLength(8) ]],
    confirmPassword: ['', Validators.required]
  }, {
      validator: [this.passwordMatchValidator, this.strongPasswordValidator],
  });



  this.userDetailsForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: [
      '',
      [Validators.required, Validators.pattern('^[0-9]{10}$')], // 10-digit phone number validation
    ],
    userType: ['', Validators.required], // New field
    userRole: ['', Validators.required], // New field
    industry: ['', Validators.required],
    gstNumber: ['', Validators.required],
    companyName: ['', Validators.required],
    companyID: ['', Validators.required],
    parentCompanyID: ['', Validators.required],
    parentSupplierID: ['', Validators.required],
    tierLevel: ['', Validators.required],
    productID: ['', Validators.required],
    address: ['', Validators.required],
    companyType: ['', Validators.required],
    companySize: ['', Validators.required],
  });

  this.wasteDetailsForm = this.fb.group({
    wasteCategory: ['', Validators.required],
    selectedCharacteristics: [[], Validators.required], // Ensure this is defined as an array
    rawMaterials: ['', Validators.required],
    specificCharacteristics: this.fb.array([this.createCharacteristic()])
  });


}


createCharacteristic(): FormGroup {
  return this.fb.group({
    description: ['', Validators.required],
  });
}

passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  // Ensure that both fields are filled out
  if (!confirmPassword) {
    return { passwordMismatch: false }; // Return mismatch if confirmPassword is empty
  }

  // Check if passwords match
  return password === confirmPassword ? null : { passwordMismatch: true };
}

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
      const value = control.get('password')?.value;
      // Return null if no value (to allow required validator to handle empty values)
      if (!value) {
        return null;
      }
  
      // Regular expression for strong password
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>?,./\\|`~-])[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>?,./\\|`~-]{8,}$/;
  
      // Test the password
      const isValid = passwordRegex.test(value);
  
      // Return an error object if invalid, otherwise null
      return isValid ? null : { weakPassword: true };
  
  }
  


  onForgotPasswordSubmit() {
    if (this.validateEmail(this.forgotEmail)) {
      this.forgotPwdSubmitted = true; // Display success message
      if (this.forgotEmail) {
        const email = this.forgotEmail;
  
        this.authService.forgotPassword(email).subscribe({
          next: (response) => {
            this.errorMessage = null;
          },
          error: (err) => {
            this.errorMessage =
              err?.error?.message || 'An error occurred. Please try again later.';
          },
        });
      }
    }else {
      this.forgotPwdSubmitted = false; // Hide success message
    }
  }


  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|gov\.in|co\.in)$/;
    return emailRegex.test(email);
  }

  updateEmail(event: Event) {
    const input = event.target as HTMLInputElement;
    this.forgotEmail = input.value.trim();
  }

  activateScreen(obj: any) {
    for(var key in this.screen){
      if(obj[key] != undefined){
        this.screen[key] = true;
      }
      else{
        this.screen[key] = false;
      }
    }
  }
  activatescreen(val: any){
    this.errorMessage = null;
    var obj: any = {};
    obj[val] = true;
    this.activateScreen(obj);
  }
  onLoginSubmit(){
    if (this.loginForm.valid) {
      this.onLogin(this.loginForm.value);
      //this.router.navigateByUrl('brand-dashboard');
    } else {
      Object.keys(this.loginForm.controls).forEach((controlName) => {
        this.loginForm.get(controlName)?.markAsTouched();
      });
    }
  }

  onLogin(Formvalue: any) {
    this.authService.login(Formvalue.email,Formvalue.password).subscribe({
      next: () => {
        //Navigate to dashboard or other route on success
        this.router.navigateByUrl('brand-dashboard');
        this.errorMessage = null;
      },
      error: (err) => {
        console.log(err);
        if (err) {
          // Handle API error messages
          this.errorMessage = err.error.error;
        } else {
          this.errorMessage = 'Failed to connect to the server. Please try again.';
        }
      },
    });
  }
  onRegisterSubmit(){
    if (this.registerForm.valid) {
      this.onRegister();
      //this.activateScreen({ basicDetails: true });
    } else {
      Object.keys(this.registerForm.controls).forEach((controlName) => {
        this.registerForm.get(controlName)?.markAsTouched();
      });
    }
  }

  onRegister(): void {
      const { email, password } = this.registerForm.value;
      this.authService.register(email, password).subscribe({
        next: (response) => {
          console.log('ID user:', response.newUser["_id"]);
          this.userId = response.newUser["_id"];
          this.activateScreen({ basicDetails: true });
          this.errorMessage = null;
        },
        error: (err) => {
          console.log(err);
          if (err) {
            // Handle API error messages
            this.errorMessage = err.error.error;
          } else {
            this.errorMessage = 'Failed to connect to the server. Please try again.';
          }
        },
      });
  }

  /**
 * Toggle the selection of a waste characteristic.
 */
  toggleCharacteristic(characteristic: string): void {
    const selectedCharacteristics = this.wasteDetailsForm.get('selectedCharacteristics');

    // Replace the value with the newly selected characteristic
    selectedCharacteristics?.setValue([characteristic]);
  
    // Trigger Angular change detection to update the DOM
    this.cdr.detectChanges();
  
    console.log('Selected Characteristic:', selectedCharacteristics?.value);
  }

  
/**
 * Check if a waste characteristic is selected.
 */
isSelected(characteristic: string): boolean {
  return this.wasteDetailsForm.get('selectedCharacteristics')?.value.includes(characteristic);
}
/**
 * Add a new input field for specific characteristics.
 */
addCharacteristic(): void {
  this.specificCharacteristicsArray.push(this.createCharacteristic());
}

removeCharacteristic(index: number): void {
  this.specificCharacteristicsArray.removeAt(index);
}

get specificCharacteristicsArray(): FormArray {
  return this.wasteDetailsForm.get('specificCharacteristics') as FormArray;
}

/**
 * Proceed to the document upload step.
 */
proceedToDocument(): void {
  Object.keys(this.wasteDetailsForm.controls).forEach((field) => {
    const control = this.wasteDetailsForm.get(field);
    console.log(`Field: ${field}, Value: ${control?.value}, Errors: ${control?.errors}`);
    if (typeof control?.value === 'string') {
      control.setValue(control.value.trim());
    }
  });

  if (this.wasteDetailsForm.valid) {
    console.log('Waste Details Form is valid:', this.wasteDetailsForm.value);
    console.log('Specific Characteristics:', this.specificCharacteristics);
    this.activateScreen({ uploadDocument: true });
  } else {
    console.log('Waste Details Form is invalid:', this.wasteDetailsForm.errors);
    // Mark all fields as touched to display errors
    Object.keys(this.wasteDetailsForm.controls).forEach((field) => {
      const control = this.wasteDetailsForm.get(field);
      control?.markAsTouched();
    });
  }
}
validateAndProceed(): void {
  // Mark all form controls as touched to trigger validation
  Object.keys(this.userDetailsForm.controls).forEach((field) => {
    const control = this.userDetailsForm.get(field);
    control?.markAsTouched();
    control?.updateValueAndValidity();
  });

  // Check user type for dynamic validations
  const userType = this.userDetailsForm.get('userRole')?.value;
  const companyIdControl = this.userDetailsForm.get('companyID');
  const tierLevelControl = this.userDetailsForm.get('tierLevel');
  const productIdControl = this.userDetailsForm.get('productID');
  const parentSupplierIdControl = this.userDetailsForm.get('parentSupplierID');
  const parentCompanyIdControl = this.userDetailsForm.get('parentCompanyID');

  // Additional validation for Brand
  if (userType === 'Brand') {
    if (!companyIdControl?.value) {
      companyIdControl?.setErrors({ required: true });
    }
    if (!parentCompanyIdControl?.value) {
      parentCompanyIdControl?.setErrors({ required: true });
    }
  }

  // Additional validation for Supplier
  if (userType === 'Supplier') {
    if (!companyIdControl?.value) {
      companyIdControl?.setErrors({ required: true });
    }
    if (!tierLevelControl?.value) {
      tierLevelControl?.setErrors({ required: true });
    }
    if (tierLevelControl?.value === '1' && !productIdControl?.value) {
      productIdControl?.setErrors({ required: true });
    }
    if (['2', '3', '4', '5'].includes(tierLevelControl?.value) && !parentSupplierIdControl?.value) {
      parentSupplierIdControl?.setErrors({ required: true });
    }
  }

  // Prevent submission if the form is invalid
  if (this.userDetailsForm.invalid) {
    return;
  }

  // Call the existing proceedtonext() function if all validations pass
  this.proceedtonext();
}


  proceedtonext(): void {
    Object.keys(this.userDetailsForm.controls).forEach((field) => {
        const control = this.userDetailsForm.get(field);
        console.log(`Field: ${field}, Value: ${control?.value}, Errors: ${control?.errors}`);
        if (typeof control?.value === 'string') {
            control.setValue(control.value.trim());
        }
    });

    if (this.userDetailsForm.valid && this.userId) {
        //console.log('Form is valid:', this.userDetailsForm.value);
        //this.activateScreen({ isLogin: true });
        
        const obj = {...this.userDetailsForm.value, userId: this.userId};
        console.log(obj);
        this.onUserdetailsSubmit(obj);
        
        
    } else {
        console.log('Form is invalid:', this.userDetailsForm.errors);
        Object.keys(this.userDetailsForm.controls).forEach((field) => {
            this.userDetailsForm.get(field)?.markAsTouched();
        });
    }
  }


  hasError(controlName: string, error: string): boolean {
    const control = this.userDetailsForm.get(controlName);
    return !!control && control.hasError(error) && control.touched;
  }

  onUserdetailsSubmit(userDetails: any){
    this.authService.submitUserDetails(userDetails).subscribe({
      next: (response) => {
        this.activateScreen({ isLogin: true });
        this.errorMessage = null;
      },
      error: (err) => {
        console.log(err);
        if (err) {
          // Handle API error messages
          this.errorMessage = err.error.error;
        } else {
          this.errorMessage = 'Failed to submit user details. Please try again.';
        }
      },
    });
 }


 onUserRoleChange(event: Event): void {
  const selectedRole = (event.target as HTMLSelectElement).value;

  this.isRoleSelected = selectedRole !== '';
  this.isBrandRole = selectedRole === 'Brand';
  this.isSupplierRole = selectedRole === 'Supplier';

  // Reset dependent fields for tier levels
  this.isTier1 = false;
  this.isTier2OrBelow = false;

  // Update form validators dynamically
  if (this.isBrandRole) {
    this.userDetailsForm.get('companyID')?.setValidators(Validators.required);
    this.userDetailsForm.get('parentCompanyID')?.setValidators(Validators.required);

    this.userDetailsForm.get('tierLevel')?.clearValidators();
    this.userDetailsForm.get('productID')?.clearValidators();
    this.userDetailsForm.get('parentSupplierID')?.clearValidators();
  } else if (this.isSupplierRole) {
    this.userDetailsForm.get('companyID')?.setValidators(Validators.required);
    this.userDetailsForm.get('tierLevel')?.setValidators(Validators.required);

    this.userDetailsForm.get('parentCompanyID')?.clearValidators();
  }

  // Update form control validity
  this.userDetailsForm.get('companyID')?.updateValueAndValidity();
  this.userDetailsForm.get('parentCompanyID')?.updateValueAndValidity();
  this.userDetailsForm.get('tierLevel')?.updateValueAndValidity();
  this.userDetailsForm.get('productID')?.updateValueAndValidity();
  this.userDetailsForm.get('parentSupplierID')?.updateValueAndValidity();
}


onTierLevelChange(event: Event): void {
  const selectedTier = (event.target as HTMLSelectElement).value;

  this.isTier1 = selectedTier === '1';
  this.isTier2OrBelow = ['2', '3', '4', '5'].includes(selectedTier);

  if (this.isTier1) {
    this.userDetailsForm.get('productID')?.setValidators(Validators.required);
    this.userDetailsForm.get('parentSupplierID')?.clearValidators();
  } else if (this.isTier2OrBelow) {
    this.userDetailsForm.get('parentSupplierID')?.setValidators(Validators.required);
    this.userDetailsForm.get('productID')?.clearValidators();
  }

  // Update form control validity
  this.userDetailsForm.get('productID')?.updateValueAndValidity();
  this.userDetailsForm.get('parentSupplierID')?.updateValueAndValidity();
}




  proceedtodocument(){
    this.activateScreen({ uploadDocument: true });
  }
  prevStep(val: any){
    var obj: any = {};
    obj[val] = true;
    this.activateScreen(obj);
  }
  proceedtoLogin(){
    this.router.navigateByUrl('login');
  }
}

 
