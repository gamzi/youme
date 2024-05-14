import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';

import Main from './components/Main';

// const firebaseConfig = {
// 	apiKey: "AIzaSyBibQIR6MePQ5qaOVl-RBIlARj43huHoI0",
// 	authDomain: "youme-d5462.firebaseapp.com",
// 	projectId: "youme-d5462",
// 	storageBucket: "youme-d5462.appspot.com",
// 	messagingSenderId: "899720334834",
// 	appId: "1:899720334834:web:e15d66314dc75f823fef6b",
// 	databaseURL: "https://DATABASE_NAME.firebaseio.com",
// };

// const firebaseapp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseapp);

// const teststore = doc()

// async function getCities(db) {
// 	const citiesCol = collection(db, 'cities');
// 	const citySnapshot = await getDocs(citiesCol);
// 	const cityList = citySnapshot.docs.map(doc => doc.data());
// 	return cityList;
// }

function App() {
	return (
		<div className="app">
			<Main></Main>
		</div>
	);
}

export default App;
