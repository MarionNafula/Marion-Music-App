import React, { useState } from 'react';
import "../css/SongCard.css"  
import Card from 'react-bootstrap/Card';       

function SongCard({song,}) {     
  console.log('song',song.Cover);
  
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };    

  
  return(
   
      <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} >           
        <Card style={{ width: '100%' }}>
          <Card.Img style={{width:'100%', height: '400px', objectFit: 'cover'}} 
            variant="top" src={song.Cover} />
          <Card.Body>
            <Card.Title>{song.Song}</Card.Title>
            <Card.Text>{song.Genre}</Card.Text>  
            <Card.Text>{song.Artist}</Card.Text>    
            <button className="remove-button">Remove</button>             
            <button className="like-button" onClick={handleLike}>Like ({likeCount})</button>   
            <button className="dislike-button" onClick={handleDislike}>Dislike ({dislikeCount})</button>  
          </Card.Body>
        </Card>       
      </div>    
      
  )
}   

export default SongCard;




