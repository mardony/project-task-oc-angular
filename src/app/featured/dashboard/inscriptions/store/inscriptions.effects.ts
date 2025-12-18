import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { InscriptionsService } from '../../../../core/services/inscriptions/inscriptions';
import { InscriptionsActions } from './inscriptions.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class InscriptionsEffects {
  private actions$ = inject(Actions);
  private inscriptionsService = inject(InscriptionsService);

  loadInscriptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InscriptionsActions.loadInscriptions),
      mergeMap(() =>
        this.inscriptionsService.getInscriptionsForEffect().pipe(
          map(inscriptions => InscriptionsActions.loadInscriptionsSuccess({ inscriptions })),
          catchError(error => of(InscriptionsActions.loadInscriptionsFailure({ error })))
        )
      )
    )
  );

  createInscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InscriptionsActions.createInscription),
      mergeMap(({ inscription }) =>
        this.inscriptionsService.createInscription(inscription).pipe(
          map(newInscription => InscriptionsActions.createInscriptionSuccess({ inscription: newInscription })),
          catchError(error => of(InscriptionsActions.createInscriptionFailure({ error })))
        )
      )
    )
  );

  deleteInscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InscriptionsActions.deleteInscription),
      mergeMap(({ id }) =>
        this.inscriptionsService.deleteInscription(id).pipe(
          map(() => InscriptionsActions.deleteInscriptionSuccess({ id })),
          catchError(error => of(InscriptionsActions.deleteInscriptionFailure({ error })))
        )
      )
    )
  );
}