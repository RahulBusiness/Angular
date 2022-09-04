import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgrammeDialogComponent } from 'src/app/shared/create-programme-dialog/dialog.component';

interface Programme {
  id: number;
  name: string;
  adminId: number;
  status: string;
  createdOn: string;
  updatedOn: string;
}

const ELEMENT_DATA: Programme[] = [
  { id: 1, name: 'Rahul Ghosh', adminId: 1, status: "WORKING", createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 2, name: 'Rahul Ghosh', adminId: 1, status: "WORKING", createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 3, name: 'Rahul Ghosh', adminId: 1, status: "WORKING", createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 4, name: 'Rahul Ghosh', adminId: 1, status: "WORKING", createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 5, name: 'Rahul Ghosh', adminId: 1, status: "WORKING", createdOn: "22-02-2022", updatedOn: "22-08-2022" },
  { id: 6, name: 'Rahul Ghosh', adminId: 1, status: "WORKING", createdOn: "22-02-2022", updatedOn: "22-08-2022" },
];

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'status', 'createdOn', "actions"];
  dataSource = ELEMENT_DATA;
  createTeacherFormValue: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProgrammeDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createTeacherFormValue = result;
      console.log(this.createTeacherFormValue, " Create Teacher Form Value")
    });
  }

  editTeacherDataDialog(id: any): any {
    const dialogRef = this.dialog.open(ProgrammeDialogComponent, {
      width: '750px',
      data: ELEMENT_DATA.filter((element: any) => element.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "Value")
    });
  }
}
