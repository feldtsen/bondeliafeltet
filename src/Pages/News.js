import React from 'react';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexbox-grid';

export default function News(props) {
    return (
        <Grid fluid>
            <Row around="xs" style={{marginTop: '6%'}}>
                <Col xs={12} md={8}>
                    {
                        props.allNews.map((news, i) => {
                            return (
                                <Card key={`news${i}`} style={{margin: '.3em 0 1em 0'}}>
                                    <CardMedia className="mediaImage"
                                               style={{backgroundImage: `url(${news.image})`}}/>
                                    <CardTitle style={{padding: '3%'}} title={news.title}
                                               subtitle={news.subtitle}/>
                                    <CardText style={{padding: '0 3% 3% 3%'}}>
                                        {news.text}
                                    </CardText>
                                </Card>
                            )
                        })
                    }
                </Col>
            </Row>
        </Grid>
    )
}