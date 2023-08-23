import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userId!: string;
  userPassword!: string;

  constructor(private auth: AuthService) {}

  loginBtn() {
    // this.auth.loginSubmit();
    this.auth.registerUser(this.userId, this.userPassword).subscribe((res) => {
      console.log('res', res);
    });
    this.userId = '';
    this.userPassword = '';
  }
}
