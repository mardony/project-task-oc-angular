import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Inscription } from '../../../../core/services/inscriptions/model/Inscription';
import { selectInscriptions, selectIsLoading } from '../store/inscriptions.selectors';
import { InscriptionsActions } from '../store/inscriptions.actions';
import { RootState } from '../../../../core/store';
import { InscriptionsService } from '../../../../core/services/inscriptions/inscriptions';

@Component({
  selector: 'app-inscription-table',
  templateUrl: './inscription-table.html',
  styleUrl: './inscription-table.css',
  standalone: false
})
export class InscriptionTable implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'studentName', 'courseTitle', 'inscriptionDate', 'userName', 'actions'];
  dataSource = new MatTableDataSource<Inscription>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  inscriptions$: Observable<Inscription[]>;
  isLoading$: Observable<boolean>;
  
  constructor(
    private store: Store<RootState>,
    private inscriptionsService: InscriptionsService
  ) {
    this.inscriptions$ = this.store.select(selectInscriptions);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
  
  ngOnInit() {
    this.store.dispatch(InscriptionsActions.loadInscriptions());
    this.inscriptions$.subscribe({
      next: (inscriptions) => {
        this.dataSource.data = inscriptions;
      }
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  onDeleteInscription(id: number | string) {
    if (confirm('¿Está seguro de eliminar esta inscripción?')) {
      this.store.dispatch(InscriptionsActions.deleteInscription({ id }));
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  formatDate(date: Date | string): string {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}