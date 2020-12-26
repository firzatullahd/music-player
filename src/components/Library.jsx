// eslint-disable-next-line
import react from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs,setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus }) => {
    return(
        <div className={libraryStatus ? "library library-active" : "library"}>
            <h2>Library</h2>
            <div className="library-songs">
               {songs.map(song => <LibrarySong 
               songs={songs} 
               song={song} 
               setCurrentSong={setCurrentSong}
               key={song.id} 
               audioRef={audioRef}
               isPlaying={isPlaying}
               setSongs={setSongs}
               />)}
            </div>
        </div>
    );
}

export default Library;