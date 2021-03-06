import React,{Component}  from 'react';
import CardList from '../components/CardList';
// import {robots} from './robot';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';


class App extends Component{
  constructor(){
    super()
    this.state = {
      robots:[],
      searchField:""
    }

  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users =>  this.setState({robots:users}));
  }
  

  onSearchChange = (event) => {
    this.setState({searchField:event.target.value}); //this.state.searchField = event.target.value;
    // console.log(event.target.value);
   
  }
  render(){
    const {robots,searchField} = this.state;
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length?
       <h1 className=" f1  mb3">Loading</h1>
      :(
        <div className="tc">
          <h1 className=" f1  mb3">RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>)
    }
   
  }

export default App; 

