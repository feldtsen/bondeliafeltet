import React, {Component} from 'react';
import './App.css';
import './bondeliafeltetPalette.css'
import FontIcon from 'material-ui/FontIcon';


import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {teal800, tealA400} from 'material-ui/styles/colors';


export default class HeaderFooter extends Component {
    reloadSite = () => {
        window.location.reload(false);
    };

    render() {
        return (
            <header>
                {
                    this.props.meta.width < 700 ?
                        <AppBar
                            title={<FontIcon><i className="fa fa-home" aria-hidden="true"></i> BONDELIAFELTET</FontIcon>}
                            showMenuIconButton={false}
                            onTitleTouchTap={this.reloadSite}
                            style={{cursor: 'pointer'}}
                        /> : ''
                }
                <Tabs
                    onChange={this.props.handleChange}
                    value={this.props.slideIndex}
                    inkBarStyle={{backgroundColor: tealA400}}
                    tabItemContainerStyle={{background: teal800}}
                >
                    {
                        this.props.meta.width > 700 ?
                            <Tab
                                icon={<FontIcon><i className="fa fa-home" aria-hidden="true"></i> Bondeliafeltet</FontIcon>}
                                onActive={this.reloadSite}
                                value={3}
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

