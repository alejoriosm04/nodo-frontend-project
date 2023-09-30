import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';  // Import HttpHeaders & HttpParams
import { BehaviorSubject } from 'rxjs';
import { LabSpace } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = 'http://142.93.198.98:8000';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  login(userData: any) {
    // Convert user data into x-www-form-urlencoded format
    const body = new HttpParams()
      .set('username', userData.username)
      .set('password', userData.password);

    // Set Content-Type header
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(`${this.baseUrl}/login`, body.toString(), { headers: headers });
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  checkIfAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  logout() {
    this.removeToken();
    this.setAuthenticated(false);
  }

  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  removeToken(): void {
    localStorage.removeItem('jwtToken');
  }

  // Method to get the lab spaces from the backend
  getLabSpaces() {
    return this.http.get<LabSpace[]>(`${this.baseUrl}/labspace/`);
  }

  // Method to do reservation from lab spaces to the backend
  reserveLabSpace(reservationData: any) {
    const token = this.getToken();

    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(`${this.baseUrl}/reservation`, reservationData, { headers: headers });
    } else {
      // Handle the error when there's no token.
      throw new Error("User not authenticated");
    }
  }

  getUserDetails() {
    const token = this.getToken();

    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.baseUrl}/user/me`, { headers: headers });
    } else {
      // Handle the error when there's no token.
      throw new Error("User not authenticated");
    }
  }

  getReservationsByUser(user_id: string) {
    const token = this.getToken();

    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.baseUrl}/reservation/user/${user_id}`, { headers: headers });
    } else {
      // Handle the error when there's no token.
      throw new Error("User not authenticated");
    }
  }
}
