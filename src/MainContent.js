import React, {Component} from 'react';
import './App.css';


import News from './Pages/News';
import Calendar from './Pages/Calendar'
import Documents from './Pages/Documents'
import ChatRoom from './Pages/ChatRoom'
import AddNews from './Tools/AddNews';
import AddDocument from './Tools/AddDocument'
import AddDate from './Tools/AddDate'
import AdminActions from './Tools/AdminActions'

import 'animate.css/animate.css'; // CSS animation effects library
import Reveal from 'react-reveal';

import {Grid} from 'react-flexbox-grid';

import * as firebase from 'firebase';


export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            popup: {
                addNewsOpen: false,
                addDocumentOpen: false,
                addDateOpen: false
            },
            newsDB: {0:{}, 1:{}, 2:{}},
        }
    }

    componentDidMount(){

        const db = firebase.database(),
            maincontent = db.ref().child('maincontent');

        maincontent.on('value', snap => {
            let newsDB = snap.val() ? snap.val().news : this.state.newsDB;
            this.setState({newsDB: newsDB});
        });
    }

    toggleAddNews = () => {
        const popup = this.state.popup;
        popup.addNewsOpen = !popup.addNewsOpen;
        this.setState({popup});
    };

    toggleAddDocument = () => {
        const popup = this.state.popup;
        popup.addDocumentOpen = !popup.addDocumentOpen;
        this.setState({popup});
    };

    toggleAddDate = () => {
        const popup = this.state.popup;
        popup.addDateOpen = !popup.addDateOpen;
        this.setState({popup});
    };

    render() {
        console.log(this.props.chatOpen);

        const index = this.props.slideIndex;
        const popup = this.state.popup;

        let page, tool, admin, chat;

        if (index === 0)                    page = <News newsDB={this.state.newsDB}/>;
        else if (index === 1)               page = <Calendar newsDB={this.state.newsDB} width={this.props.meta.width} height={this.props.meta.height} datesDB={this.state.datesDB} allDates={this.state.allDates}/>;
        else if (index === 2)               page = <Documents newsDB={this.state.newsDB}/>;

        if (popup.addNewsOpen)              tool = <AddNews open={this.state.popup.addNewsOpen} toggle={this.toggleAddNews} />;
        else if (popup.addDocumentOpen)     tool = <AddDocument open={this.state.popup.addDocumentOpen} toggle={this.toggleAddDocument}/>;
        else if (popup.addDateOpen)         tool = <AddDate open={this.state.popup.addDateOpen} toggle={this.toggleAddDate} />;

        if (this.props.adminLoggedIn)       admin = <AdminActions width={this.props.meta.width} toggleAddNews={this.toggleAddNews} toggleAddDate={this.toggleAddDate} toggleAddDocument={this.toggleAddDocument} page={index}/>;

        if (this.state.chatOpen)            chat = <ChatRoom/>;

        return (
            <main className={this.props.chatOpen? 'notPushed pushed': 'notPushed'} >
                <Grid fluid style={{marginTop: '2%'}}>
                    {
                        admin
                    }
                    {
                        page
                    }
                </Grid>
                <Reveal effect="animations fadeIn">
                    {
                        chat
                    }
                </Reveal>
                {
                    tool
                }
            </main>
        );
    }
}

