import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminBody } from './admin/admin.component';
import { ClientBody } from './client/client.component';


const routes: Routes = 
[
    {
        path: 'client',
        component: ClientBody
    },
    {
        path: 'admin-copiers',
        component: AdminBody
    }
];

@NgModule
({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
