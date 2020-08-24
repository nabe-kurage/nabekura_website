import "../style/destyle.scss";
import "../style/global.scss";

import Header from "../components/header";
import Footer from "../components/footer";


export default function MyApp({ Component, pageProps }) {
	return <>
		<head>
			<title>nabekura</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css2?family=Righteous&family=Tomorrow:wght@500&display=swap"
				rel="stylesheet"
			/>
		</head>
		<Header />
		<main>
			<Component {...pageProps} />
		</main>
		<Footer />
	</>;
}
