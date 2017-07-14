import React, {Component} from 'react';
import './App.css';
import './bondeliafeltetPalette.css'
import FontIcon from 'material-ui/FontIcon';


import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {teal800, tealA400} from 'material-ui/styles/colors';

const wheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "wheel";


export default class HeaderFooter extends Component {
    constructor(){
        super();
        this.state={
            opacity: 1,
            pointerEvents: ''
        }
    }

    componentDidMount(){
        window.addEventListener(wheelevt, this.handleScroll, {passive: true});
        window.addEventListener("keydown", this.handleKeydown, {passive:true});
        window.addEventListener("touchmove", this.handleMove, {passive:true});
    }

    componentWillUnmount(){
        window.removeEventListener(wheelevt, this.handleScroll);
        window.removeEventListener("keydown", this.handleKeydown);
        window.removeEventListener("touchmove", this.handleMove);
    }

    handleKeydown = (e) =>{
        let key = e.keyCode;
        if (key === 38 && this.state.opacity !== 1){
            this.setState({opacity: 1, pointerEvents: ''})
        } else if (key === 40  && this.state.opacity !== 0){
            this.setState({opacity: 0, pointerEvents: 'none'})
        }
    };

    reloadSite = () => {
        window.location.reload(false);
    };

    render() {
        return (
            <header>
                {
                    this.props.meta.width < 700 ?
                        <AppBar
                            title={<FontIcon style={{ color: 'rgb(255, 255, 255)'}}><i className="fa fa-home" aria-hidden="true"></i> BONDELIAFELTET</FontIcon>}
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
                    style={{position:  'fixed', pointerEvents: this.state.pointerEvents,transition: '.45s', opacity: this.state.opacity, width: '100%', bottom: 0, top:  this.props.meta.width > 700 ? 0 : '', zIndex: 1}}

                >
                    {
                        this.props.meta.width > 700 ?
                            <Tab
                                icon={<FontIcon><i className="fa fa-home" aria-hidden="true"></i> Bondeliafeltet</FontIcon>}
                                onActive={this.reloadSite}
                                value={0}
                            />
                            : ''
                    }
                    <Tab
                        icon={<FontIcon><i className="fa fa-newspaper-o" aria-hidden="true"></i></FontIcon>}
                        label="Nyheter"
                        value={0}
                    />
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

