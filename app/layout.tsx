import Head from "next/head"
import '../styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'HN - elijahcobb.com',
	description: "A Hacker News Clone"

}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-capable" content="yes"></meta>
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="initial-scale=1,user-scalable=no,viewport-fit=cover" />
				<meta name="theme-color" content="#ff6600" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon.svg" />
				<link rel="apple-touch-icon" href="/icon-256x256.png"></link>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<script defer src="https://analytics.elijahcobb.app/script.js" data-website-id="e5ef15eb-8b6b-476e-bd22-6dbd4a92e833" />
			</head>
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}