import React,{Fragment} from 'react';
import {Navbar} from './components';
import {
	Routes, Route, Link, Outlet, Router
  } from "react-router-dom";

  import {AuthGuard} from './guards/AuthGuard';
import {VehiclesPage, CheckingPage, LoginPage, RegisterPage, NotFoundPage} from './pages'

function App() {
	return (
		<React.Fragment>
			{/* <Navbar/> */}
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/login"  exact element={<LoginPage />}/>
				<Route path="/register"  exact element={<RegisterPage />}/>
				<Route path="/vehicles" exact 
				 element={
					<AuthGuard isLoggedIn={false}>
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
