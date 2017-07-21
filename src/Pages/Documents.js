import React from 'react';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';

export default function Documents(props) {
    return (
            <Row around="xs" className='fadein'>
                <Col xs={12} md={8}>
                    {
                        Object.keys(props.newsDB).reverse().map((newsId, i) => {
                            let news = props.newsDB[newsId];
                            return (
                                <Card key={`news${i}`} style={{margin: '.3em 0 1em 0'}}>
                                    <CardMedia className="mediaImage"
                                               style={{backgroundImage: `url(${news.imageUrl})`}}/>
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
    )
}