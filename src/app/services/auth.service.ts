import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private router: Router) {
		if (!localStorage.getItem('temp')) {
			localStorage.setItem('temp', '');
		}

		// Check if token exists in localStorage when service is instantiated
		const token = localStorage.getItem('token');
		this._isLoggedIn.next(!!token);

		// if (this._isLoggedIn.value) {
		// 	this.router.navigate(['/']);
		// }
	}

	private _isLoggedIn = new BehaviorSubject<boolean>(false);
	// private _user = {
	// 	username: '',
	// 	fname: '',
	// 	lname: '',
	// 	email: '',
	// };

	get isLoggedIn(): Observable<boolean> {
		return this._isLoggedIn.asObservable();
	}

	login(email: string, password: string): void {
		// Store token in localStorage when user logs in
		const prev = localStorage.getItem('temp');
		const prevArray = prev ? JSON.parse(prev) : [];

		const token = btoa(email + password);

		if (prevArray.includes(token)) {
			localStorage.setItem('token', token);
			this._isLoggedIn.next(true);
		} else {
			alert(
				'\nACCESS DENIED\n\n' +
					'\u2022 Invalid email or password.\n' +
					'\u2022 Register if you are a new player.'
			);
		}
	}

	logout(): void {
		// Remove token from localStorage when user logs out
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		this._isLoggedIn.next(false);
	}

	// Register
	register(
		fname: string,
		lname: string,
		username: string,
		email: string,
		password: string
	): void {
		// Store token in localStorage when user logs in
		const prev = localStorage.getItem('temp');
		const prevArray = prev ? JSON.parse(prev) : [];

		const token = btoa(email + password);

		if (prevArray.includes(token)) {
			alert('PlayerID already exists. Try logging in.');
			return;
		}

		localStorage.setItem('temp', JSON.stringify([...prevArray, token]));
		localStorage.setItem('token', token);
		localStorage.setItem('username', username);
		this._isLoggedIn.next(true);
	}
}
