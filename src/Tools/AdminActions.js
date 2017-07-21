import React from 'react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';


export default function AdminActions (props) {
    return (
            <Row around="xs" style={{margin: '1em 0 1em 0'}}>
                <Col xs={12} md={8}>
                    <Card>
                        <CardTitle title='Administratorinnstillinger'/>
                        <CardActions style={{zIndex: 0, display: 'flex', flexDirection: props.width < 700?'column':'row'}}>
                            <RaisedButton fullWidth={props.width < 700} style={{margin: props.width < 700?"1% 0 1% 0": "0 1% 0 1%", flex: 1}} label="Legg til en nyhet" onTouchTap={props.toggleAddNews}/>
                            <RaisedButton fullWidth={props.width < 700} style={{margin: props.width < 700?"1% 0 1% 0": "0 1% 0 1%", flex: 1}} label="Legg til en dato" />
                            <RaisedButton fullWidth={props.width < 700} style={{margin: props.width < 700?"1% 0 1% 0": "0 1% 0 1%", flex: 1}} label="Last opp dokument" />
                        </CardActions>
                    </Card>
                </Col>
            </Row>
    )
}