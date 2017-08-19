import React, {Component} from 'react';

import FontIcon from 'material-ui/FontIcon';

import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {teal800, tealA400, teal500} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Info from 'material-ui/svg-icons/action/info-outline';
import Chat from 'material-ui/svg-icons/communication/chat';



export default class HeaderFooter extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1,
            pointerEvents: '',
            y: 0,
            expanded: false,
            menuOpacity: 0,
            buttonTransform: 0,
            menuPointerEvents: 'none'

        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollDirection, {passive: true});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollDirection);
    }

    expandMenu = () => {
      this.setState({expanded: !this.state.expanded, menuOpacity: this.state.menuOpacity === 1? 0 : 1, buttonTransform: this.state.buttonTransform === 0? 50: 0, menuPointerEvents: this.state.expanded? 'none':''});
    };

    scrollDirection = () => {
        window.scrollY > this.state.y && window.scrollY > 0 ?
            this.setState({opacity: 0, pointerEvents: 'none', y: window.scrollY}) :
            this.setState({opacity: 1, pointerEvents: '', y: window.scrollY});
    };

    reloadSite = () => {
        window.location.reload(false);
    };

    render() {
        let showBrandHeader, clickableBrandHeader;
        if (this.props.slideIndex === 0) showBrandHeader = <AppBar title={<FontIcon style={{color: 'rgb(255, 255, 255)'}}><i className="fa fa-home" aria-hidden="true"></i> BONDELIAFELTET</FontIcon>} showMenuIconButton={false} onTitleTouchTap={this.reloadSite} style={{cursor: 'pointer', background: '#00897B'}}/>;

        if(this.props.meta.width > 700) clickableBrandHeader = <Tab icon={<FontIcon><i className="fa fa-home" aria-hidden="true"></i> Bondeliafeltet</FontIcon>} onActive={this.reloadSite} value={0}/>;

        return (
            <header>
                {this.props.meta.width < 700 ? showBrandHeader : <AppBar style={{zIndex: -1, background: 'rgb(240, 240, 240)'}} zDepth={0} showMenuIconButton={false}/>}
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
                    {clickableBrandHeader}
                    {
                        [{iconClass: 'fa fa-newspaper-o', label: 'Nyheter', value: 0},{iconClass: 'fa fa-calendar', label: 'Datoer', value: 1},{iconClass: 'fa fa-file-text', label: 'Dokumenter', value: 2}].map(tab=>{
                            return(<Tab key={tab.label} icon={<FontIcon><i className={tab.iconClass} aria-hidden="true"></i></FontIcon>} label={tab.label} value={tab.value}/>)
                        })
                    }

                </Tabs>
                {
                    this.props.meta.width > 700 ?
                    <div className="buttonsContainer" style={{transition: '.45s',textAlign: 'center', position: 'fixed', right: '5%', zIndex: 5000,  bottom: this.props.meta.width > 700 ? '5%': '', top: this.props.meta.width > 700 ?'':'4%' }}>
                        <FloatingActionButton mini={true} backgroundColor='gray' style={{opacity: this.state.menuOpacity, transition: this.state.expanded?'.5s': '.3s',  transform: `translateY(${-this.state.buttonTransform * 2}%)`, pointerEvents: this.state.menuPointerEvents}}>
                            <Info style={{fill: 'white'}}/>
                        </FloatingActionButton><br/>
                        <FloatingActionButton mini={true} backgroundColor={teal500} style={{opacity: this.state.menuOpacity, transition: this.state.expanded?'.45s': '1s', transform: `translateY(${-this.state.buttonTransform}%)`, pointerEvents: this.state.menuPointerEvents}} onTouchTap={this.props.toggleChat}>
                            <Chat style={{fill: 'white'}}/>
                        </FloatingActionButton><br/>
                        <FloatingActionButton onTouchTap={this.expandMenu}>
                            <ContentAdd style={{fill: 'white', transform: this.state.expanded?'rotate(135deg)': 'rotate(0deg)'}} />
                        </FloatingActionButton>
                    </div>
                    :
                        <div className="buttonsContainer" style={{transition: '.45s',textAlign: 'center', opacity: this.state.opacity + 0.8, position: 'fixed', right: '5%', zIndex: 5000,  bottom: this.props.meta.width > 700 ? '5%': '', top: this.props.meta.width > 700 ?'':'4%' }}>
                            <FloatingActionButton onTouchTap={this.expandMenu}>
                                <ContentAdd style={{fill: 'white', transform: this.state.expanded?'rotate(135deg)': 'rotate(0deg)'}} />
                            </FloatingActionButton> <br />
                            <FloatingActionButton mini={true} backgroundColor={teal500} style={{pointerEvents: this.state.menuPointerEvents, opacity: this.state.menuOpacity, transition: this.state.expanded?'.45s': '1s', transform: `translateY(${this.state.buttonTransform}%)`}} onTouchTap={this.props.toggleChat}>
                                <Chat style={{fill: 'white'}}/>
                            </FloatingActionButton><br/>
                            <FloatingActionButton mini={true} backgroundColor='gray' style={{pointerEvents: this.state.menuPointerEvents, opacity: this.state.menuOpacity, transition: this.state.expanded?'.5s': '.3s',  transform: `translateY(${this.state.buttonTransform * 2}%)`}}>
                                <Info style={{fill: 'white'}}/>
                            </FloatingActionButton>
                        </div>
                }


            </header>
        );
    }
}

