import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


export default class AddNews extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            imageUrl: '',
            text: ''
        }
    }

    changeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    postNews = () => {
        firebase.database().ref('maincontent/news').push({
            title: this.state.title,
            imageUrl: this.state.imageUrl,
            text: this.state.text,
            date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
        });
    };


    render() {
        const actions = [
            <FlatButton
                label="Avbryt"
                primary={true}
                style={{color: 'red'}}
                onTouchTap={this.props.toggleAddNews}
            />,
            <FlatButton
                label="Legg til nyheten"
                primary={true}
                onTouchTap={this.postNews}
            />,
        ];
        return (
            <Dialog title="Legg til en nyhet" modal={true} open={this.props.open} actions={actions}>
                {
                    [
                        {name: 'title', label: 'Legg til en tittel', hint: 'Bygging av lekeplass pågår...'},
                        {name: 'imageUrl', label: 'URL til bilde', hint: 'Skriv in bildeadressen'},
                        {name: 'text', label: 'Skriv teksten til innlegget', hint: 'Vi har som avtalt kontaktet...'},

                    ].map((field, i)=>{
                        return (
                            <TextField
                                key={`addNewsField${i}`}
                                onChange={this.changeInput}
                                fullWidth={true}
                                name={field.name}
                                floatingLabelText={field.label}
                                hintText={field.hint}
                                multiLine={field.name === 'text'}
                                rowsMax={field.name === 'text'?3:0}
                            />
                        )
                    })

                }
            </Dialog>
        );
    }
}

