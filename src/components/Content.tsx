import React from 'react';
import { Route} from 'react-router-dom';
import PoemView from './PoemView';
import backgroundClassic from '../assets/background-classic.jpg';
import backgroundSpace from '../assets/background-space.jpg';
import Marsvin from './Marsvin';
import {Poem} from './Main';
import FavouriteView from './FavouriteView';

interface Props {
    isSpaceTheme: boolean;
    poems: Poem[];
    favourites: Poem[];
    updateFavourites: () => void;
}
function Content(props:Props) {
    
    let background = props.isSpaceTheme? backgroundSpace : backgroundClassic;
    
    return (
        <div style={{
            width: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '0 2rem 0 0',
            backgroundImage: `url(${background})` 
            }}>

            <Route exact path="/">
                <PoemView poems={props.poems}/>
            </Route>

            <Route path="/marsvin" component={Marsvin}/>
            <Route path="/favoriter">
                <FavouriteView poems={props.favourites} updateFavourites={props.updateFavourites}/>
            </Route>
            

        
        </div>
    )
    
}


export default Content;