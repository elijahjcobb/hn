import styles from "./index.module.css";
import { FaCalendar, FaComment, FaTrophy } from "react-icons/fa";
import type { ReactElement } from "react";
import moment from "moment";
import Link from "next/link";
import { Ghost } from "./ghost";
import cn from "classnames";
import { useFetchPost } from "../fetcher";

export interface RowProps {
	id: number;
}

export function Row({ id }: RowProps): ReactElement {

	const { data, error } = useFetchPost(id)

	if (error) {
		console.error(error);
		return <p>Error!</p>
	}

	if (!data) return <Ghost />
	const { title, time, score, descendants, url } = data;

	const date = new Date(time * 1000);
	const dateString = moment(date).fromNow();

	return <Link href={url ?? "https://news.ycombinator.com"} passHref>
		<a className={styles.link} target={'_blank'}>
			<div className={cn(styles.post, styles.fade)}>
				<span className={styles.title}>{title}</span>
				<div className={styles.items}>
					<div className={styles.item}>
						<FaTrophy />
						<span>{score}</span>
					</div>
					<div className={styles.item}>
						<FaComment />
						<span>{descendants}</span>
					</div>
					<div className={styles.item}>
						<FaCalendar />
						<span>{dateString}</span>
					</div>
				</div>
			</div>
		</a>
	</Link>
}