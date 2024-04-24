interface CoverGame {
	id: number;
	title: string;
	image: string;
	subtitle: string;
	bodyText: string;
	buttonUrl: string;
}

interface Game {
	id: number;
	title: string;
	image: string;
	prevPrice?: number;
	price?: number;
	downloads?: string;
}

export interface HomeSectionData {
	coverGame: CoverGame;
	categoryGames: Game[];
	mostPlayedGames: Game[];
	megaSaleList: Game[];
	availableGameSection: Game;
}

const homeSectionData: HomeSectionData = {
	coverGame: {
		id: 1,
		title: 'Fortnite',
		image: 'Fortnite.jpg',
		subtitle: 'Season 3',
		bodyText:
			"Play the new Fortnite Season: Vibin', where the Island is one giant party! Drop into Season 3 and spread the good vibes!",
		buttonUrl: '',
	},
	categoryGames: [
		{
			id: 2,
			title: 'Far Cry 6',
			image: 'Far Cry 6.png',
			price: 2999,
		},
		{
			id: 3,
			title: "Assassin's Creed Valhalla",
			image: "Assassin's Creed Valhalla.png",
			price: 2999,
		},
		{
			id: 4,
			title: 'Hogwarts Legacy',
			image: 'Hogwarts Legacy.jpeg',
			price: 3999,
		},
	],
	mostPlayedGames: [
		{
			id: 6,
			title: 'Rocket League',
			price: 0,
			image: 'Rocket League.jpeg',
			downloads: '300M+',
		},
		{
			id: 7,
			title: 'Valorant',
			price: 0,
			image: 'Valorant.jpeg',
			downloads: '250M+',
		},
		{
			id: 5,
			title: 'Genshin Impact',
			price: 0,
			image: 'Genshin Impact.jpeg',
			downloads: '245M+',
		},
	],
	megaSaleList: [
		{
			id: 8,
			title: 'Alan Wake 2',
			image: 'Alan Wake 2.jpeg',
			prevPrice: 3199,
			price: 2799,
		},
		{
			id: 9,
			title: 'Cyberpunk 2077',
			image: 'Cyberpunk.jpeg',
			prevPrice: 3999,
			price: 2199,
		},
		{
			id: 10,
			title: 'Grand Theft Auto V: Premium Edition',
			image: 'Grand Theft Auto V - Premium Edition.jpg',
			prevPrice: 2599,
			price: 2399,
		},
		{
			id: 11,
			title: 'Marvels Spider Man Miles Morales',
			image: 'Marvels Spider Man Miles Morales.jpeg',
			prevPrice: 3499,
			price: 3299,
		},
	],
	availableGameSection: {
		id: 12,
		title: 'Ghostrunner',
		image: 'Ghostrunner.jpg',
	},
};

export default homeSectionData;
