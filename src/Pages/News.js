import React from 'react';
import {Card, CardTitle, CardText, CardMedia, CardActions} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

export default function News(props) {
    const {setDeleteInfo, newsDB, adminLoggedIn, meta} = props;
    return (
        <Row around="xs" className='fadeinNormal'>
            {
                Object.keys(newsDB).reverse().map((newsId, i) => {

                    const
                        news = newsDB[newsId],
                        {title, date, imageUrl} = news;

                    let admin = undefined;
                    if(adminLoggedIn) admin = <CardActions style={{margin: '0 1em 0 1em'}}><RaisedButton onTouchTap={()=>setDeleteInfo('news', `${newsId}`)} backgroundColor='#cd5c5c' labelColor='#fff' label="SLETT DETTE INNLEGGET" style={{marginBottom: '1em'}}/></CardActions>;

                    return (
                        <Col style={{transition: '0.5s'}} key={`news${i}`} xs={12} md={10} lg={8}>
                            <Card style={{marginBottom: '1em'}}>
                                <CardMedia className="mediaImage"
                                           style={{transition: '.5s', backgroundImage: `url(${imageUrl})`, minHeight: meta.width > 700? meta.height*0.65: meta.height*0.5}}/>
                                <CardTitle style={{margin: '0 1em 0 1em'}} title={title}
                                           subtitle={`publisert ${date}`}/>
                                <CardText style={{
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    margin: '0 1em 0 1em'
                                }}>
                                    {news.text}
                                </CardText>
                                {admin}
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}