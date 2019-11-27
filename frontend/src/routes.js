import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Repository from './pages/Repository';
import Client from './pages/Client';
import Car from './pages/Car';
import Service from './pages/Service';
import Entherprise from './pages/Entherprise';
import SearchEntherprise from './pages/SearchEntherprise';
import SearchSchools from './pages/SearchSchool';
import SearchStudents from './pages/SearchStudents';
import SearchCourses from './pages/SearchCourse';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/entherprises/search" component={SearchEntherprise} />
        <Route path="/schools/search" component={SearchSchools} />
        <Route path="/students/search" component={SearchStudents} />
        <Route path="/courses/search" component={SearchCourses} />
        <Route path="/main" exact component={Main} />
        <Route path="/clients" component={Client} />
        <Route path="/cars" component={Car} />
        <Route path="/services" component={Service} />
        <Route path="/entherprises" component={Entherprise} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
