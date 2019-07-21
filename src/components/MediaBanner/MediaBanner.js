import React from 'react';
import {Media} from '../Media/Media';
import {MediaInfo} from '../MediaInfo/MediaInfo';


class MediaBanner extends React.Component{

    render(){
        return(
            <div className='mediaBanner'>
                <MediaInfo info={this.props.info}/>
                <Media imgSrc={this.props.imgSrc}/>
            </div>
        )
    }
}




export default MediaBanner;