import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule,MatIconModule, MatListModule],
  templateUrl: './custom-sidenav.html',
  styleUrls: ['./custom-sidenav.scss'],
})

export class CustomSidenav {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      icon: 'people',
      label: 'Users',
      route: '/users'
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '/settings'
    }
  ]);
}