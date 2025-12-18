import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { Student } from './model/Student';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsUrl = `${API_URL}/students`;
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadStudents();
  }

  loadStudents() {
    this.http.get<Student[]>(this.studentsUrl).subscribe(students => {
      this.studentsSubject.next(students);
    });
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(id: number | string): Observable<Student> {
    return this.http.get<Student>(`${this.studentsUrl}/${id}`);
  }

  createStudent(student: Omit<Student, 'id'>): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, {
      ...student,
      createdAt: new Date().toISOString()
    });
  }

  updateStudent(id: number | string, student: Partial<Student>): Observable<Student> {
    return this.http.put<Student>(`${this.studentsUrl}/${id}`, student);
  }

  deleteStudent(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.studentsUrl}/${id}`);
  }

  getStudentsForEffect(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }
}