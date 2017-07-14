import React, {Component} from 'react';
import './App.css';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            allNews: [
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },

            ]
        }
    }

    render() {
        const index = this.props.slideIndex;
        let page;
        if (index === 0) {
            page =
                <Grid fluid>
                    <Row around="xs">

                        <Col xs={12} md={4}>
                            <Card style={{margin: '.3em 0 .3em 0'}}>
                                <CardTitle style={{padding: '3%'}} title='Side'
                                           subtitle='sidesub'/>
                                <CardText style={{padding: '0 3% 3% 3%'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores
                                    dolor dolorem esse eum inventore ipsa itaque, laboriosam laborum libero odio,
                                    reprehenderit soluta sunt totam ut, voluptatum. Fugit, hic?
                                </CardText>
                            </Card>
                        </Col>

                        <Col xs={12} md={8} style={{overflowY: this.props.meta > 700 ? 'scroll':'', height: this.props.meta > 700?this.props.meta.height *0.89:''}}>
                            <Row >
                                {
                                    this.state.allNews.map((news, i) => {
                                        return (
                                            <Col xs={12} key={`news${i}`} style={{margin: '.3em 0 .3em 0'}}>
                                                <Card key={`news${i}`}>
                                                    <CardTitle style={{padding: '3%'}} title={news.title}
                                                               subtitle={news.subtitle}/>
                                                    <CardText style={{padding: '0 3% 3% 3%'}}>
                                                        {news.text}
                                                    </CardText>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>

                    </Row>
                </Grid>
        } else if (index === 1) {
            page =
                <section>
                    slide n°2
                </section>
        } else {
            page =
                <section>
                    slide n°3
                </section>
        }
        return (
            <main>
                {
                    page
                }
            </main>
        );
    }
}

