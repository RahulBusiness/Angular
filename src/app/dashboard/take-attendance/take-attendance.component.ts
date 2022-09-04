import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

interface TakeAttendance {
  id: number;
  name: string
  code: number;
}

const ELEMENT_DATA: TakeAttendance[] = [
  { id: 1, name: "Rahul Ghosh", code: 1 },
  { id: 2, name: "Rahul Ghosh", code: 1 },
  { id: 3, name: "Rahul Ghosh", code: 1 },
  { id: 4, name: "Rahul Ghosh", code: 1 },
  { id: 5, name: "Rahul Ghosh", code: 1 },
  { id: 6, name: "Rahul Ghosh", code: 1 },
];
@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', "name", "code"];

  takeAttendanceForm!: FormGroup;
  types = ["Lab", "Theory"];
  semesters = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  programmeNames = ["BCA", "BTech"];

  dataSource = new MatTableDataSource<TakeAttendance>(ELEMENT_DATA);
  selection = new SelectionModel<TakeAttendance>(true, []);

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initializaTakeAttendanceForm();
  }

  initializaTakeAttendanceForm(): any {
    this.takeAttendanceForm = this.formBuilder.group({
      programmeName: ['BCA', Validators.required],
      semester: ['', Validators.required],
      subject: ['', Validators.required],
      type: ['Theory', Validators.required],
      date: ['date', Validators.required],
    });
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TakeAttendance): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
