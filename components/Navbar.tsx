import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "./styles/Navbar.module.scss";

interface MenuItem {
	text: string;
	href: string;
}
const menuItems: MenuItem[] = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "About",
		href: "/about",
	},
	{
		text: "Contact",
		href: "/contact",
	},
	{
		text: "Pricing",
		href: "/pricing",
	},
];
const Navbar = () => {
	return (
		<nav className={styles["nav-container"]}>
			{menuItems.map(({ text, href }: MenuItem) => {
				return (
					<ActiveLink key={href} href={href}>
						{text}
					</ActiveLink>
				);
			})}
		</nav>
	);
};

export default Navbar;
