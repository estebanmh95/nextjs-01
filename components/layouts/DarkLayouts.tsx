import React, { FC } from "react";

interface Props {
	children?: React.ReactNode | undefined;
}
const DarkLayouts: FC<Props> = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: "red",
				padding: "10px",
				width: "100%",
				height: "100%",
				borderRadius: "10px",
			}}
		>
			<h3>Dark Layout</h3>
			<div>{children}</div>
		</div>
	);
};

export default DarkLayouts;
