import { createFeatureSelector, createSelector } from '@ngrx/store';
import { inscriptionsFeatureKey, InscriptionsState } from './inscriptions.reducer';

const selectInscriptionsState = createFeatureSelector<InscriptionsState>(inscriptionsFeatureKey);

export const selectInscriptions = createSelector(
  selectInscriptionsState,
  (state: InscriptionsState) => state.inscriptions
);

export const selectIsLoading = createSelector(
  selectInscriptionsState,
  (state: InscriptionsState) => state.isLoading
);

export const selectError = createSelector(
  selectInscriptionsState,
  (state: InscriptionsState) => state.error
);

export const selectInscriptionsByStudent = (studentId: string | number) => createSelector(
  selectInscriptions,
  (inscriptions) => inscriptions.filter(inscription => inscription.studentId.toString() === studentId.toString())
);

export const selectInscriptionsByCourse = (courseId: string | number) => createSelector(
  selectInscriptions,
  (inscriptions) => inscriptions.filter(inscription => inscription.courseId.toString() === courseId.toString())
);