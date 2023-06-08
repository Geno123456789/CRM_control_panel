import React from "react";
import { News } from "../../components/News";
import styles from "./MainPage.module.css";

export const MainPage = () => {
	return (
		<div className={styles.container}>
			<News />
		</div>
	);
};
