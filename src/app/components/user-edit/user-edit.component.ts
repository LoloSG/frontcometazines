import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User | any;
  token: string;
  status: string;


  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.token = "";
    this.status = "";


  }

  async ngOnInit(): Promise<void> {
    this.token = await this.usersService.getToken();
    this.user = await this.usersService.tokenDecode();
  };

  onSubmit() {
    console.log(this.user)
    this.usersService.updateUser(this.user).subscribe(
      response => {
        if (!response.user) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.router.navigate(['/login']);
          // return this.user;
        };

      });
  }

}




















