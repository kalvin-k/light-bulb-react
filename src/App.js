import React, { Component } from 'react';
import './App.css'
import './light-on.jpg'

const lightBulbs = {
    on: 'https://cdn5.vectorstock.com/i/1000x1000/60/94/cartoon-glowing-yellow-light-bulb-vector-18016094.jpg',
    off: 'https://cdn1.vectorstock.com/i/1000x1000/70/00/sketch-silhouette-image-light-bulb-off-icon-vector-15087000.jpg'
}

const switches = {
    onSwitch: 'https://myrealdomain.com/images/clip-art-light-switch-1.png',

    offSwitch: 'http://images.clipartpanda.com/turn-clipart-turn-off-light-switch-clipart-1.jpg'
}

class OnOff extends Component {
  constructor(props){
    super(props)
      this.state = {
          onOff: 'on',
          open: true,
          light: lightBulbs.on,
          switchOn: switches.onSwitch
    }
}

 onOffButton = () => {

    if (this.state.onOff == 'on') {
        this.setState({onOff: 'off'})
        this.setState({light: lightBulbs.off})
        this.setState({switchOn: switches.offSwitch})
    } else if (this.state.onOff == 'off'){
        this.setState({onOff: 'on'})
        this.setState({light: lightBulbs.on})
        this.setState({switchOn: switches.onSwitch})

    }
}

 // getImageName  = () => {
 //     this.state.open ? 'on': 'off'
 // }
 // toggleImage = () => {
 //     this.setState(state => {open: !state.open})
 // }


  render() {
      let { onOff } = this.state

      const lightBulbs = {
          on: 'https://cdn5.vectorstock.com/i/1000x1000/60/94/cartoon-glowing-yellow-light-bulb-vector-18016094.jpg',
          off: 'https://cdn1.vectorstock.com/i/1000x1000/70/00/sketch-silhouette-image-light-bulb-off-icon-vector-15087000.jpg'
      }

      const switches = {
          onSwitch: 'https://myrealdomain.com/images/clip-art-light-switch-1.png',

          offSwitch: 'http://images.clipartpanda.com/turn-clipart-turn-off-light-switch-clipart-1.jpg'
      }

    return (
        <div>
            <center>

                <h1 style = { {backgroundColor: this.state.onOff == 'on' ? 'yellow' : 'white'}}> {onOff}</h1>

                <img src = {this.state.light} style = { {maxHeight: '100px'}} />
                <br/>

                <img src = {this.state.switchOn} style = { {maxWidth: '50px'}} onClick = {this.onOffButton} />
                <br/>

           </center>
{
            // <button onClick = {this.onOffButton}>click this..</button>
}
        </div>

    );
  }
}

export default OnOff
