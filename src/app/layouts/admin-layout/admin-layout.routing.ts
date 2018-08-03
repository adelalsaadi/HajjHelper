import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { FdrptNewComponent } from '../../fieldreport/fdrptnew/fdrptnew.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'apptnew',      component: FdrptNewComponent },
];
