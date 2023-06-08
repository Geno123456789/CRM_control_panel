import React, { useEffect, useState } from "react";
import { URL, TOKEN, checkResponse } from '../../utils/api';
import { TData } from "../../utils/types";
import { SearchButton } from "../../components/Icon";
import styles from "./AddressPage.module.css";

export const AddressPage = () => {

	const [data, setData] = useState<Array<TData>>();
	const [isEditMode, setIsEditMode] = useState<boolean>(true);
	const [address, setAddress] = useState<string>('');

	const getData = (address: string | undefined) => {
		return fetch(URL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + `${TOKEN}`,
			},
			body: JSON.stringify({ query: address })
		})
			.then(checkResponse)
			.then(data => setData(data.suggestions))
			.catch(error => console.log("error", error));
	};

	useEffect(() => {
		getData(address);
	}, [isEditMode]);


	const onSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		getData(address);
		setIsEditMode(true);
	};


	return (
		<div className={styles.container}>
			<h1 className={styles.headerH1}>Поиск адресов</h1>
			<h3 className={styles.headerH3}>Введите интересующий вас адрес</h3>
			<form className={styles.form} onSubmit={onSubmit}>
				<input
					type='text'
					name="input"
					className={styles.input}
					placeholder='Введите адрес'
					value={address}
					minLength={3}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<button className={styles.button} type="submit">
					<span className={styles.icon}>
						<SearchButton />
					</span>
					<span className={styles.buttonText}>Поиск</span>
				</button>
			</form>
			
			{data?.length === 0 && address.length > 0 && !isEditMode &&
				<p className={styles.dataEmpty}>Ничего не найдено. Попробуйте еще раз.</p>
			}

			{!!data?.length && isEditMode ? (
				<div className={styles.address}>
					<p className={styles.paragraphTitle}>Адреса</p>
					{data.map((el, index) =>
						<p className={styles.paragraph} key={index}>{el.value}</p>)}
				</div>
			) : null
			}

		</div>
	)
}
