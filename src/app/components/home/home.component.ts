import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import homeSectionData, {
	HomeSectionData,
} from '../../constants/homeSectionData';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	homeSectionData: HomeSectionData = homeSectionData;
}
