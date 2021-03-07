import React, { Component, CSSProperties } from 'react';
import Side from './Side';
import Content from './Content';

interface Props {}
interface State {
    isSpaceTheme: boolean;
    poems: [];
}
class Main extends Component <Props, State> {
    state: State = {
        isSpaceTheme: false,
        poems: []
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

    componentDidMount() {
        this.fetchPoems();
    }  
    render() {
        return (
            <div style={ mainStyle }>
                <Content isSpaceTheme={this.state.isSpaceTheme} poems={this.state.poems}/>
                <Side onThemeClick = {this.toggleTheme} spaceTheme={this.state.isSpaceTheme}/>
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