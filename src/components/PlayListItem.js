import React from 'react';

const PlayListItem = ({song}) => (



          <div className="card-block" key={song._id}>
            <div>
              <p className="card-text">User: {song.userName}</p>
                <div>
                  <p className="card-text">Artist/Band: {song.songArtist}</p>
                    <div>
                      <p className="card-text">Song Title: {song.songTitle}</p>
                        <div>
                          <p className="card-text">Notes about Song: {song.songNotes}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>



);





 export default PlayListItem;
