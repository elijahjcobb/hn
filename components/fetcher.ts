import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface HackerPost {
	by: string;
	descendants: number;
	id: number;
	kids: number[];
	score: number;
	time: number;
	title: string;
	type: 'story' | 'comment' | 'job';
	url?: string;
}

export type HackerPosts = number[];

export function useFetchPost(id: number) {
	return useSWR<HackerPost>(
		`https://hacker-news.firebaseio.com/v0/item/${id}.json`,
		fetcher
	);
}

export function useFetchPosts() {
	return useSWR<HackerPosts>(
		`https://hacker-news.firebaseio.com/v0/topstories.json`,
		fetcher
	);
}