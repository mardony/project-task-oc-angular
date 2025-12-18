import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../utils/constants';
import { Inscription } from './model/Inscription';
import { BehaviorSubject, Observable, forkJoin, map, tap } from 'rxjs';
import { StudentsService } from '../students/students';
import { CoursesService } from '../courses/courses';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {
  private inscriptionsUrl = `${API_URL}/inscriptions`;
  private inscriptionsSubject = new BehaviorSubject<Inscription[]>([]);
  inscriptions$ = this.inscriptionsSubject.asObservable();

  constructor(
    private http: HttpClient,
    private studentsService: StudentsService,
    private coursesService: CoursesService
  ) {
    this.loadInscriptions();
  }

  private loadInscriptions() {
    this.getInscriptionsWithDetails().subscribe(inscriptions => {
      this.inscriptionsSubject.next(inscriptions);
    });
  }

  getInscriptions(): Observable<Inscription[]> {
    return this.http.get<Inscription[]>(this.inscriptionsUrl);
  }

  getInscriptionsWithDetails(): Observable<Inscription[]> {
    return forkJoin({
      inscriptions: this.getInscriptions(),
      students: this.studentsService.getStudents(),
      courses: this.coursesService.getCoursesForEffect()
    }).pipe(
      map(({ inscriptions, students, courses }) => {
        return inscriptions.map(inscription => ({
          ...inscription,
          studentName: students.find(s => s.id.toString() === inscription.studentId.toString())?.name || 'Desconocido',
          courseTitle: courses.find(c => c.id.toString() === inscription.courseId.toString())?.title || 'Desconocido',
          inscriptionDate: new Date(inscription.inscriptionDate)
        }));
      })
    );
  }

  getInscription(id: number | string): Observable<Inscription> {
    return this.http.get<Inscription>(`${this.inscriptionsUrl}/${id}`);
  }

  createInscription(inscription: Omit<Inscription, 'id'>): Observable<Inscription> {
    return this.http.post<Inscription>(this.inscriptionsUrl, {
      ...inscription,
      inscriptionDate: new Date().toISOString()
    }).pipe(
      tap(() => this.loadInscriptions())
    );
  }

  deleteInscription(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.inscriptionsUrl}/${id}`).pipe(
      tap(() => this.loadInscriptions())
    );
  }

  getInscriptionsByStudent(studentId: number | string): Observable<Inscription[]> {
    return this.getInscriptionsWithDetails().pipe(
      map(inscriptions => inscriptions.filter(i => i.studentId.toString() === studentId.toString()))
    );
  }

  getInscriptionsByCourse(courseId: number | string): Observable<Inscription[]> {
    return this.getInscriptionsWithDetails().pipe(
      map(inscriptions => inscriptions.filter(i => i.courseId.toString() === courseId.toString()))
    );
  }

  getInscriptionsForEffect(): Observable<Inscription[]> {
    return this.getInscriptionsWithDetails();
  }
}