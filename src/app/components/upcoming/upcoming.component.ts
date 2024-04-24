import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import upcomingSectionData, {
	UpcomingSectionData,
} from '../../constants/upcomingSectionData';

@Component({
	selector: 'app-upcoming',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './upcoming.component.html',
	styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent {
	upcomingSectionData: UpcomingSectionData = upcomingSectionData;
}
