import React, {Component} from 'react';
import './App.css';
import PokeForm from './PokeForm';
import DisplayInfo from './DisplayInfo'
// import DisplayAll from './DisplayAll'
import PokemonList from './PokemonList'
import Collection from './Collection'




class App extends React.Component {
 constructor(props){
   super(props)
  this.state = { 
    viewAllVis: false,
    displayVis: false,
    collectionVis: false,
  }
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = event.target.searchBox.value.toLowerCase();
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name;

   
    fetch(url)
         .then(response => response.json())
         .then(data => {
          var typesArr = data['types']
          var pokeName = data['forms'][0]['name'];
          var pokeImage = data['sprites']['front_default'];
          pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
          var pokeType = '';
          
          for(var j = 0; j < typesArr.length; j++){
            if(j === typesArr.length-1){
              pokeType += typesArr[j]['type']['name'] + ' '
            }else{
              pokeType += typesArr[j]['type']['name'] + ', '
            }
          }
         
          console.log("This", this)
          this.setState({
            pokeName: pokeName,
            pokeType: pokeType,
            pokeImage: pokeImage,
            viewAllVis: false,
            displayVis: true,
            collectionVis: false
          })   
      })
  }  

 
                
  
  render(){

    return (
    <div>
      <PokeForm onSubmit={this.handleSubmit.bind(this)} />
      
      <button className="View All" onClick={()=>this.setState({viewAllVis: true, displayVis: false})}>View All Pokemon!</button>
      
      <button className ="Reset" onClick={()=>this.setState({ viewAllVis: false, displayVis: false,collectionVis: false})}>Reset All</button>

      <button className ="View Collection" onClick={()=>this.setState({viewAllVis: false, displayVis: false,collectionVis: true})}>View Collection</button>

      {this.state.displayVis ? <DisplayInfo name ={this.state.pokeName} type={this.state.pokeType} img={this.state.pokeImage} /> : null}
      
      {this.state.viewAllVis ? <PokemonList /> : null}

      {this.state.collectionVis ? <Collection /> : null}
    </div>
    )
  }
  
}
    



export default App;







































































































































