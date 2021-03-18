import React, { Component, CSSProperties } from 'react';
import Side from './Side';
import Content from './Content';

interface Props {}

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
    isSpaceTheme: boolean;
    poems: Poem[];
    favourites: Poem[];

}
class Main extends Component <Props, State> {
    state: State = {
        isSpaceTheme: false,
        poems: [],
        favourites: JSON.parse(localStorage.getItem('favourites') || '[]')
    }

    toggleTheme = () => {
        this.setState({ isSpaceTheme: !this.state.isSpaceTheme})
      }

    async fetchPoems() {
        try {
          const response = await fetch('https://www.poemist.com/api/v1/randompoems'
          );
          
          const result = await response.json();
          this.setState({ poems: result })
    
        } catch (error: unknown) {
          console.error(error);
        }
    }

    updatePoems = () => {
        this.fetchPoems();
    }

    updateFavourites = () => {
        this.setState({ favourites: JSON.parse(localStorage.getItem('favourites') || '[]')})
    }

    componentDidMount() {
        this.fetchPoems();
    }  
    render() {
        return (
            <div style={ mainStyle }>
                <Content isSpaceTheme = {this.state.isSpaceTheme} poems={this.state.poems} favourites={this.state.favourites} updateFavourites= {this.updateFavourites}/>
                <Side 
                    	onThemeClick = {this.toggleTheme} 
                        spaceTheme = {this.state.isSpaceTheme} 
                        onReloadClick = {this.updatePoems} 
                        onFavouriteClick = {this.updateFavourites} 
                />
            </div>            
        )
    }
}

const mainStyle: CSSProperties = {
    display: 'flex',
    height: 'calc(100% - 5rem)',
    width: '100%',
}

export default Main;