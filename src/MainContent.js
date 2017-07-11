import React, {Component} from 'react';
import './App.css';
import SwipeableViews from 'react-swipeable-views';


export default class MainContent extends Component {
    render() {
        return (
            <main>
                <SwipeableViews
                    index={this.props.slideIndex}
                    onChangeIndex={this.props.handleChange}
                >
                    <section>
                        <h2>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </section>
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

