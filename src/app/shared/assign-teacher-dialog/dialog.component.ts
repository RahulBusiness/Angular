import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class AssignTeacherDialogComponent implements OnInit {

  assignTeacherForm!: FormGroup;
  types = ["Lab", "Theory"];
  semesters = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  programmeNames = ["BCA", "BTech"];

  constructor(
    public dialogRef: MatDialogRef<AssignTeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initializeAssignTeacherForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeAssignTeacherForm(): any {
    this.assignTeacherForm = this.formBuilder.group({
      name: [this.data ? this.data.name : '', Validators.required],
      programmeName: [this.data ? this.data.programmeName : 'BCA', Validators.required],
      subject: [this.data ? this.data.subjectCode : '', Validators.required],
      batch: [this.data ? this.data.batch : '', Validators.required],
      semester: [this.data ? this.data.semester : 'II', Validators.required],
      type: [this.data ? this.data.type : 'Theory', Validators.required],
      section: [this.data ? this.data.section : '', Validators.required],
    })
  }
}