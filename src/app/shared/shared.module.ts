import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDialogComponent } from './create-teacher-dialog/dialog.component';
import { StudentDialogComponent } from './create-student-dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { ProgrammeDialogComponent } from './create-programme-dialog/dialog.component';
import { CourseDialogComponent } from './create-course-dialog/dialog.component';
import { AssignTeacherDialogComponent } from './assign-teacher-dialog/dialog.component';

@NgModule({
  declarations: [
    TeacherDialogComponent,
    StudentDialogComponent,
    HeaderComponent,
    ProgrammeDialogComponent,
    CourseDialogComponent,
    AssignTeacherDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentDialogComponent,
    TeacherDialogComponent,
    HeaderComponent,
    ProgrammeDialogComponent,
    CourseDialogComponent,
    AssignTeacherDialogComponent
  ]
})
export class SharedModule { }
