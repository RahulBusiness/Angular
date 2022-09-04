import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProgrammeComponent } from './programme/programme.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        DashboardComponent,
        TeacherComponent,
        ProgrammeComponent,
        CourseComponent,
        StudentComponent,
        AssignTeacherComponent,
        TakeAttendanceComponent
    ],
    imports: [
        BrowserModule,
        DashboardRoutingModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule
    ],
    providers: [],
})
export class DashboardModule { }
