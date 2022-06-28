import styles from "./index.module.css";
import { FaHackerNews, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export function NavBar() {
	return <nav className={styles.container}>
		<div>
			<FaHackerNews className={styles.icon} />
			<h1>Hacker News</h1>
		</div>
		<Link href='https://elijahcobb.com' passHref>
			<a target='_blank'>
				<FaExternalLinkAlt className={styles.link} />
			</a>
		</Link>
	</nav>
}