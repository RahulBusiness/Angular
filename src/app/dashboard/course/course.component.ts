import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from 'src/app/shared/create-course-dialog/dialog.component';

interface Teacher {
  id: number;
  name: string;
  code: number;
  semester: string;
  type: string;
  programmeName: string;
  status: boolean;
  createdOn: string;
}

const ELEMENT_DATA: Teacher[] = [
  { id: 1, name: "CSE", code: 1, semester: "VI", type: "Lab", programmeName: "BCA", status: true, createdOn: "22-02-2022" },
  { id: 2, name: "CSE", code: 1, semester: "VI", type: "Lab", programmeName: "BCA", status: true, createdOn: "22-02-2022" },
  { id: 3, name: "CSE", code: 1, semester: "VI", type: "Lab", programmeName: "BCA", status: true, createdOn: "22-02-2022" },
  { id: 4, name: "CSE", code: 1, semester: "VI", type: "Lab", programmeName: "BCA", status: true, createdOn: "22-02-2022" },
  { id: 5, name: "CSE", code: 1, semester: "VI", type: "Lab", programmeName: "BCA", status: true, createdOn: "22-02-2022" },
  { id: 6, name: "CSE", code: 1, semester: "VI", type: "Lab", programmeName: "BCA", status: true, createdOn: "22-02-2022" },
];

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code', 'semester', 'type', 'programmeName', 'status', 'createdOn', "actions"];
  dataSource = ELEMENT_DATA;
  createCourseFormValue: any;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createCourseFormValue = result;
      console.log(this.createCourseFormValue, "Value")
    });
  }

  editTeacherDataDialog(id: any): any {
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '750px',
      data: ELEMENT_DATA.filter((element: any) => element.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "Value")
    });
  }
}
