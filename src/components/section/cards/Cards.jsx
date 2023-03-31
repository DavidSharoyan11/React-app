import React, { Component } from 'react';
import Image1 from './01.jpg';
import Image2 from './02.jpg';
import Image3 from './03.jpg';
import Image4 from './04.jpg';
import Image5 from './05.jpg';
import Image6 from './06.jpg';
import Image7 from './07.jpg';
import Image8 from './08.jpg';
import './Cards.css';

export class Cards extends Component {
    state = {
        card: [{
            img: Image1,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'pizza',
        },
        {
            img: Image2,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'salad',
        },
        {
            img: Image3,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'noodle'
        },
        {
            img: Image4,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'pizza',
        },
        {
            img: Image5,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'noodle',
        },
        {
            img: Image6,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'salad',
        },
        {
            img: Image7,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'salad',
        },
        {
            img: Image8,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
            type: 'noodle',
        }],
        arr: [],
    }
            
    change = (e)=>{
        this.setState({
            arr: this.state.card.filter(x=>x.type === e)
        })
    }

    componentDidMount(){
        this.setState({
            arr: this.state.card.filter(x=>x.type === 'pizza')
        })
    }
    
  render() {
    return (
        <div>
            <div className='section__paging'>
                <button onClick={()=>{this.change('pizza')}}>Pizzaa</button>
                <button onClick={()=>{this.change('salad')}}>Salad</button>
                <button onClick={()=>{this.change('noodle')}}>Noodle</button>
            </div>
            <div className='cards'>
                {this.state.arr.map(e =>{
                    return <div className='card'>
                        <img src={e.img} alt=''/>
                        <div className='card__content'>
                            <h4>{e.title}</h4>
                            <p>{e.description}</p>
                            <p>{e.price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
  }
}

export default Cards;