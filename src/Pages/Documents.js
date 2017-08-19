import React, {Component} from 'react';
import {Card} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import 'animate.css/animate.css'; // CSS animation effects library
import * as firebase from 'firebase';


export default class Documents extends Component {
    constructor() {
        super();
        this.state = {
            documentsDB: {}
        }
    }

    componentWillMount() {
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
            <Row around="xs" className='fadeinNormal'>
                <Col style={{transition: '0.5s'}} xs={12} md={10} lg={8}>

                    {
                        this.state.documentsDB ?
                            Object.keys(this.state.documentsDB).reverse().map((documentId, i) => {
                                let document = this.state.documentsDB[documentId];
                                return (
                                    <Card style={{marginBottom: '1em'}} key={`document${i}`}>
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