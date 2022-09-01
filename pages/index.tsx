import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			<h1 className="title">
				Ir a <Link href="/about">About</Link>
			</h1>
		</MainLayout>
	);
}

