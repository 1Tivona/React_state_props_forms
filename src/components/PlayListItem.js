import React, {Component} from 'react';


export default class PlayListItem extends Component{
  render(){
    return(

      <div className="PlayListItem">
        {this.props.songs.map(music =>
        <div className="card">
          <div className="card-block">
          <p className="card-text">User: {this.props.userName}</p>
            <div>
            <p className="card-text">Artist/Band: {this.props.songArtist}</p>
              <div>
              <p className="card-text">Song Title: {this.props.songTitle}</p>
                <div>
                <p className="card-text">Notes about Song: {this.props.songNotes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>


  );
  }
}
