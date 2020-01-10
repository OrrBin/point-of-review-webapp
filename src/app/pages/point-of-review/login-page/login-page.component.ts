import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '../../../@core/services/auth.service';
import { AuthenticationRequest } from '../../../@core/lib/objects/authentication-request';
import { StateService } from '../../../@core/utils';
import { Router } from '@angular/router';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";
  constructor(private auth: AuthService, private state: StateService, private router: Router, private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  signin() {
    this.auth.login(new AuthenticationRequest(this.username, this.password)).subscribe((user) => {
      this.state.selectUser(user);
      this.showToast('success', 'Authentication successful', '');
      setTimeout(() => {
          this.router.navigate(['/pages/point-of-review/feed']);
        }, 750);
    },
      (error) => {
      // this.errorMessage = `Email and password do not match`;
      if (error === 'no_auth')
        this.showToast('warning', 'Authentication failed', 'Wrong username and/or password');
      if (error === 'banned')
          this.showToast('danger', 'User is temporarily banned', 'Please contact the staff for more information');
      if (error === 'server_down')
          this.showToast('info', 'Server is down', 'Turn on the server application');
    });
  }

  signup() {
    this.auth.register(new AuthenticationRequest(this.username, this.password)).subscribe((user) => {
      this.state.selectUser(user);
      this.showToast('success', 'Registration successful', 'You are auto logged-in');
        setTimeout(() => {
          this.router.navigate(['/pages/point-of-review/feed']);
        }, 1500);
    },
      (error) => {
        // this.errorMessage = `User ${this.username} already exists`;
        if (error === 'conflict')
          this.showToast('danger', 'Registration failed', 'Username already exists in the system.\nPlease choose another username');
        if (error === 'wrong_format')
          this.showToast('danger', 'Registration failed', 'Password and username should be 3-12 letters, with numbers and letters only');
        if (error === 'server_down')
          this.showToast('info', 'Server is down', 'Turn on the server application');
    });
  }

  // available types: primary, success, warning, info, danger
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 8000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true,
    };

    this.toastrService.show(
      body,
      title,
      config);
  }

}
