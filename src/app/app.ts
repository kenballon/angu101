import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CustomSidenav } from "./components/custom-sidenav/custom-sidenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard-ui-test');
}
