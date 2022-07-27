import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit /*DoCheck*/ {

  public token: any;

  constructor(
    private usersService: UsersService
  ) {

  }

  ngOnInit() {
    this.token = this.usersService.getToken();
    // console.log(this.token)
  }


}
