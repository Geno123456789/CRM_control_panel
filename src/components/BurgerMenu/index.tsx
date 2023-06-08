import React, { FC } from "react";
import { Link, } from "react-router-dom";
import { TBurgerMenu } from "../../utils/types";
import {
	CalendarIcon, FinanceIcon, MainPageIcon,
	MapIcon, ProfileSetupIcon, SearchIcon,
	TableIcon, WidgetsIcon
} from "../Icon";
import styles from "./BurgerMenu.module.css";


export const BurgerMenu: FC<TBurgerMenu> = ({ isOpen, onClose }) => {

	return !isOpen ? null : (

		<nav className={styles.nav}>
			<p className={styles.paragraph}>Меню</p>
			<ul className={styles.list}>

				<li className={styles.item}>
					<MainPageIcon />
					<Link to={{ pathname: '/' }} className={styles.link} onClick={onClose}>
						Главная<br />страница
					</Link>
				</li>

				<li className={styles.item}>
					<SearchIcon />
					<Link to={{ pathname: '/address' }} className={styles.link} onClick={onClose}>
						Поиск<br />адресов
					</Link>
				</li>

				<li className={styles.item}>
					<TableIcon />
					<Link to={''} className={styles.link}>
						Таблицы
					</Link>
				</li>

				<li className={styles.item}>
					<CalendarIcon />
					<Link to={''} className={styles.link}>
						Календарь
					</Link>
				</li>

				<li className={styles.item}>
					<MapIcon />
					<Link to={''} className={styles.link}>
						Карты
					</Link>
				</li>

				<li className={styles.item}>
					<WidgetsIcon />
					<Link to={''} className={styles.link}>
						Виджеты
					</Link>
				</li>

				<li className={styles.item}>
					<ProfileSetupIcon />
					<Link to={''} className={styles.link}>
						Настройки<br />профиля
					</Link>
				</li>

				<li className={styles.item}>
					<FinanceIcon />
					<Link to={''} className={styles.link}>
						Управление<br />финансами
					</Link>
				</li>
			</ul>
		</nav>

	);
};