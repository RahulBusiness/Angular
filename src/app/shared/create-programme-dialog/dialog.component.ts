import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ProgrammeDialogComponent implements OnInit {

  createProgrammeForm!: FormGroup;
  emailMatcher = new TeacherEmailErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<ProgrammeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initializeCreateProgrammeForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeCreateProgrammeForm(): any {
    this.createProgrammeForm = this.formBuilder.group({
      name: [this.data ? this.data.name : '', Validators.required]
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
