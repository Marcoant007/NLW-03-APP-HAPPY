import React from 'react';

import {BrowserRouter , Switch , Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/Orphanages-map';
import Orphaneges from './pages/Orphanage';
import CreateOrphanege from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';
function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanegesMap} />
        <Route path="/orphanages/create" exact component={CreateOrphanege} />
        <Route path="/orphanages/:id" component={Orphanage} />



        </Switch>
        </BrowserRouter>


    );
}

export default Routes;