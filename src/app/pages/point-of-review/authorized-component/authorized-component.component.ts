import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../../../@core/lib/objects/user';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from '../../../@core/utils';
import { Router } from '@angular/router';
import {AuthService} from '../../../@core/services/auth.service';

@Component({
  selector: 'ngx-authorized-component',
  templateUrl: './authorized-component.component.html',
  styleUrls: ['./authorized-component.component.scss'],
})
export class AuthorizedComponentComponent implements AfterViewInit, OnInit {


  protected user: User;
  constructor(auth: AuthService, protected state: StateService, protected router: Router) {
    this.user = this.state.user.value;
    this.state.user.subscribe(user => {
      this.user = user;
    });
    if (!this.user) {
      router.navigate(['']);
    }

    auth.isBanned(this.user.username)
      .subscribe(banned => {
        if (banned) {
          this.state.selectUser(undefined);
          router.navigate(['']);
        }
      });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.user) {
      this.router.navigate(['']);
    }
  }

  protected currentUserName(): string {
    return this.user ? this.user.username : '';
  }
}
