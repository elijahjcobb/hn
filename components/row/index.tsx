import styles from "./index.module.css";
import { FaCalendar, FaComment, FaTrophy } from "react-icons/fa";
import moment from "moment";
import Link from "next/link";
import cn from "classnames";
import { fetchPost } from "../fetcher";

export async function Row({ id }: { id: number }): Promise<JSX.Element> {

	const post = await fetchPost(id);

	const { title, time, score, descendants, url } = post;

	const date = new Date(time * 1000);
	const dateString = moment(date).fromNow();

	return <Link href={url ?? "https://news.ycombinator.com"} target="_blank" className={styles.link}>
		<div className={styles.post}>
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
	</Link>
}