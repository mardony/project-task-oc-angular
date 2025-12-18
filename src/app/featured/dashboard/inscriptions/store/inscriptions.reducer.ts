import { createFeature, createReducer, on } from '@ngrx/store';
import { Inscription } from '../../../../core/services/inscriptions/model/Inscription';
import { InscriptionsActions } from './inscriptions.actions';

export const inscriptionsFeatureKey = 'inscriptions';

export interface InscriptionsState {
  inscriptions: Inscription[];
  isLoading: boolean;
  error: any;
}

export const initialState: InscriptionsState = {
  inscriptions: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscriptionsActions.loadInscriptions, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(InscriptionsActions.loadInscriptionsSuccess, (state, { inscriptions }) => ({
    ...state,
    inscriptions,
    isLoading: false
  })),
  on(InscriptionsActions.loadInscriptionsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(InscriptionsActions.createInscription, (state) => ({
    ...state,
    isLoading: true
  })),
  on(InscriptionsActions.createInscriptionSuccess, (state, { inscription }) => ({
    ...state,
    inscriptions: [...state.inscriptions, inscription],
    isLoading: false
  })),
  on(InscriptionsActions.createInscriptionFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(InscriptionsActions.deleteInscription, (state) => ({
    ...state,
    isLoading: true
  })),
  on(InscriptionsActions.deleteInscriptionSuccess, (state, { id }) => ({
    ...state,
    inscriptions: state.inscriptions.filter(inscription => inscription.id !== id),
    isLoading: false
  })),
  on(InscriptionsActions.deleteInscriptionFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export const inscriptionsFeature = createFeature({
  name: inscriptionsFeatureKey,
  reducer,
});