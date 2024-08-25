import { fetchPosts } from "../components/fetcher";
import { NavBar } from "../components/nav";
import { Row } from "../components/row";
import styles from "./index.module.css";

export const revalidate = 60;

export default async function Page(): Promise<JSX.Element> {

	const posts = await fetchPosts();

	return <div className={styles.page}>
		<NavBar />
		{posts && <div className={styles.list}>
			{posts.map((row, i) => <div key={row}>
				<Row id={row} />
				{i < posts.length - 1 && <div className={styles.sep} />}
			</div>)}
		</div>}
	</div>
}