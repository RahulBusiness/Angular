import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-teacher-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class TeacherDialogComponent implements OnInit {

  createTeacherForm!: FormGroup;
  emailMatcher = new TeacherEmailErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<TeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initializeCreateTeacherForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeCreateTeacherForm(): any {
    this.createTeacherForm = this.formBuilder.group({
      name: [this.data ? this.data.name : '', Validators.required],
      email: [this.data ? this.data.email : '', Validators.required],
      role: [this.data ? this.data.role : '', Validators.required]
    })
  }

  isDataPresent(): boolean {
    return this.data ? true : false;
  }
}

export class TeacherEmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
