import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service'
import { DataService } from '../../shared/data.service';

enum Zone {
    all,
    private,
    public,
    hidden
}

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    zone: Zone;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home', icon: 'design_app', zone: Zone.all },
    { path: '/apptnew', title: 'Book new appoitment', icon: 'ui-1_bell-53', zone: Zone.private },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
    constructor(private api: ApiService, private data: DataService) {
        
    }

    ngOnInit() {
    }
    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };


    logOut() {
        this.api.logout();
    };
}
