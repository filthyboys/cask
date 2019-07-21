import React from 'react';
import './App.css';
import {NavBar} from '../NavBar/NavBar';
import MediaBanner from '../MediaBanner/MediaBanner';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mediaInfo: {
        name: 'Wet T-shirt party',
        date: 'This friday 9 JUL',
        description: 'The event will be hosted by our bartenders',
        imgSrc: 'https://i.ytimg.com/vi/9i41mnx67R4/maxresdefault.jpg'
      }
    }
    this.handleImageUpdate = this.handleImageUpdate.bind(this);
  }
  

  handleImageUpdate(){
    
  }


  render() {  
    return (
      <div className='App'>
      <h1 className='title'>CASK 82</h1>  
      <NavBar />
      <MediaBanner info={this.state.mediaInfo} imgSrc={this.state.mediaInfo.imgSrc}/>
      </div>
      )
    }
  }
  
  
  export default App;
  
  
  
  
  