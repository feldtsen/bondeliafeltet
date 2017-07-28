import React from 'react';
import {Card} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';


export default function Documents(props) {
    return (
        <Row around="xs" className='fadein'>
            <Col xs={12} md={8}>

                {
                    Object.keys(props.newsDB).reverse().map((newsId, i) => {
                        let news = props.newsDB[newsId];
                        return (
                            <Card style={{marginBottom: '1em'}} key={`document${i}`}>
                                <List style={{padding: 0}}>
                                    <ListItem key={`news${i}`}
                                              primaryText={news.title}
                                              rightIcon={<OpenInNew />}
                                              secondaryText={'filen var lastet opp ' + news.date}
                                    />
                                </List>
                            </Card>
                        )
                    })
                }

            </Col>
        </Row>
    )
}