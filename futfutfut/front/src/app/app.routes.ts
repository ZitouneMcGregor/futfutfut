import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },

    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
