import React from "react";
import Link from "next/link";
import DarkLayouts from "../components/layouts/DarkLayouts";
import MainLayout from "../components/layouts/MainLayout";

export default function About() {
	return (
		<>
			<h1 className="title">
				<Link href="/">Ir a home</Link>
			</h1>
		</>
	);
}

About.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayouts>{page}</DarkLayouts>
		</MainLayout>
	);
};
