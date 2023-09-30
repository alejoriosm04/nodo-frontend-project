import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  onLoginSubmit(): void {
    this.userService.login(this.loginData).subscribe(response => {
      this.userService.setAuthenticated(true);
      let loginResponse: any = response
      this.userService.setToken(loginResponse.access_token);
      this.router.navigate(['/labspaces']);
    });
  }
}
