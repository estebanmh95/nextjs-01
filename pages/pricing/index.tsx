import Link from "next/link";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

const Pricing = (): JSX.Element => {
	return (
		<>
			<h1 className="title">
				<h2>Pricing</h2>
			</h1>
		</>
	);
};

export default Pricing;

Pricing.getLayout = function getLayout(page: JSX.Element) {
	return <MainLayout>{page}</MainLayout>;
};
