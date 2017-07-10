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
                    <div>
                        <h2>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div >
                        slide n°2
                    </div>
                    <div>
                        slide n°3
                    </div>
                </SwipeableViews>
            </main>
        );
    }
}

