import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../../shared/create-student-dialog/dialog.component';

interface Student {
  id: number;
  name: string;
  code: number,
  batch: string,
  contactNo: number,
  programmeName: string
  section: string,
  status: boolean;
  createdOn: string;
}

const ELEMENT_DATA: Student[] = [
  { id: 1, name: 'Rahul Ghosh', code: 1, batch: "2022", contactNo: 1234567890, programmeName: "BCA", section: "CSE", status: true, createdOn: "22-02-2022" },
  { id: 2, name: 'Rahul Ghosh', code: 1, batch: "2022", contactNo: 1234567890, programmeName: "BCA", section: "CSE", status: true, createdOn: "22-02-2022" },
  { id: 3, name: 'Rahul Ghosh', code: 1, batch: "2022", contactNo: 1234567890, programmeName: "BCA", section: "CSE", status: true, createdOn: "22-02-2022" },
  { id: 4, name: 'Rahul Ghosh', code: 1, batch: "2022", contactNo: 1234567890, programmeName: "BCA", section: "CSE", status: true, createdOn: "22-02-2022" },
  { id: 5, name: 'Rahul Ghosh', code: 1, batch: "2022", contactNo: 1234567890, programmeName: "BCA", section: "CSE", status: true, createdOn: "22-02-2022" },
  { id: 6, name: 'Rahul Ghosh', code: 1, batch: "2022", contactNo: 1234567890, programmeName: "BCA", section: "CSE", status: true, createdOn: "22-02-2022" },
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'code', 'batch', 'contactNo', 'programmeName', 'section', 'status', "createdOn", "actions"];
  dataSource = ELEMENT_DATA;
  createStudentFormValue: any;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createStudentFormValue = result;
      console.log(this.createStudentFormValue, "Value")
    });
  }

  editTeacherDataDialog(id: any): any {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '750px',
      data: ELEMENT_DATA.filter((element: any) => element.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "Value")
    });
  }
}
