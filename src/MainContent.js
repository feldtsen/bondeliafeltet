import React, {Component} from 'react';
import './App.css';
import SwipeableViews from 'react-swipeable-views';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'react-flexbox-grid';




export default class MainContent extends Component {
    render() {
        return (
            <main>
                <SwipeableViews
                    index={this.props.slideIndex}
                    onChangeIndex={this.props.handleChange}
                >
                    <Grid fluid>
                        <Row top="xs">
                            <Col md={12} lg={6} >
                                <Card style={{margin:'1em 0 1em 0'}}>
                                    <CardTitle title="Asfaltering pågår!" subtitle="Dette vil pågå til............" />
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    </CardText>
                                    <CardActions>
                                        <FlatButton label="Action1" />
                                        <FlatButton label="Action2" />
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={12} lg={6} >
                                <Card style={{margin:'1em 0 1em 0'}}>
                                    <CardTitle title="Klagemål" subtitle="Dette vil pågå til............" />
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    </CardText>
                                    <CardActions>
                                        <FlatButton label="Action1" />
                                        <FlatButton label="Action2" />
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md={12} lg={6} >
                                <Card style={{margin:'1em 0 1em 0'}}>
                                    <CardTitle title="Søppel" subtitle="Dette vil pågå til............" />
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    </CardText>
                                    <CardActions>
                                        <FlatButton label="Action1" />
                                        <FlatButton label="Action2" />
                                    </CardActions>
                                </Card>
                            </Col> <Col md={12} lg={6} >
                            <Card style={{margin:'1em 0 1em 0'}}>
                                <CardTitle title="Frak" subtitle="Dette vil pågå til............" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>
                                <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions>
                            </Card>
                        </Col> <Col md={12} lg={6} >
                            <Card style={{margin:'1em 0 1em 0'}}>
                                <CardTitle title="Asfaltering pågår!" subtitle="Dette vil pågå til............" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>
                                <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions>
                            </Card>
                        </Col> <Col md={12} lg={6} >
                            <Card style={{margin: '1em 0 1em 0'}}>
                                <CardTitle title="Asfaltering pågår!" subtitle="Dette vil pågå til............" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>
                                <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions>
                            </Card>
                        </Col>



                        </Row>
                    </Grid>
                    <section >
                        slide n°2
                    </section>
                    <section>
                        slide n°3
                    </section>
                </SwipeableViews>
            </main>
        );
    }
}

