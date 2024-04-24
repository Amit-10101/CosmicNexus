interface GameDownload {
	id: number;
	title: string;
	image: string;
	installed: boolean;
	totalSize?: string;
	downloadedSize?: string;
	progress?: number;
}

export interface DownloadSectionData {
	inProgress: GameDownload[];
	installed: GameDownload[];
}

const downloadSectionData: DownloadSectionData = {
	inProgress: [
		{
			id: 1,
			title: 'Genshin Impact',
			image: 'Genshin Impact.jpeg',
			installed: false,
			totalSize: '85.0 GB',
			downloadedSize: '60.9 GB',
			progress: 72,
		},
	],
	installed: [
		{
			id: 2,
			title: 'Honkai Star Rail',
			image: 'Honkai Star Rail.jpeg',
			installed: true,
		},
		{
			id: 3,
			title: 'League of Legends',
			image: 'League of Legends.jpeg',
			installed: true,
		},
		{
			id: 4,
			title: 'Cyberpunk 2077',
			image: 'Cyberpunk.jpeg',
			installed: true,
		},
	],
};

export default downloadSectionData;
