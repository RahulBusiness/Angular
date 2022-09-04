import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  createCourseForm!: FormGroup;
  types = ["Lab", "Theory"];
  semesters = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  programmeNames = ["BCA", "BTech"];

  constructor(
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initializeCreateCourseForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeCreateCourseForm(): any {
    this.createCourseForm = this.formBuilder.group({
      name: [this.data ? this.data.name : '', Validators.required],
      code: [this.data ? this.data.code : '', Validators.required],
      semester: [this.data ? this.data.semester : 'I', Validators.required],
      type: [this.data ? this.data.type : 'Theory', Validators.required],
      programmeName: [this.data ? this.data.programmeName : 'BCA', Validators.required],
    })
  }

  isDataPresent(): boolean {
    return this.data ? true : false;
  }
}
