import {render} from 'react-dom';
import React, {Component} from 'react';
import Pokemon from './Pokemon'
// import fetch from 'isomorphic-fetch';


//The PokemonList component shows nothing when it mounts for the first time. 
//But right before it mounts on to the DOM, it makes an 
//API call to fetch the first 151 Pokemon from the API and 
//then displays them using the Pokemon Component

class PokemonList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],
      fetched : false,
      loading : false,
    };
  }
  componentWillMount(){
    this.setState({
      loading : true
    });
    fetch('http://pokeapi.co/api/v2/pokemon?limit=150').then(res=>res.json())
    .then(response=>{
      this.setState({
        species : response.results,
        loading : true,
        fetched : true
      });
    });
    
  }

  render(){
    const {fetched, loading, species} = this.state;
    console.log("Species: ", this.state.species)
    let content ;
    if(fetched){
      content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
    }else if(loading && !fetched){
        content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      {content}
    </div>;
  }
}

export default PokemonList