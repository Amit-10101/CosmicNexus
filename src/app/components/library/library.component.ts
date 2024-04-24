import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import librarySectionData, {
	GameCard,
} from '../../constants/librarySectionData';

@Component({
	selector: 'app-library',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './library.component.html',
	styleUrl: './library.component.scss',
})
export class LibraryComponent {
	librarySectionData: GameCard[] = librarySectionData;
}
