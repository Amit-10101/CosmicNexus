import { Component } from '@angular/core';
import popularSectionData, {
	PopularSectionData,
} from '../../constants/popularSectionData';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-popular',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './popular.component.html',
	styleUrl: './popular.component.scss',
})
export class PopularComponent {
	popularSectionData: PopularSectionData = popularSectionData;
}
