import React,{Fragment, createContext} from 'react';
import {Navbar} from './components';
import {
	Routes, Route, Link, Outlet, Router
  } from "react-router-dom";

  import {AuthGuard} from './guards/AuthGuard';
import {VehiclesPage, OwnersPage, LoginPage, RegisterPage, NotFoundPage} from './pages'
import {isLoggedIn} from './services'
import Layout from './pages/Layout';

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
					<AuthGuard isLoggedIn={isLoggedIn()}>
						<Layout> <VehiclesPage/> </Layout>
					</AuthGuard>
				}/>
				<Route path="/owners" exact 
				 element={
					<AuthGuard isLoggedIn={isLoggedIn()}>
						<Layout> <OwnersPage/> </Layout>
					</AuthGuard>
				}/>
			</Routes>
		</React.Fragment>	
	);
}



export default App;
