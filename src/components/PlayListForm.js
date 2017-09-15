import React, {Component} from 'react';



export default class PlayListForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="username">User Name: </label>
        <input type="text" className="form-control" id="user" placeholder="Name or User Name"/>
        <label htmlFor="artist">Artist/Band: </label>
        <input type="text" className="form-control" id="artist" placeholder="Artist or Band Name"/>
        <label htmlFor="song">Song Title: </label>
        <input type="text" className="form-control" id="song" placeholder="Song Title"/>
        <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
      </div>
    )
  }
}
