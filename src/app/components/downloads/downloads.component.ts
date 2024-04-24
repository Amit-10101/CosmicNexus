import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import downloadSectionData, {
	DownloadSectionData,
} from '../../constants/downloadSectionData';

@Component({
	selector: 'app-downloads',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './downloads.component.html',
	styleUrl: './downloads.component.scss',
})
export class DownloadsComponent {
	downloadSectionData: DownloadSectionData = downloadSectionData;
}
