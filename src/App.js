import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      codefriends: [
        {
          username: 'GeraldAburto',
          name: ''
        },
        {
          username: 'Crdzbird',
          name: ''
        },
        {
          username: 'AnonymusIII',
          name: ''
        },
        {
          username: 'CristhianUNI',
          name: ''
        },
        {
          username: 'Rossel2m3',
          name: ''
        },
        {
          username: '2nal2',
          name: ''
        },
        {
          username: 'ernestob445',
          name: ''
        }
      ],
      search: ''
    };
  }

  componentDidMount() {
    let usersnames = this.state.codefriends.map(codefriend => fetch(`https://api.github.com/users/${codefriend.username}`));
    Promise.all(usersnames)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(response => {
        this.setState({ codefriends: response });
      });
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }

  render() {
    const { codefriends, search } = this.state;
    const filteredcodefriends = codefriends.filter(codefriend => (codefriend.name && codefriend.name.toLowerCase().includes(search.toLocaleLowerCase())));

    return (
      <div className='App'>
        <h1>Code Friends</h1>
        <SearchBox
          placeholder='Search codefriends'
          handleChange={this.handleChange}
        />
        <CardList codefriends={filteredcodefriends} />
      </div>
    );
  }

}

export default App;
