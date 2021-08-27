import React from 'react';
import {Route, Switch} from "react-router";
import {routes} from "./routes";

const Routes = () => {
    return (
        <Switch>
            {routes.map(r => {
                const {id, ...props} = r;
                return(
                    <Route key={id} {...props}/>
                )
            })}
        </Switch>);
};

export default Routes;