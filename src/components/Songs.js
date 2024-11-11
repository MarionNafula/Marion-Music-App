import "../css/Songs.css" 
import SongCard from "./SongCard";   
import React, { useState } from 'react';
    
function Songs({songs}) {    
    console.log('v',songs)      
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredSongs = songs.filter((song) =>
      song.Song.toLowerCase().includes(searchQuery.toLowerCase())
    );


    
    return(
        <>        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMh4okd5Guv91k6UBPy1Pj17DIyUFtTOCWQ&usqp=CAU"/>
        <h2>My Music</h2>    
        <img src="https://yt3.googleusercontent.com/5cEc2-d20Iy2WB8iu87gabc8VkN84TV7TNIg7lpZfWXpJWjzZFlfLPCiAwB8VhGtG1v84l-W=s900-c-k-c0x00ffffff-no-rj" style={{width:'400px', height: '400px'}}/>     
        <img src="https://www.atlanticrecords.com/sites/g/files/g2000015596/files/styles/artist_image_detail/public/2023-01/080822_BB-ATLWebsite_300x300.png?itok=0HgtcAXi" style={{width:'400px', height: '400px'}}/>   
        <img src="https://remezcla.com/wp-content/uploads/2021/06/becky-g-tresluce-beauty-makeup-brand.jpg" style={{width:'400px', height: '400px'}}/>   
        <img src="https://media.gq-magazine.co.uk/photos/5eaab3bfb7ebbc00082c8369/16:9/w_1280,c_limit/20200430-Doja-Cat.jpg" style={{width:'400px', height: '400px'}}/> 
        <div>        
            <input
          type="text"
          placeholder="Search songs"
          value={searchQuery}
          onChange={handleSearch}   
          
        />   
        <button onClick={handleSearch}>Search</button>
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
               
        
            
            {
         songs.map((song) =>{  
            return(
            <SongCard   
            song={song}
            />  )
         } )
        }
        </div>
           
        </>
    )
}  

export default Songs;     
  