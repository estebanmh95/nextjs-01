import React from "react";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

const Contact = (): JSX.Element => {
	return (
		<MainLayout>
			Este es el contact page
			<h1 className="title">
				<Link href="/">Ir a home</Link>
			</h1>
		</MainLayout>
	);
};

export default Contact;
