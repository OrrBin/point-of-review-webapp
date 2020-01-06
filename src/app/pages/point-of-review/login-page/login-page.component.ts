import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '../../../@core/services/auth.service';
import { AuthenticationRequest } from '../../../@core/lib/objects/authentication-request';
import { StateService } from '../../../@core/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";
  errorMessage: string = "";
  constructor(private auth: AuthService, private state: StateService, private router: Router) { }

  ngOnInit() {
  }

  signin() {
    this.auth.login(new AuthenticationRequest(this.email, this.password)).subscribe((user) => {
      this.state.selectUser(user);
      this.router.navigate(['/pages/point-of-review/feed']);
    },
      (error) => this.errorMessage = `Email and password do not match`);
  }

  signup() {
    this.auth.register(new AuthenticationRequest(this.email, this.password)).subscribe((user) => {
      this.state.selectUser(user);
      this.router.navigate(['/pages/point-of-review/feed']);
    },
      (error) => this.errorMessage = `User ${this.email} already exists`
    );
  }

}
