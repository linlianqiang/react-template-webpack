/*
 * @Description: 
 * @Date: 2022-03-14 11:38:22
 * @LastEditTime: 2022-03-25 16:58:46
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '@components/loading';

const { lazy, Suspense } = React;

const Login = React.lazy(() => import(/* webpackChunkName: "login" */'@view/login'));
const Layout = React.lazy(() => import(/* webpackChunkName: "layout" */'@layout/index'));

const App: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/login" exact component={() =><Login />} />
                    <Route path="/" component={() =><Layout />} />
                    <Redirect to="*"/>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default App;