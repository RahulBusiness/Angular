import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { CourseComponent } from './course/course.component';
import { ProgrammeComponent } from './programme/programme.component';
import { StudentComponent } from './student/student.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'teacher',
                component: TeacherComponent,
                pathMatch: 'full'
            },
            {
                path: 'programme',
                component: ProgrammeComponent,
                pathMatch: 'full'
            },
            {
                path: 'course',
                component: CourseComponent,
                pathMatch: 'full'
            },
            {
                path: 'student',
                component: StudentComponent,
                pathMatch: 'full'
            },
            {
                path: 'assign-teacher',
                component: AssignTeacherComponent,
                pathMatch: 'full'
            },
            {
                path: 'take-attendance',
                component: TakeAttendanceComponent,
                pathMatch: 'full'
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
