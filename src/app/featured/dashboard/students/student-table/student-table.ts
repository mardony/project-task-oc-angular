import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student, StudentProfile } from '../../../../core/services/students/model/Student';
import { RootState } from '../../../../core/store';
import { StudentsService } from '../../../../core/services/students/students';
import { selectIsLoading, selectStudents } from '../store/students.selectors';
import { StudentsActions } from '../store/students.actions';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.html',
  styleUrl: './student-table.css',
  standalone: false
})
export class StudentTable implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'profile', 'actions'];
  dataSource = new MatTableDataSource<Student>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  students$: Observable<Student[]>;
  isLoading$: Observable<boolean>;
  
  profileLabels: { [key in StudentProfile]: string } = {
    [StudentProfile.DEVELOPER]: 'Desarrollador',
    [StudentProfile.IT]: 'IT',
    [StudentProfile.END_USER]: 'Usuario Final',
    [StudentProfile.OTHER]: 'Otro'
  };

  constructor(
    private store: Store<RootState>,
    private studentsService: StudentsService
  ) {
    this.students$ = this.store.select(selectStudents);
    this.students$ = this.store.select(selectStudents);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
  
  ngOnInit() {
    this.store.dispatch(StudentsActions.loadStudents());
    this.students$.subscribe({
      next: (students) => {
        this.dataSource.data = students;
      }
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  onDeleteStudent(id: number | string) {
    if (confirm('¿Está seguro de eliminar este alumno?')) {
      this.store.dispatch(StudentsActions.deleteStudent({ id }));
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  getProfileLabel(profile: StudentProfile): string {
    return this.profileLabels[profile] || profile;
  }
}