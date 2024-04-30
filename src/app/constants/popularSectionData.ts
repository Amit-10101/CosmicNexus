interface Game {
	id: number;
	name: string;
	price: number;
	image: string;
	downloads?: string;
}

interface TopPlayer {
	id: number;
	name: string;
	score: string;
	avatar: string;
}

export interface PopularSectionData {
	topSeller: Game[];
	mostPlayed: Game[];
	topPlayers: TopPlayer[];
}

const popularSectionData: PopularSectionData = {
	topSeller: [
		{
			id: 1,
			name: 'Dead by Daylight',
			price: 999,
			image: 'Dead by Daylight.jpeg',
		},
		{
			id: 2,
			name: 'Grand Theft Auto V: Premium Edition',
			price: 2399,
			image: 'Grand Theft Auto V - Premium Edition.jpg',
		},
		{
			id: 3,
			name: 'Hogwarts Legacy',
			price: 3999,
			image: 'Hogwarts Legacy.jpeg',
		},
		{
			id: 4,
			name: 'Alan Wake 2',
			price: 2799,
			image: 'Alan Wake 2.jpeg',
		},
		{
			id: 5,
			name: 'Witchfire',
			price: 1499,
			image: 'Witchfire.jpg',
		},
	],
	mostPlayed: [
		{
			id: 6,
			name: 'Fortnite',
			price: 0,
			image: 'Fortnite.jpeg',
			downloads: '350M',
		},
		{
			id: 7,
			name: 'Rocket League',
			price: 0,
			image: 'Rocket League.jpeg',
			downloads: '300M',
		},
		{
			id: 2,
			name: 'Grand Theft Auto V: Premium Edition',
			price: 2399,
			image: 'Grand Theft Auto V - Premium Edition.jpg',
			downloads: '280M',
		},
		{
			id: 8,
			name: 'Valorant',
			price: 0,
			image: 'Valorant.jpeg',
			downloads: '250M',
		},
		{
			id: 9,
			name: 'Genshin Impact',
			price: 0,
			image: 'Genshin Impact.jpeg',
			downloads: '245M',
		},
	],
	topPlayers: [
		{
			id: 1,
			name: 'Noah',
			score: '10K',
			avatar: 'assets/users/11.jpg',
		},
		{
			id: 2,
			name: 'Emma',
			score: '8K',
			avatar: 'assets/users/10.jpg',
		},
		{
			id: 3,
			name: 'Logan',
			score: '6K',
			avatar: 'assets/users/12.jpg',
		},
		{
			id: 4,
			name: 'Olivia',
			score: '5K',
			avatar: 'assets/users/13.jpg',
		},
		{
			id: 5,
			name: 'Isabella',
			score: '4K',
			avatar: 'assets/users/14.jpg',
		},
	],
};

export default popularSectionData;
