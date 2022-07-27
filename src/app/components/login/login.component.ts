import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  public status: string;
  public identity: {};
  // public user: User;


  constructor(
    private UsersService: UsersService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null),
      gettoken: new FormControl<boolean | null>(true),
    })

    // this.user = new User("", "", "", "", "", "", "ROLE_USER", "",)
    this.status = "";
    this.identity = {};

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.UsersService.login(this.formLogin.value)
      .then(response => {
        if (response.error) {
          this.status = 'error';
        } else {

          this.status = 'success';
          localStorage.setItem('gettoken', response.token);
          this.getCounters();

          // console.log(response.token)


        }
      }).catch(err => console.log(err));
  }


  getCounters() {
    this.UsersService.getCounters().subscribe(
      response => {
        localStorage.setItem('stats', JSON.stringify(response))
        this.status = 'success'
        window.location.href = '/home'
      }
    )
  }


}
