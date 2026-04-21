import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { NotFoundComponent } from './paginas/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];
