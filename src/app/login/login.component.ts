import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  loginDetails: any = { email: "example@gmail.com", password: "admin123", role: "" };
  validation: any = { email: false, password: false, role: false };
  togglePassword: any = true;
  isLoading: any = false;
  roles: any = [
    {
      title: "Administrator",
      value: "admin"
    },
    {
      title: "Teacher",
      value: "teacher"
    },
    {
      title: "Student",
      value: "student"
    }
  ]
  ngOnInit(): void {  }

  // validate login through api
  validateLogin = () => {
    if (this.checkValidation()) {
      this.isLoading = !this.isLoading;
      const request = { ...this.loginDetails, role: this.loginDetails.role.value };
      this.router.navigate(['/dashboard']);

      // this.user.login(request, request.role).then((response) => {
      //   setTimeout(() => {
      //     this.isLoading = !this.isLoading;
      //     if(response.flag) {
      //       this.router.navigate(['/dashboard']);
      //     }
      //   }, 1200);
      // });
    }
  }

  // Validation form before api call
  checkValidation = () => {
    this.validation = {
      ...this.validation,
      name: !(this.loginDetails.email.trim().length > 0),
      role: !(Object.keys(this.loginDetails.role).length > 0),
      email: !(this.loginDetails.email.trim().length > 0 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.loginDetails.email)
      ),
      password: !(this.loginDetails.password.trim().length >= 6),
    };
    return Object.keys(this.validation).every((k) => !this.validation[k]);
  };

}
