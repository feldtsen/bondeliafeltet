import React, {Component} from 'react';

import HeaderFooter from './HeaderFooter';
import MainContent from './MainContent'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {fullWhite, fullBlack, teal600, tealA400} from 'material-ui/styles/colors';

import * as firebase from 'firebase';

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
        secondaryTextColor: fade(fullBlack, 0.7),
        alternateTextColor: tealA400,
        canvasColor: 'rgba(255, 255, 255, 1)',
        borderColor: fade(fullWhite, 0.3),
        disabledColor: fade(fullBlack, 0.3),
        pickerHeaderColor: fade(fullBlack, 0.12),
        clockCircleColor: fade(fullWhite, 0.12),
    },
    datePicker: {
        textColor: fullBlack,
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            meta: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
            chatOpen: false,
            slideIndex: 0,
            admin: false,
            loginUser: {
                email: 'joaoepe@outlook.com',
                password: 'password123',
            },
            userInfo: {
                email: '',
                uid: ''
            }
        }
    }

    componentDidMount() {
        this.loginToWebsite();
        window.addEventListener("resize", this.responsiveUpdater, {passive: true});

        firebase.auth().onAuthStateChanged(user=> {
            if (user) {
                const {email, uid} = user,
                    userInfo = this.state.userInfo;
                userInfo.email = email;
                userInfo.uid = uid;
                console.log(`Email: ${email}, UID: ${uid}`);

                this.setState({userInfo});
                // User is signed in.
                // ...
            } else {
                // User is signed out.
                // ...
                console.log('signed out');
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.responsiveUpdater);
    }

    slideChanger = (value) => {
        this.setState({slideIndex: value,});
        window.scrollTo(0, 0);
    };

    responsiveUpdater = () => {
        const meta = this.state.meta;
        meta.width = window.innerWidth;
        meta.height = window.innerHeight;
        this.setState({meta});
    };

    toggleChat = () => {
        this.setState({chatOpen: !this.state.chatOpen});
    };

    loginToWebsite = () => {
        const {email, password} = this.state.loginUser;
        firebase.auth().signInWithEmailAndPassword(email, password).catch( error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(`Error code is -> ${errorCode}, and the error message is -> ${errorMessage} `);
        });
    };


    render() {
        return (
            <MuiThemeProvider muiTheme={mainTheme}>
                <div>
                    <HeaderFooter meta={this.state.meta}
                                  handleChange={this.slideChanger}
                                  slideIndex={this.state.slideIndex}
                                  toggleChat={this.toggleChat}
                    />
                    <MainContent meta={this.state.meta}
                                 handleChange={this.slideChanger}
                                 slideIndex={this.state.slideIndex}
                                 news={this.state.newsDB}
                                 adminLoggedIn={this.state.admin}
                                 toggleChat={this.toggleChat}
                                 chatOpen={this.state.chatOpen}
                                 userInfo={this.state.userInfo}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
