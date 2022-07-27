import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public token: any;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.token = this.usersService.getToken();
    // console.log(this.token)
  };



  logOut() {
    localStorage.clear();
    window.location.href = '/login'
  }



}
