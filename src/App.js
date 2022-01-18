import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBound from './components/ErrorBound';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users,}));
    }

    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value,
        });
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const searchfieldValue = searchfield.toLowerCase();
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfieldValue) || robots.email.toLowerCase().includes(searchfieldValue);
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1 mb2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBound>
                            <CardList robots={filteredRobots}/>
                        </ErrorBound>
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;