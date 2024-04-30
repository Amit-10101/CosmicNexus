interface Player {
	id: number;
	name: string;
	avatar: string;
	status?: 'online' | 'offline';
}

export interface PlayersSectionData {
	friends: Player[];
	friendRequests: Player[];
	onlinePlayers: Player[];
}

const playersSectionData: PlayersSectionData = {
	friends: [
		{
			id: 1,
			name: 'John Doe',
			status: 'online',
			// avatar: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg',
			avatar: 'assets/users/1.jpg',
		},
		{
			id: 2,
			name: 'Jane Doe',
			status: 'offline',
			// avatar: 'https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-woman-t-shirt-white-background-131683043.jpg',
			avatar: 'assets/users/3.jpg',
		},
	],
	friendRequests: [
		{
			id: 6,
			name: 'Peter Parker',
			// avatar: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg',
			avatar: 'assets/users/8.jpg',
		},
		{
			id: 7,
			name: 'Tony Stark',
			// avatar: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg',
			avatar: 'assets/users/9.jpg',
		},
		{
			id: 8,
			name: 'Bruce Wayne',
			// avatar: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg',
			avatar: 'assets/users/6.jpg',
		},
		{
			id: 9,
			name: 'Natasha Romanoff',
			// avatar: 'https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-woman-t-shirt-white-background-131683043.jpg',
			avatar: 'assets/users/5.jpg',
		},
	],
	onlinePlayers: [
		{
			id: 3,
			name: 'James Doe',
			status: 'online',
			// avatar: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg',
			avatar: 'assets/users/7.jpg',
		},
		{
			id: 4,
			name: 'Alexa',
			status: 'online',
			// avatar: 'https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-woman-t-shirt-white-background-131683043.jpg',
			avatar: 'assets/users/2.jpg',
		},
		{
			id: 5,
			name: 'Bella',
			status: 'online',
			// avatar: 'https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-woman-t-shirt-white-background-131683043.jpg',
			avatar: 'assets/users/4.jpg',
		},
	],
};

export default playersSectionData;
