import { createFeature, createReducer, on } from '@ngrx/store';
import { Student } from '../../../../core/services/students/model/Student';
import { StudentsActions } from './students.actions';

export const studentsFeatureKey = 'students';

export interface StudentsState {
  students: Student[];
  isLoading: boolean;
  error: any;
}

export const initialState: StudentsState = {
  students: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(StudentsActions.loadStudents, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(StudentsActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    isLoading: false
  })),
  on(StudentsActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(StudentsActions.createStudent, (state) => ({
    ...state,
    isLoading: true
  })),
  on(StudentsActions.createStudentSuccess, (state, { student }) => ({
    ...state,
    students: [...state.students, student],
    isLoading: false
  })),
  on(StudentsActions.createStudentFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(StudentsActions.deleteStudent, (state) => ({
    ...state,
    isLoading: true
  })),
  on(StudentsActions.deleteStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter(student => student.id !== id),
    isLoading: false
  })),
  on(StudentsActions.deleteStudentFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export const studentsFeature = createFeature({
  name: studentsFeatureKey,
  reducer,
});