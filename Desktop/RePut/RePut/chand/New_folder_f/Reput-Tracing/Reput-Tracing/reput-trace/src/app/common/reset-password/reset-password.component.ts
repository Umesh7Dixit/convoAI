import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  
  resetPasswordForm: FormGroup;
  isPasswordVisible: { [key: string]: boolean } = {
      newPassword: false,
      confirmPassword: false,
  };

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,private authService: AuthService) {}
  token!: string; // Holds the token from the URL
  errorMessage: string | null = null;


  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.token = params['token']; // Ensure 'token' matches the query parameter in the link
      if (!this.token) {
        this.errorMessage = 'Invalid or missing reset token.';
      }
    });

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     const body = document.body;
    //     // Clear existing page-specific classes
    //     body.className = '';
    //     if (event.url === '/reset-password') {
    //       body.classList.add('reset-password-page');
    //     }
    //   }
    // });

    this.resetPasswordForm = this.fb.group(
            {
                newPassword: ['', [Validators.required, Validators.minLength(8), this.passwordStrengthValidator]],
                confirmNewPassword: ['', [Validators.required]],
            },
            { validator: this.passwordMatchValidator }
        );
    }

    togglePasswordVisibility(field: string, input: HTMLInputElement): void {
        this.isPasswordVisible[field] = !this.isPasswordVisible[field];
        input.type = this.isPasswordVisible[field] ? 'text' : 'password';
    }

    onResetPasswordSubmit(): void {
        if (this.resetPasswordForm.invalid || !this.token) {
            this.errorMessage = 'Please fill the form correctly.';
            return;
        }

        if (this.resetPasswordForm.valid && this.token) {
            this.onPasswordChange(this.token, this.resetPasswordForm.value.newPassword);
        } else {
          // Mark all fields as touched to show validation errors
          this.resetPasswordForm.markAllAsTouched();
      }
    }

    onPasswordChange(token: string, password: string): void {
        this.authService.resetPassword(token, password).subscribe({
            next: () => {
                alert('Password reset successfully!');
                this.router.navigate(['/login']); // Navigate to login after successful reset
            },
            error: (err) => {
                console.error(err);
                if (err.error && err.error.message) {
                    this.errorMessage = err.error.message;
                } else {
                    this.errorMessage = 'An error occurred while resetting the password.';
                }
            },
        });
    }

    passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (!value) {
            return null; // Allow required validator to handle empty values
        }

        // Regex for strong password: at least one uppercase, one number, and one special character
        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~`|]).{8,}$/;
        const isValid = strongPasswordRegex.test(value);
        return isValid ? null : { weakPassword: true };
    }

    passwordMatchValidator(group: FormGroup): ValidationErrors | null {
        const password = group.get('newPassword')?.value;
        const confirmPassword = group.get('confirmNewPassword')?.value;
        return password === confirmPassword ? null : { mismatch: true };
    }
}