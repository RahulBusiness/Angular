import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashBoard_Headers, Dashboard_Routes } from './dashboard.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isDashboard = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isDashboard = this.router.url === Dashboard_Routes.DASHBOARD;
  }

  redirectToPage(type: string): any {
    switch (type) {
      case "Dashboard":
        this.router.navigateByUrl(Dashboard_Routes.DASHBOARD);
        break;
      case "Teacher":
        this.router.navigateByUrl(Dashboard_Routes.TEACHER);
        break;
      case "Programme":
        this.router.navigateByUrl(Dashboard_Routes.PROGRAMME);
        break;
      case "Course":
        this.router.navigateByUrl(Dashboard_Routes.COURSE);
        break;
      case "Student":
        this.router.navigateByUrl(Dashboard_Routes.STUDENT);
        break;
      case "Assign-Teacher":
        this.router.navigateByUrl(Dashboard_Routes.ASSIGN_TEACHER);
        break;
      case "Take-Attendance":
        this.router.navigateByUrl(Dashboard_Routes.TAKE_ATTENDANCE);
        break;
    }
  }

  getHeaderNames(): any {
    switch (this.router.url) {
      case Dashboard_Routes.DASHBOARD:
        return DashBoard_Headers['DASHBOARD'];
      case Dashboard_Routes.TEACHER:
        return DashBoard_Headers['TEACHER'];
      case Dashboard_Routes.PROGRAMME:
        return DashBoard_Headers['PROGRAMME'];
      case Dashboard_Routes.COURSE:
        return DashBoard_Headers['COURSE'];
      case Dashboard_Routes.STUDENT:
        return DashBoard_Headers['STUDENT'];
      case Dashboard_Routes.ASSIGN_TEACHER:
        return DashBoard_Headers['ASSIGN_TEACHER'];
      case Dashboard_Routes.TAKE_ATTENDANCE:
        return DashBoard_Headers['TAKE_ATTENDANCE'];
    }
  }


}
