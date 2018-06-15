import React, { Component } from 'react';
import Instagram_1 from '../images/instagram/instagram_1.jpg';
import Instagram_2 from '../images/instagram/instagram_2.jpg';
import Instagram_3 from '../images/instagram/instagram_3.jpg';
import Instagram_4 from '../images/instagram/instagram_4.jpg';
import Instagram_5 from '../images/instagram/instagram_5.jpg';
import Instagram_6 from '../images/instagram/instagram_6.jpg';
import Instagram_7 from '../images/instagram/instagram_7.jpg';
import Instagram_8 from '../images/instagram/instagram_8.jpg';
// import Instagram_9 from '../images/instagram/instagram_9.jpg';

class InstagramFeed extends Component {
  render(){
    var images = [
      Instagram_1,
      Instagram_2,
      Instagram_3,
      Instagram_4,
      Instagram_5,
      Instagram_6,
      Instagram_7,
      Instagram_8,
      // Instagram_9,
    ];
    return(
      <div className="instagramContainer">
        <h3>Senaste Instagram-bilder</h3>
        <div className="instagramFeed">
            {
              images.map(function(image, index){
                return <div className="imageContainer" key={ index }><img src={ image } alt="Instagram" /></div>;
              })
            }
        </div>
      </div>
    )
  }
}

export default InstagramFeed;
