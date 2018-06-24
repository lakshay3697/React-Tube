import React, { Component } from 'react';

// Class Component that will produce the Search bar to be rendered onto the App
class SearchBar extends Component{

    constructor(props){
        super(props);
        
        this.state = { term : ' ' };
    }

    render()
    {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}  // For making the input element a controlled component
                    onChange = {event => this.onInputChange(event.target.value) } /> 
            </div>
        );
    }

    onInputChange(term){
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}
// Exporting the SearchBar Component into the root component i.e App in index.js
export default SearchBar;