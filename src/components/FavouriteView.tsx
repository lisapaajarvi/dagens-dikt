import React, { CSSProperties } from 'react';
import { Poem } from './Main';
import ErrorBoundary from '../ErrorBoundary';
import FavouriteCard from './FavouriteCard';

interface Props {
    poems: Poem[];
    updateFavourites: () => void;
}

function FavouriteView(props: Props) {
    return (
        <div style={ viewStyle }>
            <ErrorBoundary>
                {props.poems.map(poem => <FavouriteCard poem={poem} key={poem.title} updateFavourites= {props.updateFavourites}/>)}
            </ErrorBoundary>
        </div>
    )
}

const viewStyle: CSSProperties = {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
}

export default FavouriteView;