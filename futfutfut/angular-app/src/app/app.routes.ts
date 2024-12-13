import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'ajouter', component: AddPlayerComponent },

    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
