import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscription } from '../../../../core/services/inscriptions/model/Inscription';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ inscriptions: Inscription[] }>(),
    'Load Inscriptions Failure': props<{ error: any }>(),
    'Create Inscription': props<{ inscription: Omit<Inscription, 'id'> }>(),
    'Create Inscription Success': props<{ inscription: Inscription }>(),
    'Create Inscription Failure': props<{ error: any }>(),
    'Delete Inscription': props<{ id: string | number }>(),
    'Delete Inscription Success': props<{ id: string | number }>(),
    'Delete Inscription Failure': props<{ error: any }>()
  }
});