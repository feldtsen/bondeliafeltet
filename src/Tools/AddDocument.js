import React, {Component} from 'react';

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import * as firebase from 'firebase';
import moment from 'moment';


export default class AddDocument extends Component {
   constructor () {
       super();
       this.state = {
            title: '',
           pdfUrl: ''
       }
   }

   changeInput = (e) => {
       this.setState({[e.target.name]: e.target.value});
   };

    postDocument = () => {
        if(this.state.title !== '' && this.state.pdfUrl !== '') {
            firebase.database().ref('maincontent/documents').push({
                title: this.state.title,
                pdfUrl: this.state.pdfUrl,
                date: moment().format('ll')
            });
            this.props.toggle();
        } else {
            console.log('fyll inn data');
        }
    };

    render() {
        console.log(this.state.title);
        const actions = [
            <FlatButton
                label="Avbryt"
                primary={true}
                style={{color: 'red'}}
                onTouchTap={this.props.toggle}
            />,
            <FlatButton
                label="Legg til dokumentet"
                primary={true}
                onTouchTap={this.postDocument}
            />,
        ];
        return (
            <Dialog title="Legg til et dokument" modal={true} open={this.props.open} actions={actions}
                    repositionOnUpdate={false}
                    autoDetectWindowHeight={false}
                    autoScrollBodyContent={false}
                    contentStyle={{
                        width: '100%',
                    }}>
                <p style={{color:'orange'}}>* du må fylle alle feltene for å legge til dokumentet</p>
                {
                    [
                        {name: 'title', label: 'Legg til navnet på dokumentet', hint: 'Referat årsmøte, aug 2017'},
                        {name: 'pdfUrl', label: 'URL til PDF-dokumentet', hint: 'Skriv inn PDF-adressen'},


                    ].map((field, i)=>{
                        return (
                            <TextField
                                key={`addNewsField${i}`}
                                onChange={this.changeInput}
                                fullWidth={true}
                                name={field.name}
                                floatingLabelText={field.label}
                                hintText={field.hint}
                            />
                        )
                    })

                }
            </Dialog>
        );
    }
}

