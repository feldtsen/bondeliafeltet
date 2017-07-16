import React, {Component} from 'react';
import './App.css';
import News from './Pages/News';
import Calendar from './Pages/Calendar'
import Documents from './Pages/Documents'

export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            allNews: [
                {
                    title: 'Velkommen til Bondeliafeltet.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    image: 'https://images.unsplash.com/photo-1490598000245-075175152d25?dpr=1&auto=compress,format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop=',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Ny start, nye muligheter.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    image: 'https://images.unsplash.com/photo-1497107261019-ad37b3b579ee?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Asfaltering.',
                    image: 'https://images.unsplash.com/photo-1483030096298-4ca126b58199?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    image: 'https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?dpr=1&auto=compress,format&fit=crop&w=767&h=431&q=80&cs=tinysrgb&crop=',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    image: 'https://images.unsplash.com/photo-1471644518115-1f02e9819854?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    image: 'https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?dpr=1&auto=compress,format&fit=crop&w=767&h=512&q=80&cs=tinysrgb&crop=',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'A accusamus aliquam assumenda beatae dignissimos, dolore, expedita ' +
                    'illum incidunt libero maiores minima quam repudiandae sequi similique' +
                    ' ut veritatis, voluptate voluptatibus. Officiis.',

                },
                {
                    title: 'Velkommen til Bondeliafeltet.no.',
                    subtitle: 'Her kommer det litt informasjon om hva meningen med nettsiden er:',
                    image: 'https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
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
        if (index === 0) page = <News allNews={this.state.allNews}/>;
        else if (index === 1) page = <Calendar allNews={this.state.allNews}/>;
        else page = <Documents allNews={this.state.allNews}/>;
        return (
            <main>
                {
                    page
                }
            </main>
        );
    }
}

