import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css'; // CSS animation effects library
import * as firebase from 'firebase';


export default class Documents extends Component {
    constructor() {
        super();
        this.state = {
            documentsDB: {}
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        firebase.database().ref('maincontent/documents').on('value', snap => {
            let documentsDB = snap.val() ? snap.val() : this.state.documentsDB;
            this.setState({documentsDB: documentsDB});
        });
    };


    render() {
        return (
            <Row around="xs" className='fadein'>
                <Col xs={12} md={8}>

                    {
                        this.state.documentsDB ?
                            Object.keys(this.state.documentsDB).reverse().map((documentId, i) => {
                                let document = this.state.documentsDB[documentId];
                                return (
                                    <Reveal effect="animated fadeIn" key={`document${i}`}>
                                        <Card style={{marginBottom: '1em'}}>
                                            <List style={{padding: 0}}>
                                                <a className="pdfLink" href={document.pdfUrl} target="_blank">
                                                    <ListItem
                                                        primaryText={document.title}
                                                        rightIcon={<OpenInNew />}
                                                        secondaryText={'filen var lastet opp ' + document.date}
                                                    />
                                                </a>
                                            </List>
                                        </Card>
                                    </Reveal>
                                )
                            })
                            :
                            ''
                    }

                </Col>
            </Row>
        )
    }
}