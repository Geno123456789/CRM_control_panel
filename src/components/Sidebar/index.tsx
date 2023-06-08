import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	CalendarIcon, DownArrow, ExitIcon,
	FinanceIcon, MainPageIcon, MapIcon,
	ProfileSetupIcon, SearchIcon,
	SettingsIcon, TableIcon, UpArrow, WidgetsIcon
} from "../Icon";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {

	const [dropdownVisible, setDropdownVisible] = useState(false);
	const toggleVisible = () => {
		setDropdownVisible(dropdownVisible => !dropdownVisible)
	};

	return (
		<nav className={styles.container}>
			<p className={styles.title}>Меню</p>
			<div className={styles.divScroll}>
				<ul className={styles.list}>
					<li>
						<NavLink to='/' className={({ isActive }) => `${isActive ? styles.active : styles.link}`}>
							<MainPageIcon />
							<span>Главная</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/address' className={({ isActive }) => `${isActive ? styles.active : styles.link}`}>
							<SearchIcon />
							<span>Поиск адресов</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/tables' className={({ isActive }) => `${isActive ? styles.active : styles.link}`}>
							<TableIcon />
							<span>Таблицы</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/calendar' className={({ isActive }) => `${isActive ? styles.active : styles.link}`}>
							<CalendarIcon />
							<span>Календарь</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/cards' className={({ isActive }) => `${isActive ? styles.active : styles.link}`}>
							<MapIcon />
							<span>Карты</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/widgets' className={({ isActive }) => `${isActive ? styles.active : styles.link}`}>
							<WidgetsIcon />
							<span>Виджеты</span>
						</NavLink>
					</li>
					<li>
						<div className={styles.settings} onClick={() => toggleVisible()}>
							<div className={styles.settingsItem}>
								<SettingsIcon />
								<button type='button'>Настройки</button>
							</div>
							{dropdownVisible ?
								<UpArrow /> :
								<DownArrow />}
						</div>
						{dropdownVisible ?
							<ul className={styles.listInserted} >
								<li className={styles.dropdownIcon}>
									<ProfileSetupIcon />
									<NavLink to='/profile_settings' className={({ isActive }) => `${isActive ? styles.active : `${styles.link}${styles.link_dropdown}`}`}>
										Настройки
										профиля
									</NavLink>
								</li>
								<li className={styles.dropdownIcon}>
									<FinanceIcon />
									<NavLink to='/profile_settings' className={({ isActive }) => `${isActive ? styles.active : `${styles.link}${styles.link_dropdown}`}`}>
										Управление
										финансами
									</NavLink>
								</li>
							</ul>
							: null
						}
					</li>
					<li className={styles.item}>
						<ExitIcon />
						<button type='submit'>Выход</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};