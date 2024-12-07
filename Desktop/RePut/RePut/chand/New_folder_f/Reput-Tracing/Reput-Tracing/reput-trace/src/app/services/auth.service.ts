import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/user'; // Replace with your API URL
  private tokenKey = 'authToken'; // Key to store token in localStorage

  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: any) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        this.storeToken(response.token);
         // Store in cookies
      document.cookie = `reput=${response.token}; path=/; SameSite=Strict`;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('api error', error);
        return throwError(() => error);
      })
    );
  }

  register(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.apiUrl}/signup`, payload);
  }

  submitUserDetails(userDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userDetails);
  }

  forgotPassword(email: string): Observable<any> {
    const url = `${this.apiUrl}/forgot-password`; // Replace with your endpoint
    return this.http.post(url, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    const apiUrl = `${this.apiUrl}/reset-password`; // Replace with your API endpoint
    const body = { token, password };
  
    return this.http.put(apiUrl, body).pipe(
      tap(() => console.log('Password reset successfully')),
      catchError((error: HttpErrorResponse) => {
        console.error('Error resetting password:', error);
        return throwError(() => error);
      })
    );
  }

  storeToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('token', token); // Access sessionStorage only in browser
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('token');
    }
    return null;
  }

  clearToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('token');
    }
  }
  

  logout(): void {
    //sessionStorage.removeItem(this.tokenKey);
    this.clearToken();
    document.cookie = 'token=; path=/; SameSite=Strict';
    this.router.navigate(['/login']);
  }

  // getToken(): string | null {
  //   return sessionStorage.getItem(this.tokenKey);
  // }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error('Client-side error:', error.error);
    } else {
      console.error(`Server error (code:  ${error}`);
    }
    return throwError(() => new Error('Authentication failed, please try again.'));
  }
}


