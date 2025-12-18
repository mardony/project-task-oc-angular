import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student, StudentProfile } from '../../../../core/services/students/model/Student';
import { Inscription } from '../../../../core/services/inscriptions/model/Inscription';
import { selectStudentById } from '../store/students.selectors';
import { selectInscriptionsByStudent } from '../../inscriptions/store/inscriptions.selectors';
import { StudentsActions } from '../store/students.actions';
import { InscriptionsActions } from '../../inscriptions/store/inscriptions.actions';
import { RootState } from '../../../../core/store';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
  standalone: false
})
export class StudentDetail implements OnInit {

  studentId: string | null = null;
  student$: Observable<Student | undefined>;
  inscriptions$: Observable<Inscription[]>;

  profileLabels: { [key in StudentProfile]: string } = {
    [StudentProfile.DEVELOPER]: 'Desarrollador',
    [StudentProfile.IT]: 'IT',
    [StudentProfile.END_USER]: 'Usuario Final',
    [StudentProfile.OTHER]: 'Otro'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<RootState>
  ) {
    // Inicialización correcta (sin valores ficticios)
    this.student$ = new Observable<Student | undefined>();
    this.inscriptions$ = new Observable<Inscription[]>();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.studentId = id;

        this.student$ = this.store.select(selectStudentById(id));
        this.inscriptions$ = this.store.select(selectInscriptionsByStudent(id));

        // Cargar datos si aún no están en el store
        this.store.dispatch(StudentsActions.loadStudents());
        this.store.dispatch(InscriptionsActions.loadInscriptions());
      }
    });
  }

  onEdit(): void {
    if (this.studentId) {
      this.router.navigate(['edit', this.studentId], {
        relativeTo: this.route.parent
      });
    }
  }

  onDelete(): void {
    if (this.studentId && confirm('¿Está seguro de eliminar este alumno?')) {
      this.store.dispatch(
        StudentsActions.deleteStudent({ id: this.studentId })
      );

      this.router.navigate(['../../'], { relativeTo: this.route });
    }
  }

  onBack(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  getProfileLabel(profile: StudentProfile): string {
    return this.profileLabels[profile] || profile;
  }

  formatDate(date?: Date | string): string {
  if (!date) {
    return 'No disponible';
  }

  const parsed = typeof date === 'string' ? new Date(date) : date;

  return parsed.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

}
