import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PlayersComponent } from './components/players/players.component';
import { PopularComponent } from './components/popular/popular.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'library',
		component: LibraryComponent,
	},
	{
		path: 'downloads',
		component: DownloadsComponent,
	},
	{
		path: 'upcoming',
		component: UpcomingComponent,
	},
	{
		path: 'popular',
		component: PopularComponent,
	},
	{
		path: 'players',
		component: PlayersComponent,
	},
	{
		path: 'settings',
		component: SettingsComponent,
	},
];
