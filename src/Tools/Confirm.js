import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default function Confirm(props) {
    const actions = [
        <FlatButton
            label="NEI"
            primary={true}
            onTouchTap={props.toggleDeleteConfirmation}
        />,
        <RaisedButton
            label="JA"
            backgroundColor='#cd5c5c'
            labelColor='#fff'
            onTouchTap={props.confirmDeletion}
        />
    ];

    return (
        <div>
            <Dialog
                actions={actions}
                modal={false}
                open={props.open}
                onRequestClose={props.toggleDeleteConfirmation}
            >
                Er du sikker på at du vil slette innlegget?
            </Dialog>
        </div>
    );
}