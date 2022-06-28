import { NavBar } from "../nav";
import { Row } from "../row";
import styles from "./index.module.css";
import { useFetchPosts } from "../fetcher";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const ROW_COUNT = 20;
const ROW_HEIGHT = 150;
const ROW_PRELOAD = ROW_COUNT * 2;

export function HomePage() {

	const { data, error } = useFetchPosts();
	const [size, setSize] = useState(ROW_COUNT);
	const [ref] = useAutoAnimate<HTMLDivElement>();
	const [renderSize] = useDebounce(size, 1000);

	useEffect(() => {
		console.log("RESIZING TO " + size);
	}, [size])

	useEffect(() => {
		const func = (_: Event) => {
			const pos = window.scrollY + window.innerHeight;
			const height = document.documentElement.scrollHeight;
			const offset = height - pos;
			if (offset < ROW_HEIGHT * ROW_PRELOAD) {
				const newHeight = (height - 64) + (ROW_HEIGHT * ROW_PRELOAD);
				const newSize = Math.floor(newHeight / ROW_HEIGHT);
				setSize(newSize);
			}
		}
		document.addEventListener('scroll', func);
		return () => document.removeEventListener('scroll', func);
	}, [])

	if (error) {
		console.error(error);
		return <p>Error!</p>
	}

	const posts = data?.slice(0, renderSize);

	return <div className={styles.page}>
		<NavBar />
		{posts && <div ref={ref} className={styles.list}>
			{posts.map((row, i) => <div key={row}>
				<Row id={row} />
				{i < posts.length - 1 && <div className={styles.sep} />}
			</div>)}
		</div>}
	</div>
}