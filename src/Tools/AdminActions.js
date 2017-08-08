import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';


export default function AdminActions(props) {
    let button;
    if (props.page === 0) button = <RaisedButton fullWidth={props.width < 700} style={{
        margin: props.width < 700 ? "1% 0 1% 0" : "0 1% 0 1%",
        flex: 1
    }} label="Legg til en nyhet" onTouchTap={props.toggleAddNews}/>
    else if (props.page === 1) button = <RaisedButton fullWidth={props.width < 700} style={{
        margin: props.width < 700 ? "1% 0 1% 0" : "0 1% 0 1%",
        flex: 1
    }} label="Legg til en dato" onTouchTap={props.toggleAddDate}/>
    else if (props.page === 2) button = <RaisedButton fullWidth={props.width < 700} style={{
        margin: props.width < 700 ? "1% 0 1% 0" : "0 1% 0 1%",
        flex: 1
    }} label="Last opp dokument"/>
    return (
        <Row around="xs" style={{margin: '1em 0 1em 0'}}>
            <Col xs={12} md={8}>
                {
                    props.width < 700 ?
                        button
                        :
                        <div style={{zIndex: 0, display: 'flex', flexDirection: props.width < 700 ? 'column' : 'row'}}>
                            <RaisedButton fullWidth={props.width < 700}
                                          style={{margin: props.width < 700 ? "1% 0 1% 0" : "0 1% 0 1%", flex: 1}}
                                          label="Legg til en nyhet"
                                          onTouchTap={props.toggleAddNews}
                            />
                            <RaisedButton fullWidth={props.width < 700}
                                          style={{margin: props.width < 700 ? "1% 0 1% 0" : "0 1% 0 1%", flex: 1}}
                                          label="Legg til en dato"
                                          onTouchTap={props.toggleAddDate}
                            />
                            <RaisedButton fullWidth={props.width < 700}
                                          style={{margin: props.width < 700 ? "1% 0 1% 0" : "0 1% 0 1%", flex: 1}}
                                          label="Last opp dokument"
                                          onTouchTap={props.toggleAddDocument}
                            />
                        </div>
                }
            </Col>

        </Row>
    )
}