import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignTeacherDialogComponent } from 'src/app/shared/assign-teacher-dialog/dialog.component';

interface AssignTeacher {
  id: number;
  name: string;
  programmeName: string;
  subjectId: number;
  subjectCode: number;
  batch: string;
  semester: string;
  status: boolean;
  type: string;
  section: string;
  createdOn: string;
}

const ELEMENT_DATA: AssignTeacher[] = [
  { id: 1, name: "Rahul Ghosh", programmeName: "BCA", subjectId: 1, subjectCode: 1, batch: "2022", semester: "IV", status: false, type: "Theory", section: "CSE", createdOn: "22-02-2022" },
  { id: 2, name: "Rahul Ghosh", programmeName: "BCA", subjectId: 1, subjectCode: 1, batch: "2022", semester: "IV", status: false, type: "Theory", section: "CSE", createdOn: "22-02-2022" },
  { id: 3, name: "Rahul Ghosh", programmeName: "BCA", subjectId: 1, subjectCode: 1, batch: "2022", semester: "IV", status: false, type: "Theory", section: "CSE", createdOn: "22-02-2022" },
  { id: 4, name: "Rahul Ghosh", programmeName: "BCA", subjectId: 1, subjectCode: 1, batch: "2022", semester: "IV", status: false, type: "Theory", section: "CSE", createdOn: "22-02-2022" },
  { id: 5, name: "Rahul Ghosh", programmeName: "BCA", subjectId: 1, subjectCode: 1, batch: "2022", semester: "IV", status: false, type: "Theory", section: "CSE", createdOn: "22-02-2022" },
  { id: 6, name: "Rahul Ghosh", programmeName: "BCA", subjectId: 1, subjectCode: 1, batch: "2022", semester: "IV", status: false, type: "Theory", section: "CSE", createdOn: "22-02-2022" },
];

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.css']
})
export class AssignTeacherComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'programmeName', 'subjectCode', 'batch', "semester", "status", "type", "section", "createdOn", "actions"];
  dataSource = ELEMENT_DATA;
  assignTeacherValue: any;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AssignTeacherDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.assignTeacherValue = result;
      console.log(this.assignTeacherValue, "Value")
    });
  }

  editTeacherDataDialog(id: any): any {
    const dialogRef = this.dialog.open(AssignTeacherDialogComponent, {
      width: '750px',
      data: ELEMENT_DATA.filter((element: any) => element.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "Value")
    });
  }
}
