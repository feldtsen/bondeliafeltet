import React, { Component } from 'react';
import './App.css';

import HeaderFooter from './HeaderFooter';
import MainContent from './MainContent'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {fullWhite, fullBlack, teal600, tealA400} from 'material-ui/styles/colors';




import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const mainTheme = getMuiTheme({
    fontFamily: "'Ubuntu Condensed', sans-serif",
    tabs: {
      textColor: fullWhite,
        primary1Color: fullWhite
    },
    palette: {
        primary1Color: teal600,
        textColor: fullBlack,
        secondaryTextColor: fade(fullWhite, 0.7),
        alternateTextColor: tealA400,
        canvasColor: 'rgba(255, 255, 255, 1)',
        borderColor: fade(fullWhite, 0.3),
        disabledColor: fade(fullWhite, 0.3),
        pickerHeaderColor: fade(fullWhite, 0.12),
        clockCircleColor: fade(fullWhite, 0.12),
    }
});

class App extends Component {
    constructor(){
        super();
        this.state = {
            meta: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            slideIndex: 0
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.responsiveUpdater, {passive:true});
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.responsiveUpdater);
    }

    slideChanger = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    responsiveUpdater = () => {
        const meta = this.state.meta;
        meta.width = window.innerWidth;
        meta.height = window.innerHeight;
        this.setState({meta});
    };

  render() {
    return (
      <MuiThemeProvider muiTheme={mainTheme}>
          <div>
              <HeaderFooter meta={this.state.meta} handleChange={this.slideChanger} slideIndex={this.state.slideIndex}/>
              <MainContent handleChange={this.slideChanger} slideIndex={this.state.slideIndex}/>
          </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
