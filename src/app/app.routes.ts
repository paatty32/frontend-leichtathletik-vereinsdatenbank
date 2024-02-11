import { Routes } from '@angular/router';
import { StartpassnummerComponent } from './athlete-search/startpassnummer/startpassnummer.component';
import { NameFormComponent } from './athlete-search/name-form/name-form.component';

export const routes: Routes = [
    {
        path:'startpassnummer',
        component: StartpassnummerComponent

    },

    {
        path:'name',
        component: NameFormComponent
    }
];
