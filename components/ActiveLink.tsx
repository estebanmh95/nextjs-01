import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/router";
import styles from "./styles/Navbar.module.scss";

interface Props {
	href: string;
	children?: React.ReactNode | undefined;
}

const ActiveLink: FC<Props> = ({ href, children }) => {
	const router = useRouter();
	console.log(router.pathname);
	return (
		<Link href={href}>
			<a
				className={
					href === router.pathname ? styles["nav-container__is-active"] : ""
				}
			>
				{children}
			</a>
		</Link>
	);
};

export default ActiveLink;
