import React from 'react';
import './App.css';
import DisplayInfo from './DisplayInfo'
import CollectionView from './CollectionView'

let collection;

class Collection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            viewAllVis: false,
            displayVis: false,
            collectionVis: false, 
            species: []       
        }
    }

    componentDidMount(){

        fetch('http://pokeapi.co/api/v2/pokemon?limit=150').then(res=>res.json())
        .then(response=>{
          this.setState({
            speciesList : response.results,
          });
        });  
      }

    

    render(){   
    //     let list = this.props.collection;
    //     const species = this.state
    //     console.log("Collection render: ",this.props.collection)
    //     console.log("Species render: ", this.state.speciesList)
   
    // while(list !== undefined){
    //     for(var i = 0; i < this.state.species.length; i++){
    //         console.log("Species list length: ", this.state.species.length)
    //         for(var j = 0; j < list.length; j++){
    //             if(this.state.species[i]['name'] === list[0]){
    //                 continue;
    //             }else{
    //                 delete this.state.species[i]
    //             }
    //         }
    //      }
    //  }
        
            return(
            <div>
                <div>
                   {console.log("the state of collection is: ", this.props.collection)}
                    {this.props.collection}
                </div>
            </div>
            )   
        }

}

export default Collection