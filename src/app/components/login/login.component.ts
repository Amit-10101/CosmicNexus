import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	constructor(private authService: AuthService) {}

	formMode: 'login' | 'register' = 'login';

	toggleFormMode(): void {
		this.formMode = this.formMode === 'login' ? 'register' : 'login';
	}

	// Login form
	loginForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
	});

	login_on_submit(): void {
		if (this.loginForm.value) {
			const { email, password } = this.loginForm.value;
			if (email && password) {
				this.authService.login(email, password);
			}
		}
	}

	// Register form
	registerForm: FormGroup = new FormGroup({
		fname: new FormControl('', [Validators.required]),
		lname: new FormControl('', [Validators.required]),
		username: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
	});

	register_on_submit(): void {
		if (this.registerForm.value) {
			const { fname, lname, username, email, password } =
				this.registerForm.value;

			if (fname && lname && username && email && password) {
				this.authService.register(
					fname,
					lname,
					username,
					email,
					password
				);
			}
		}
	}
}
