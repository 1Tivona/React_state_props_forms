import React, {Component} from 'react';
import PlayListItem from '../components/PlayListItem.js'


class PlayList extends Component {
  constructor(props){
    super(props);
    this.state={
      songs: []
    }
    this.updateList = this.updateList.bind(this);

  }

  updateList (e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  }
    componentDidMount(){
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
            console.log("state", this.state.songs);
          })
    }
    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
      }
      render(){
        return (
            <div>

              <form className="button" onSubmit={this.updateItem}>
                  <button onClick={this.fetchData}>Update List</button>
              </form>
              <div className="playlist">
                {this.state.songs.map((song) => <PlayListItem song={song} key={song._id} />)}
              </div>
            </div>

        );
      }
  }


export default PlayList;
