import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inscriptions } from './inscriptions';
import { InscriptionTable } from './inscription-table/inscription-table';
import { InscriptionForm } from './inscription-form/inscription-form';

const routes: Routes = [
  {
    path: '',
    component: Inscriptions,
    children: [
      {
        path: '',
        component: InscriptionTable,
      },
      {
        path: 'create',
        component: InscriptionForm,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionsRoutingModule {}