import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import NotFound from '../notfound/NotFound';
import Cars from './car/Cars';
import Dogs from './dogs/Dogs';
import Recipes from './recipes/Recipes';

function Blog() {
    const {path, url}= useRouteMatch();
    console.log('data route ',path,url);
    return (
        <div className="container">
        <h2 className="my-3">Blog Page</h2>
        <p>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors,
         and powerful display options. 
         If you’re familiar with Bootstrap 3, 
         cards replace our old panels, wells, and thumbnails.
          Similar functionality to those components is available as 
          modifier classes for cards.</p>
          <div className='my-4'>
           <ul>
               <li>
                   <Link to={`${url}/recipes`}>Recipes</Link>
               </li>
               <li>
                   <Link to={`${url}/cars`}>Cars</Link>
               </li>
               <li>
                   <Link to={`${url}/dogs`}>Dogs</Link>
               </li>
           </ul>
          </div>
          <div className='my-4'>
              <Switch>
                  <Route path={`${path}/recipes`} component={Recipes}/>
                  <Route path={`${path}/cars`} component={Cars}/>
                  <Route path={`${path}/dogs`} component={Dogs}/>
                  {/* <Route path='*' component={NotFound}/> */}
              </Switch>
          </div>
      </div>
    )
}

export default Blog
