import {render} from 'react-dom';
import React, {Component} from 'react';
import Collection from './Collection'
// import fetch from 'isomorphic-fetch';

var collection = [];

//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.
class Pokemon extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    const {pokemon,id} = this.props;
    return (
          <div className="PokeCard">
                <div className="PokeCardName"> {pokemon.name} </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                <button onClick={()=> {
                  if(collection.indexOf(pokemon.name)===-1){
                    collection.push(pokemon.name)
                    this.setState({
                      myCollection: collection
                    })
                  }
                }}>Add to Collection</button>
                <Collection collection = {this.state.myCollection} />
                {/* {console.log("the state of collection is: ", this.state.myCollection)} */}
          </div>
          );
    }
}

export default Pokemon