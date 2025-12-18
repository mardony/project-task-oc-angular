import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsRoutingModule } from './inscriptions-routing-module';
import { Inscriptions } from './inscriptions';
import { InscriptionTable } from './inscription-table/inscription-table';
import { InscriptionForm } from './inscription-form/inscription-form';
import { SharedModule } from '../../../shared/shared-module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { inscriptionsFeature } from './store/inscriptions.reducer';
import { InscriptionsEffects } from './store/inscriptions.effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    Inscriptions,
    InscriptionTable,
    InscriptionForm
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects]),
    MatProgressSpinnerModule
  ]
})
export class InscriptionsModule { }