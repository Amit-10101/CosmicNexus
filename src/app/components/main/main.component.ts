import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
	templateUrl: './main.component.html',
	styleUrl: './main.component.scss',
})
export class MainComponent {}
