import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: any;
  user: any;


  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute

  ) {
  }

  async ngOnInit(): Promise<void> {
    this.token = await this.usersService.getToken();
    this.user = await this.usersService.tokenDecode();
  };



  logOut() {
    localStorage.clear();
    window.location.href = '/login'
  }





}
