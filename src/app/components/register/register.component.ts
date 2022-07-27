import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;


  status: string;

  constructor(
    private UsersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.status = "";

    this.formRegister = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      nick: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,100}$/),
        Validators.minLength(5),
        Validators.maxLength(15)
      ])
    });


  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.UsersService.registro(this.formRegister.value)
      .then(response => {
        if (response.user && response.user._id) {
          this.router.navigate(['/login']);
          this.status = 'success';
        } else {

          this.status = 'error';

        }
      })
      .catch(err => {
        console.log(err);
      });
  };





  // passwordValidator(form: FormGroup) {
  //   const passwordValue = form.get('password').value;
  //   const passwordRepeatValue = form.get('password_repeat').value;

  //   if (passwordValue === passwordRepeatValue) {
  //     return null;
  //   } else {
  //     return { passwordvalidator: true }
  //   }
  // }


  // async userValidator(user) {
  //   this.existingUser = await this.newUserService.getByUser(user);

  //   if (this.existingUser) {
  //     this.userValid = 0;
  //   } else {
  //     this.userValid = 1;
  //   }
  //   }
  // }
};