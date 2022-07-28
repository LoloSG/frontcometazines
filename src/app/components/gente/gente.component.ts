import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gente',
  templateUrl: './gente.component.html',
  styleUrls: ['./gente.component.css']
})
export class GenteComponent implements OnInit {

  token: any;
  user: any;
  page: any;
  next_page: any;
  prev_page: any;
  status: any;
  total: any;
  pages: any;
  users: any;
  url: any;
  follows: any;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,

  ) {
    this.url = "http://localhost:3000/api/"

  }

  async ngOnInit(): Promise<void> {
    this.token = await this.usersService.getToken();
    this.user = await this.usersService.tokenDecode();
    this.actualPage();

  }

  actualPage() {
    this.route.params.subscribe(params => {
      let page = +params['page'];
      this.page = page;

      if (!params['page']) {
        page = 1;
      }


      if (!page) {
        page = 1;
      } else {
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if (this.prev_page <= 0) {
          this.prev_page = 1;
        }
      }
      // Devolver listado de usuarios
      this.getUsers(page);

    });
  };


  getUsers(page: any) {
    this.usersService.getUsers(page).subscribe(
      response => {
        if (!response.users) {

          this.status = 'error';
        } else {
          this.total = response.total;
          this.users = response.users;
          this.pages = response.pages;
          this.follows = response.users_following;

          // console.log(this.follows)

          if (page > this.pages) {
            this.router.navigate(['/page']);
          }

        }
      });
  }

  followUserOver: any;
  mouseEnter(user_id: any) {
    this.followUserOver = user_id;
  }

  mouseLeave(user_id: any) {
    this.followUserOver = 0;
  }

}
