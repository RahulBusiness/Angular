import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeacherDialogComponent } from '../../shared/create-teacher-dialog/dialog.component';

interface Teacher {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  adminId: number;
  status: boolean;
  createdOn: string;
  updatedOn: string;
}

const ELEMENT_DATA: Teacher[] = [
  { id: 1, name: 'Rahul Ghosh', email: "rahul.ghosh@gmail.com", password: "1234", role: "ADMIN", adminId: 1, status: true, createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 2, name: 'Rahul Ghosh', email: "rahul.ghosh@gmail.com", password: "1234", role: "ADMIN", adminId: 1, status: true, createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 3, name: 'Rahul Ghosh', email: "rahul.ghosh@gmail.com", password: "1234", role: "ADMIN", adminId: 1, status: true, createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 4, name: 'Rahul Ghosh', email: "rahul.ghosh@gmail.com", password: "1234", role: "ADMIN", adminId: 1, status: true, createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 5, name: 'Rahul Ghosh', email: "rahul.ghosh@gmail.com", password: "1234", role: "ADMIN", adminId: 1, status: true, createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 6, name: 'Rahul Ghosh', email: "rahul.ghosh@gmail.com", password: "1234", role: "ADMIN", adminId: 1, status: true, createdOn: "22-02-2022", updatedOn: "22-08-2022" },
];

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'createdOn', "actions"];
  dataSource = ELEMENT_DATA;
  createTeacherFormValue: any;

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeacherDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createTeacherFormValue = result;
      console.log(this.createTeacherFormValue, "Value")
    });
  }

  editTeacherDataDialog(id: any): any {
    const dialogRef = this.dialog.open(TeacherDialogComponent, {
      width: '750px',
      data: ELEMENT_DATA.filter((element: any) => element.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "Value")
    });
  }
}
