import React,{Fragment, createContext} from 'react';
import {Navbar} from './components';
import {
	Routes, Route, Link, Outlet, Router
  } from "react-router-dom";

  import {AuthGuard} from './guards/AuthGuard';
import {VehiclesPage, LoginPage, RegisterPage, NotFoundPage} from './pages'
import {isLoggedIn} from './services'

function App() {
	const [loggedIn, setIsLoggedIn] = React.useState(false);
	
	React.useEffect(() => {
		if (isLoggedIn()) {
			setIsLoggedIn(true);
		}
		setIsLoggedIn(false);
	}, [])
	

	return (
		<React.Fragment>
		
			{/* <Navbar/> */}
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/login"  exact element={<LoginPage />}/>
				<Route path="/register"  exact element={<RegisterPage />}/>
				<Route path="/vehicles" exact 
				 element={
					<AuthGuard isLoggedIn={loggedIn}>
						<VehiclesPage />
					</AuthGuard>
					}/>
				<Route path="/owners"  exact element={<VehiclesPage />}/>
				<Route path="/vehicle-owners"  exact element={<VehiclesPage />}/>
			</Routes>
		</React.Fragment>	
	);
}



export default App;
