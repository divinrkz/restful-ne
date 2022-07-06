import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export const Tabber = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <React.Fragment>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="mr-2">
                    <Link to="/vehicles"><span href="#" aria-current="page" className={"inline-block p-4 rounded-t-md hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300  "  + ((location.pathname == '/vehicles') ? 'bg-gray-100 dark:text-blue-100': '')}>Vehicles</span></Link> 
                </li>
                <li className="mr-2">
                    <Link to="/owners"> <span href="#" className={"inline-block p-4 rounded-t-md hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " + ((location.pathname == '/owners') ? 'bg-gray-100 dark:text-blue-100': '') }>Owners</span></Link>
                </li>
                <li className="mr-2">
                  <Link to="/vehicle-owners"> <span href="#" className={"inline-block p-4 rounded-t-md hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 " + + ((location.pathname == '/vehicle-owners') ? 'bg-gray-100 dark:text-blue-100': '')}>Vehicle Owners</span></Link>
                </li>
            </ul>
        </React.Fragment>
    )
}