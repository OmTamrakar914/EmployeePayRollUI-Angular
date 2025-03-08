import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, EmployeeTableComponent, MatButtonModule, MatIconModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-payroll';
}
