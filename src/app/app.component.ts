import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [MainComponent, LoginComponent, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'CosmicNexus';
	isLoggedIn = false;

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.auth();
	}

	auth(): void {
		this.authService.isLoggedIn.subscribe((isLoggedIn) => {
			this.isLoggedIn = isLoggedIn;
			if (!this.isLoggedIn) {
				this.router.navigate(['/login']);
			} else if (this.isLoggedIn && this.router.url === '/login') {
				this.router.navigate(['/']);
			}
		});
	}
}
