
import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PRICE_BASE = 10000;

export default function ReservationCard({ title }) {

	const [count, setCount] = useState(1);
	const [price, setPrice] = useState(PRICE_BASE);
	const [buy, setBuy] = useState(false)

	useEffect(() => {
		setPrice(count * PRICE_BASE);
	}, [count])


	const add = () => {
		const newCount = count + 1
		setCount(newCount);
	};

	const subtract = () => {
		const newCount = count - 1
		if (newCount >= 1) setCount(newCount);
	};
	
	const checkout = () => {
		toast.success(
			'Success!', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		setBuy(!buy)
	}

	return (
		<div className="container">
			<div className="p-4 border-4 border-sky-500 rounded-md text-white">

				<h3 className="text-2xl mb-2 font-bold">{title}</h3>
				
				<div className="flex flex-row space-x-4 justify-center items-center mb-4">
					<button className="bg-sky-500 w-8 h-8" onClick={subtract}>-</button>
					<span>{count} Personas</span>
					<button className="bg-sky-500 w-8 h-8" onClick={add}>+</button>
				</div>

				<p>Total: <span className="text-lg text-sky-500">$ {price} USD</span></p>

				<button onClick={checkout} className="px-4 py-2 bg-sky-300 mt-4"> {buy ? "Go to cart" : "Buy now!"} </button>

				<ToastContainer />

			</div>
		</div>
	);
}
