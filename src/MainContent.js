import React, {Component} from 'react';
import './App.css';


import News from './Pages/News';
import Calendar from './Pages/Calendar'
import Documents from './Pages/Documents'
import AddNews from './Tools/AddNews';
import AdminActions from './Tools/AdminActions'

import {Grid} from 'react-flexbox-grid';

import * as firebase from 'firebase';


export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            popup: {
                addNewsOpen: false
            },
            newsDB: {0:{}, 1:{}, 2:{}}
        }
    }

    componentDidMount(){
        const db = firebase.database(),
            maincontent = db.ref().child('maincontent');

        maincontent.on('value', snap => {
            let newsDB = snap.val() ? snap.val().news : {};
            console.log(newsDB);
            this.setState({
                newsDB: newsDB
            });
        });
    }

    toggleAddNews = () => {
        const popup = this.state.popup;
        popup.addNewsOpen = !popup.addNewsOpen;
        this.setState({popup});
    };

    render() {
        const index = this.props.slideIndex;
        const popup = this.state.popup;
        let page, tool, admin;
        if (index === 0) page = <News newsDB={this.state.newsDB}/>;
        else if (index === 1) page = <Calendar newsDB={this.state.newsDB} width={this.props.meta.width}/>;
        else if (index === 2) page = <Documents newsDB={this.state.newsDB}/>;

        if (popup.addNewsOpen) tool = <AddNews open={this.state.popup.addNewsOpen} toggleAddNews={this.toggleAddNews} />;

        if (this.props.adminLoggedIn) admin = <AdminActions width={this.props.meta.width} toggleAddNews={this.toggleAddNews}/>;

        return (
            <main>
                <Grid fluid style={{marginTop: '2%'}}>
                    {
                        admin
                    }
                    {
                        page
                    }
                </Grid>
                {
                    tool
                }
            </main>
        );
    }
}

