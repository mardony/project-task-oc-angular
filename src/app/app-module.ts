import { isDevMode, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { rootReducer } from './core/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StudentsEffects } from './featured/dashboard/students/store/students.effects';
import { CoursesEffect } from './featured/dashboard/courses/store/courses.effects';
import { InscriptionsEffects } from './featured/dashboard/inscriptions/store/inscriptions.effects';
import { UsersEffects } from './featured/dashboard/users/store/users.effects';
import { authInterceptor } from './core/interceptor/auth-interceptor';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      StudentsEffects,
      CoursesEffect,
      InscriptionsEffects,
      UsersEffects
    ]),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [App],
})
export class AppModule {}
