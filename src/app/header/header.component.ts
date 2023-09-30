import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isAuthenticated = false;
  authSubscription: Subscription | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.authSubscription = this.userService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout(): void {
    this.userService.logout();
  }
}
