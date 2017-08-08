import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import * as firebase from 'firebase';
import {Card} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import InfiniteCalendar, {
    Calendar,
    defaultMultipleDateInterpolation,
    withMultipleDates
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import {fullWhite, fullBlack, teal600, tealA400} from 'material-ui/styles/colors';
const MultipleDatesCalendar = withMultipleDates(Calendar);


export default class AddNews extends Component {
    constructor() {
        super();
        this.state = {
            selectedDateInfo: {},
            infoOpen: false,
            allDates: [],
            datesDB: {0: {}, 1: {}, 2: {}},
        }
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        firebase.database().ref('maincontent/dates').on('value', snap => {
            let datesDB = snap.val() ? snap.val() : this.state.datesDB;
            setTimeout(this.getAllDates(datesDB), 100);
        });
    };

    getAllDates = (datesDB) => {
        let newDates = [],
            state = this.state;
        if (datesDB) {
            Object.keys(datesDB).map(key => {
                return newDates.push(datesDB[key].date);
            });
            this.setState({state});
            state.allDates = newDates;
            state.datesDB = datesDB;

            this.setState({state});
        }
    };

    checkForEvent = (date) => {
        Object.keys(this.state.datesDB).map(key => {
            const checkedData = this.state.datesDB[key];
            if (String(checkedData.date) === String(date)) this.setState({selectedDateInfo: checkedData, infoOpen: true});
            return null;
        });
    };

    close = () => {
      this.setState({infoOpen: false})
    };


    render() {
        const info = this.state.selectedDateInfo;
        return (
            <Row around="xs" className='fadeinNormal'>
                <Col xs={12} md={8} >
                    <Dialog style={{textAlign: 'justify',
                        textJustify: 'inter-word'}} open={this.state.infoOpen} title={`${info.title}`} onRequestClose={this.close} modal={false}
                            contentStyle={{
                                width: '100%',
                            }}
                            actions={<FlatButton label="Lukk vinduet" primary={true} onTouchTap={this.close}/>}>
                        {this.state.selectedDateInfo.text}
                    </Dialog>
                    <Card>
                        <InfiniteCalendar
                            theme={{
                                selectionColor: teal600,
                                textColor: {
                                    default: fullBlack,
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
                            min={new Date(2016, 0, 1)}
                            Component={MultipleDatesCalendar}
                            interpolateSelection={defaultMultipleDateInterpolation}
                            selected={this.state.allDates}
                            onSelect={ date => {
                                this.checkForEvent(date);
                            }}
                            width={'100%'}
                            height={this.props.width > 700 ? this.props.height * .68 : this.props.height * .55}
                        />
                    </Card>
                </Col>
            </Row>
        )
    }
}