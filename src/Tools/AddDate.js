import React, {Component} from 'react';
import * as firebase from 'firebase';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

export default class AddNews extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: '',
            title: '',
            text: '',
        }
    }

    changeInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    setDate = (e, date) => {
        this.setState({selectedDate: String(date)});
    };


    postDate = () => {
        if(this.state.title !== '' && this.state.text !== '' && this.state.selectedDate !== '') {
            firebase.database().ref('maincontent/dates').push({
                date: this.state.selectedDate,
                title: this.state.title,
                text: this.state.text
            });
            this.props.toggle();
        } else {
            console.log('fyll inn data');
        }
    };


    render() {
        const {toggle, open, width} = this.props,
            actions = [
            <FlatButton
                label="Avbryt"
                primary={true}
                style={{color: 'red'}}
                onTouchTap={toggle}
            />,
            <FlatButton
                label="Legg til datoen"
                primary={true}
                onTouchTap={this.postDate}
            />,
        ];
        return (
            <Dialog title="Legg til en dato" modal={true} open={open} actions={actions}
                    repositionOnUpdate={false}
                    autoDetectWindowHeight={false}
                    autoScrollBodyContent={false}
                    contentStyle={{
                        width: '100%',
                    }}
                    >
                <p style={{color:'orange'}}>* du må fylle alle feltene for å legge til datoen</p>
                {
                    [
                        {name: 'title', label: 'Tittel til hendelsen', hint: 'Dugnad i Bondeliafeltet...'},
                        {name: 'text', label: 'Skriv teksten til hendelsen', hint: 'Det er planlagt en dugnad i starten av...'},

                    ].map((field, i)=>{
                        return (
                            <TextField
                                key={`addDateField${i}`}
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
                <DatePicker floatingLabelText={'Velg dato'} name='selectedDate'
                            onChange={(e, date) => this.setDate(e, date)} autoOk={true}
                            minDate={new Date(2016, 0, 1)}
                            container={width > 700? 'inline' : 'dialog'}
                            mode='landscape'

                />
            </Dialog>
        );
    }
}

