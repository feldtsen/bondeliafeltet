import React, {Component} from 'react';
import propTypes from 'prop-types';

import News from './Pages/News';
import Calendar from './Pages/Calendar';
import Documents from './Pages/Documents';
import ChatRoom from './Pages/ChatRoom';
import User from './Pages/User';

import AddNews from './Tools/AddNews';
import AddDocument from './Tools/AddDocument';
import AddDate from './Tools/AddDate';
import AdminActions from './Tools/AdminActions';
import Confirm from './Tools/Confirm';

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
            setInfo: {
                path: '',
                id: '',
                confirmationPopup: false
            },
            newsDB: {0:{}, 1:{}, 2:{title: 'Vær vennlig og vent', date: new Date(), text: 'Hvis du leser dette, holder innholdet på å bli lastet inn. Normalt tar ikke dette lang tid.'}},
        }
    }

    componentWillMount(){

        const db = firebase.database(),
            maincontent = db.ref().child('maincontent');

        maincontent.on('value', snap => {
            let newsDB = snap.val().news;
            if(newsDB === undefined) newsDB = this.state.newsDB;
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

    toggleDeleteConfirmation = () => {
        const popup = this.state.setInfo;
        popup.confirmationPopup = !popup.confirmationPopup;
        this.setState({popup});
    };

    confirmDeletion = () => {
        const {path, id} = this.state.setInfo;
        this.toggleDeleteConfirmation();
        firebase.database().ref(`maincontent/${path}/${id}`).remove();
    };

    setInfo = (path, id) => {
        const setInfo = this.state.setInfo;
        setInfo.path = path;
        setInfo.id = id;
        setInfo.confirmationPopup = true;
        this.setState({setInfo});
    };

    render() {

        const
        {addNewsOpen, addDocumentOpen, addDateOpen}   = this.state.popup,
        {newsDB, datesDB, setInfo}                    = this.state,
        {adminLoggedIn, slideIndex, meta, userInfo}   = this.props;

        let page, tool, admin, chat, user;

        if (slideIndex === 0)                   page = <News      newsDB={newsDB} adminLoggedIn={adminLoggedIn} setDeleteInfo={this.setInfo} confirmDeletion={this.confirmDeletion} toggleConfirm={this.toggleDeleteConfirmation} meta={meta}/>;
        else if (slideIndex === 1)              page = <Calendar  newsDB={newsDB} width={meta.width} height={meta.height} datesDB={datesDB} />;
        else if (slideIndex === 2)              page = <Documents newsDB={newsDB}/>;

        if (addNewsOpen)                        tool = <AddNews       open={addNewsOpen} toggle={this.toggleAddNews} />;
        else if (addDocumentOpen)               tool = <AddDocument   open={addDocumentOpen} toggle={this.toggleAddDocument}/>;
        else if (addDateOpen)                   tool = <AddDate       open={addDateOpen} toggle={this.toggleAddDate} width={meta.width}/>;
        else if (setInfo.confirmationPopup)     tool = <Confirm       open={setInfo.confirmationPopup} toggleDeleteConfirmation={this.toggleDeleteConfirmation} confirmDeletion={this.confirmDeletion}/>;

        if (this.props.adminLoggedIn)           admin = <AdminActions width={meta.width} toggleAddNews={this.toggleAddNews} toggleAddDate={this.toggleAddDate} toggleAddDocument={this.toggleAddDocument} page={slideIndex}/>;

        if (this.props.chatOpen)                chat = <ChatRoom />;

        user = <User userInfo={userInfo}/>;

        return (
            <main>
                <Grid fluid style={{marginTop: '1em'}}>
                    {admin}
                    {user}
                    {page}
                </Grid>
                <div>
                    {chat}
                </div>
                {tool}
            </main>
        );
    }
}

News.propTypes = {
    newsDB: propTypes.object.isRequired,
    adminLoggedIn: propTypes.bool.isRequired,
    setDeleteInfo: propTypes.func
};

