interface Event {
	title: string;
	date: string;
	description: string;
	externalUrl: string;
}

interface Game {
	title: string;
	date: string;
	avatar: string;
}

export interface UpcomingSectionData {
	events: Event[];
	games: Game[];
}

const upcomingSectionData: UpcomingSectionData = {
	events: [
		{
			title: 'Cosmic Nexus Launch',
			date: '2024-04-25',
			description:
				'The Cosmic Nexus is a new, innovative gaming platform that will revolutionize the way we play games. This platform will bring together gamers from all over the world to play together in a virtual universe, where they can explore, create, and compete in a variety of games and activities. Join us for the launch event!',
			externalUrl: '#',
		},
	],
	games: [
		{
			title: 'Black Myth: Wukong',
			date: '08/20/2024',
			avatar: 'Black Myth - Wukong.png',
		},
		{
			title: 'Frostpunk 2',
			date: '07/25/2024',
			avatar: 'Frostpunk 2.jpeg',
		},
		{
			title: 'Wuthering Waves',
			date: '2024',
			avatar: 'Wuthering Waves.jpg',
		},
		{
			title: 'Grand Theft Auto VI',
			date: '2025',
			avatar: 'GTA VI.png',
		},
		{
			title: 'Marvel Rivals',
			date: 'Soon',
			avatar: 'Marvel Rivals.png',
		},
	],
};

export default upcomingSectionData;
