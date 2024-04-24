import { Component } from '@angular/core';
import playersSectionData, {
	PlayersSectionData,
} from '../../constants/playersSectionData';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-players',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './players.component.html',
	styleUrl: './players.component.scss',
})
export class PlayersComponent {
	playersSectionData: PlayersSectionData = playersSectionData;
}
