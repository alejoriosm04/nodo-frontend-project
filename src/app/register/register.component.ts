import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }  // Inject the Router

  onRegisterSubmit(): void {
    this.userService.register(this.registerData).subscribe(response => {
      window.alert("Cuenta creada exitosamente, ahora puedes iniciar sesión.");
      this.router.navigate(['/login']);  // Navigate to the login page
    });
  }
}
