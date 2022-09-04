import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  createStudentForm!: FormGroup;
  programmeNames = ["BCA", "BTech"];

  constructor(
    public dialogRef: MatDialogRef<StudentDialogComponent>,
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
    this.createStudentForm = this.formBuilder.group({
      name: [this.data ? this.data.name : '', Validators.required],
      code: [this.data ? this.data.code : '', Validators.required],
      batch: [this.data ? this.data.batch : '', Validators.required],
      contactNo: [this.data ? this.data.contactNo : '', Validators.required],
      programmeName: [this.data ? this.data.programmeName : 'BCA', Validators.required],
      section: [this.data ? this.data.section : '', Validators.required]
    })
  }

  isDataPresent(): boolean {
    return this.data ? true : false;
  }
}
