import React from 'react';
import { Route, Switch } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Home, Pokedex, Pokemon } from './components/index';
import muiTheme from './theme/muiTheme';

// TODO : Install Redux and add reducer, state store, and history 
// TODO : Finish implementing the Home page and proper routing that includes genId
export default function App() {
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Switch>
                <Route exact path='/' render={Home} />
                <Route exact path='/pokedex' render={(props) => <Pokedex {...props} />} />
                <Route exact path='/pokedex/:pokemonId' render={(props) => <Pokemon {...props} />} />
            </Switch>
        </ThemeProvider>
    );
}