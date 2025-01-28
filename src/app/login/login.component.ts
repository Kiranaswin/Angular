import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === 'kiran.B' && this.password === 'test@123') {
      console.log('Navigating to /home');
      this.router.navigate(['/home']);
    } else {

      this.errorMessage = 'Invalid username or password';
    }
  }
}
