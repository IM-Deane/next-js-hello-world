import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="Ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Home</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
					repellat, minima rerum ab veritatis laudantium porro impedit possimus
					deleniti sapiente!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
					repellat, minima rerum ab veritatis laudantium porro impedit possimus
					deleniti sapiente!
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
