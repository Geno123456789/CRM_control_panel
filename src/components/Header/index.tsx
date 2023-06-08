import React, { useState } from "react";
import { BurgerMenuIcon, Logo, PersonIcon } from "../Icon";
import { BurgerMenu } from "../BurgerMenu";
import styles from "./Header.module.css";

export const Header = () => {

	const [open, setOpen] = useState(false);
	const toggleVisible = () => setOpen(open => !open);

	return (
		<header className={styles.header}>
			<div className={styles.container}>

				<div className={`${styles.item} ${styles.item_left}`}>
					<button type='button' className={styles.burger} onClick={() => toggleVisible()}>
						<BurgerMenuIcon />
					</button>
					<Logo />
					<p className={styles.paragraph}>Wrench CRM</p>
				</div>
				<div className={`${styles.item} ${styles.item_right}`}>
					<PersonIcon />
					<p className={styles.paragraph}>Имя Фамилия</p>
				</div>

				{!open ? null :
					(<BurgerMenu
						isOpen={() => setOpen(true)}
						onClose={() => setOpen(false)}
					/>
					)}

			</div>
		</header>
	);
};