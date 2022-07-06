import React from 'react';
import {Link} from 'react-router-dom';

export const Tabber = () => {
    return (
        <React.Fragment>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="mr-2">
                    <Link to="/vehicles"><span href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-md active dark:bg-gray-800 dark:text-blue-500">Vehicles</span></Link> 
                </li>
                <li class="mr-2">
                    <Link to="/owners"> <span href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Owners</span></Link>
                </li>
                <li class="mr-2">
                  <Link to="/vehicle-owners"> <span href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Vehicle Owners</span></Link>
                </li>
            </ul>
        </React.Fragment>
    )
}