import React, {Component} from 'react';
import PlayListItem from './PlayListItem.js'


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
              <PlayListItem songs={this.state.songs} />
                <form className="button">
                  <button onClick={this.fetchData}>Update List</button>
                </form>
              </div>

        );
      }
  }


export default PlayList;
