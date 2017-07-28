import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import {Card} from 'material-ui/Card';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import {fullWhite, fullBlack, teal600, tealA400} from 'material-ui/styles/colors';


export default function Calendar(props) {
    return (
            <Row around="xs" className='fadein'>
                <Col xs={12} md={8} >
                    <Card>
                        <InfiniteCalendar
                            displayOptions={{
                                layout: props.width > 700?'landscape':'portrait'
                            }}
                            theme={{
                                selectionColor: teal600,
                                textColor: {
                                    default:fullBlack,
                                    active: fullWhite
                                },
                                weekdayColor: teal600,
                                headerColor: teal600,
                                floatingNav: {
                                    background: tealA400,
                                    color: fullBlack,
                                    chevron: fullBlack
                                }
                            }}
                            width={'100%'}
                            height={props.width > 700 ?props.height * .75 : props.height * .65}
                        />
                    </Card>
                </Col>
            </Row>
    )
}