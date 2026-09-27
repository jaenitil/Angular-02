import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  })
  
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

  registerData = {
    username: '',
    email: '',
    password: ''
  };

  submitHandler() {
    this.authService.registerRequest(this.registerData).subscribe({
      next: (data) => {
        this.authService.login(data.payload);
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}


