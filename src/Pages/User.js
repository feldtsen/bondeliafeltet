import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper'

export default function AdminActions(props) {
    const {email} = props.userInfo;
    return (
        <Row around="xs" className="fadeinNormal" style={{padding: '.5em 0 .5em 0'}}>
            <Col style={{transition: '.5s'}}  xs={12} md={10} lg={8}>
                <Paper style={{padding: '.5em'}}>Du er innlogget med mailen {email}</Paper>
            </Col>
        </Row>
    )
}