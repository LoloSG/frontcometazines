import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User | any;
  token: string;

  constructor(
    private usersService: UsersService
  ) {
    this.token = "";
  }

  async ngOnInit(): Promise<void> {
    this.token = await this.usersService.getToken();
    this.user = await this.usersService.tokenDecode();
  }

}
