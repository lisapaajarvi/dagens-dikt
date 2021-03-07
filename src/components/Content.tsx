import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import PoemView from './PoemView';
import backgroundClassic from '../assets/background-classic.jpg';
import backgroundSpace from '../assets/background-space.jpg';
import Marsvin from './Marsvin';
export interface Poem {
    content: string
    poet: {
        name: string
        url: string
    }
    title: string
    url: string
}
interface State {
    poems: Poem[];

}

interface Props {
    isSpaceTheme: boolean;
    poems: [];
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
        
        </div>
    )
    
}


export default Content;