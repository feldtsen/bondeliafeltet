import React, {Component} from 'react';
import './App.css';
import FontIcon from 'material-ui/FontIcon';


import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {teal800, tealA400} from 'material-ui/styles/colors';


export default class HeaderFooter extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
            pointerEvents: '',
            y: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollDirection, {passive: true});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollDirection);
    }

    scrollDirection = () => {
        window.scrollY > this.state.y && window.scrollY > 0 ?
            this.setState({opacity: 0, pointerEvents: 'none', y: window.scrollY}) :
            this.setState({opacity: 1, pointerEvents: '', y: window.scrollY});
    };

    reloadSite = () => {
        window.location.reload(false);
    };

    render() {
        let showBrandHeader;
        if (this.props.slideIndex === 0)
            showBrandHeader = <AppBar
                title={<FontIcon style={{color: 'rgb(255, 255, 255)'}}><i className="fa fa-home" aria-hidden="true"></i>BONDELIAFELTET</FontIcon>}
                showMenuIconButton={false}
                onTitleTouchTap={this.reloadSite}
                style={{cursor: 'pointer', background: '#00897B'}}
            />;
        return (
            <header>
                {
                    this.props.meta.width < 700 ?
                        showBrandHeader
                        : <AppBar style={{zIndex: -1, background: 'rgb(240, 240, 240)'}} zDepth={0}
                                  showMenuIconButton={false}/>
                }
                <Tabs
                    onChange={this.props.handleChange}
                    value={this.props.slideIndex}
                    inkBarStyle={{backgroundColor: tealA400}}
                    tabItemContainerStyle={{background: teal800}}
                    style={{
                        position: 'fixed',
                        pointerEvents: this.state.pointerEvents,
                        transition: '.45s',
                        width: '100%',
                        opacity: this.state.opacity,
                        bottom: this.props.meta.width > 700 ? '' : 0,
                        top: this.props.meta.width > 700 ? 0 : '',
                        zIndex: 100
                    }}

                >
                    {
                        this.props.meta.width > 700 ?
                            <Tab
                                icon={<FontIcon><i className="fa fa-home" aria-hidden="true"></i>
                                    Bondeliafeltet</FontIcon>}
                                onActive={this.reloadSite}
                                value={0}
                            />
                            : ''
                    }
                    <Tab
                        icon={<FontIcon><i className="fa fa-newspaper-o" aria-hidden="true"></i></FontIcon>}
                        label="Nyheter"
                        value={0}/>
                    <Tab
                        icon={<FontIcon><i className="fa fa-calendar" aria-hidden="true"></i></FontIcon>}
                        label="Datoer"
                        value={1}/>
                    <Tab
                        icon={<FontIcon><i className="fa fa-file-text" aria-hidden="true"></i></FontIcon>}
                        label="Dokumenter"
                        value={2}/>
                </Tabs>
            </header>
        );
    }
}

