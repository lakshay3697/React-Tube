import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // importing the SearchBar component
import VideoList from './components/video_list'; // importing the VideoList component
import VideoDetail from './components/video_detail';  // importing the Videodetail component

const API_KEY = 'AIzaSyDJVXdO_yVG6qk8O7M7J_MDNEzKT4a-7UM';



// Function Component that will produce HTML to render to DOM
class App extends Component{

    constructor(props){
        super(props);

        this.state = { 
            videos : [],
            selectedVideo : null
        }; // An array to hold the list of videos which will be rendered to the Application

        this.videoSearch('Jazzy B');
    }

    videoSearch(term){

        // Data being fetched using the API key and youtube-api-search package making use of this key in the most parent component since 
        // React makes use of Downward data flow 
        // Initial search term is 'Eminem'
        YTSearch({ key: API_KEY, term: term },(videos) => {
            this.setState({
                 videos : videos,
                 selectedVideo : videos[0] 
                
                }); // this.setState({ videos : videos }); .... here first videos refers to array videos and second being the response list of videos 
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return (
            <div>
                <SearchBar onSearchTermChange ={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Rendering the HTML produced by the component to DOM
ReactDOM.render(<App />,document.querySelector('.container'));  // <App /> is basically an instant of component App 