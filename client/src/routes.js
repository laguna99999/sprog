import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './components/templates/user/home/home';
import AboutUs from './components/templates/user/aboutus/aboutus';
import ContactUs from './components/templates/user/contactus/contactus';
import Faq from './components/templates/user/faq/faq';
import Login from './components/templates/auth/login';
import Filter from './components/templates/user/filter/filter';
import Result from './components/templates/user/results/result';
import Detail from './components/templates/user/results/detail';

import Landing from './components/templates/business/landing/landing';
import Mission from './components/templates/business/mission/mission';
import Account from './components/templates/business/account/account';
import BusinessHome from './components/templates/business/home/home';
import Submit from './components/templates/business/submit/submit';
import NewEntry from './components/templates/business/entry/new';
import EditEntry from './components/templates/business/entry/edit';
import Preview from './components/templates/business/entry/preview';

export default(
    <React.Fragment>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/user"/>}></Route>
            <Route exact path="/user" component={ Home } />
            <Route path="/user/aboutus" component={ AboutUs } />
            <Route path="/user/faq" component={ Faq } />
            <Route path="/user/contactus" component={ ContactUs } />
            <Route path="/user/login" component={ Login } />
            <Route path="/user/filter" component={ Filter } />
            <Route path="/user/result" component={ Result } />
            <Route path="/user/detail/:id" component={ Detail } />

            <Route exact path="/business" component={ Landing } />
            <Route path="/business/mission" component={ Mission } />
            <Route path="/business/account" component={ Account } />
            <Route path="/business/home" component={ BusinessHome } />
            <Route path="/business/submit" component={ Submit } />
            <Route path="/business/new_entry" component={ NewEntry } />
            <Route path="/business/edit_entry/:id" component={ EditEntry } />
            <Route path="/business/login" component={ Login } />
            <Route path="/business/preview" component={ Preview } />

            <Route component={ Home }/>
        </Switch>
    </React.Fragment>
);