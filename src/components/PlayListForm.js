import React, {Component} from 'react';




class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
  };
  this.handleAddToList = this.handleAddToList.bind(this);
  this.handleUpdateItem = this.handleUpdateItem.bind(this);
}

  handleUpdateItem (e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  }

  handleAddToList = (e) => {
      console.log("handleAddToList executed");
      e.preventDefault();
      let listItem = JSON.stringify(this.state);
      console.log(listItem);

      this.setState({ userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting",
            {
              method: "POST",
              body: listItem,
              headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
              }
            }
      ).then(response => {
        console.log(response, "yay");
        this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
      }).catch(err => {
        console.log(err, "boo!");
      });
  }

  render() {
    return (

      <div className="form-group form-group-default">
        
        <form onSubmit={this.handleAddToList}>
          <label htmlFor="userName">User Name: </label>
          <input onChange={this.handleUpdateItem} type="text" className="form-control input-default" id="userName" placeholder="Name or User Name" value={this.state.userName}/>
          <label htmlFor="songArtist">Artist/Band: </label>
          <input onChange={this.handleUpdateItem} type="text" className="form-control input-default" id="songArtist" placeholder="Artist or Band Name" value={this.state.songArtist}/>
          <label htmlFor="songTitle">Song Title: </label>
          <input onChange={this.handleUpdateItem} type="text" className="form-control input-default" id="songTitle" placeholder="Song Title" value={this.state.songTitle}/>
          <label htmlFor="songNotes">Notes About Song: </label>
          <textarea onChange={this.handleUpdateItem} rows="10" cols="50" className="form-control input-default" id="songNotes" placeholder="What do you want to say about this song?" value={this.state.songNotes} />
          <br/>
          <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
        </form>



      </div>

    )
  }
}

export default PlayListForm;
