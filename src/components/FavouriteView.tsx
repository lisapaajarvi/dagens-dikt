import React, { CSSProperties } from 'react';
import { Poem } from './Main';
import Sectionitem from './Sectionitem';
import ErrorBoundary from '../ErrorBoundary';

interface Props {
    poems: Poem[];
}

function FavouriteView(props: Props) {
    return (
        <div style={ viewStyle }>
            <ErrorBoundary>
                {props.poems.map(poem => <Sectionitem poem={poem} key={poem.title}/>)}
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