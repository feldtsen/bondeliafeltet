import React from 'react';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';

export default function News(props) {
    return (
        <Row around="xs" className='fadein'>
            {
                props.newsDB ?
                    Object.keys(props.newsDB).reverse().map((newsId, i) => {
                        let news = props.newsDB[newsId];
                        return (
                            <Col key={`news${i}`} xs={12} md={8}>
                                <Card style={{margin: '.3em 0 1em 0'}}>
                                    <CardMedia className="mediaImage"
                                               style={{backgroundImage: `url(${news.imageUrl})`}}/>
                                    <CardTitle style={{padding: '3%'}} title={news.title}
                                               subtitle={`publisert ${news.date}`}/>
                                    <CardText style={{
                                        padding: '0 3% 3% 3%', textAlign: 'justify',
                                        textJustify: 'inter-word'
                                    }}>
                                        {news.text}
                                    </CardText>
                                </Card>
                            </Col>
                        )
                    })
                    :
                    ''
            }
        </Row>
    )
}