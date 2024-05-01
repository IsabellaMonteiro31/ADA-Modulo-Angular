import { Component, ViewChild, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatDrawer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatIconModule, MatDrawer, MatSidenavModule, MatSidenavContent,],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})

export class NavigationBarComponent {}