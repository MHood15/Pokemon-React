import React from 'react';
import './App.css';
import DisplayInfo from './DisplayInfo'
import Collection from './Collection'

class CollectionView extends React.Component{
    constructor(props){
        super(props)
        this.state = {      
        }
    }

    render(){
        return(
            console.log("Collectionview: ",this.props.collection)
        )
    }
}

export default CollectionView