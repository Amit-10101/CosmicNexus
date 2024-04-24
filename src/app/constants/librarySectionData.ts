export interface GameCard {
	id: number;
	title: string;
	image: string;
	price: number;
}

const librarySectionData: GameCard[] = [
	{
		id: 1,
		title: 'Marvels Spider Man Remastered',
		image: 'Marvels Spider Man Remastered.jpeg',
		price: 3999,
	},
	{
		id: 2,
		title: 'Cyberpunk 2077',
		image: 'Cyberpunk.jpeg',
		price: 3199,
	},
	{
		id: 3,
		title: 'Honkai Star Rail',
		image: 'Honkai Star Rail.jpeg',
		price: 0,
	},
	{
		id: 4,
		title: 'League of Legends',
		image: 'League of Legends.jpeg',
		price: 0,
	},
	{
		id: 5,
		title: 'PUBG Battlegrounds',
		image: 'PUBG Battlegrounds.jpg',
		price: 0,
	},
	{
		id: 6,
		title: 'Ghostrunner',
		image: 'Ghostrunner.jpg',
		price: 2099,
	},
	{
		id: 7,
		title: 'Red Dead Redemption 2',
		image: 'Red Dead Redemption II.jpg',
		price: 3199,
	},
	{
		id: 8,
		title: 'Genshin Impact',
		image: 'Genshin Impact.jpeg',
		price: 0,
	},
	{
		id: 9,
		title: 'Valorant',
		image: 'Valorant.jpeg',
		price: 0,
	},
	{
		id: 10,
		title: 'EA Sports FC 24',
		image: 'EA SPORTS FC 24.jpeg',
		price: 3499,
	},
	{
		id: 11,
		title: 'Hogwarts Legacy',
		image: 'Hogwarts Legacy.jpeg',
		price: 3999,
	},
	{
		id: 12,
		title: 'Shadow of the Tomb Raider',
		image: 'Shadow of the Tomb Raider - Definitive Edition.jpeg',
		price: 2199,
	},
];

export default librarySectionData;
