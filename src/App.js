import React, {Component} from 'react';
import './App.css';
import SearchResult from './components/SearchResult'

//http://hn.algolia.com/api/v1/search?query=...
//http://hn.algolia.com/api/v1/search?query=bar&tags=author_:USERNAME
//https://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>1

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      results:[],
      title: true,
      author: false,
      date: false,
    }
  }

  search = () => {
    fetch('http://hn.algolia.com/api/v1/search?query=' + this.state.search)
    .then(res => res.json())
    .then(searches => {
      this.setState({ results: searches.hits})
    })
  }

  searchByAuthor = () => {
    fetch('http://hn.algolia.com/api/v1/search?&tags=author_' + this.state.search )
    .then(res => res.json())
    .then(searches => {
      this.setState({ results: searches.hits})
    })
  }
 
  searchByDate = () => {
    fetch('http://hn.algolia.com/api/v1/search?&tags=author_' + this.state.search )
    .then(res => res.json())
    .then(searches => {
      this.setState({ results: searches.hits})
    })
  }
  
  updateSearch = (e) => {
    this.setState({ search: e.target.value})
    console.log(e.target.value)
  }

  render () {
    return (
      <div className="App">
        <section className="flexRow">
          <form>
            <label>
              <input type="text" name="search" onChange={this.updateSearch}/>
            </label>
          </form>

          <h2 onClick={this.search}>General Search</h2>
          <h2 onClick={this.searchByAuthor}>Search By Author</h2>
          <h2 onClick={this.searchByDate}>Search By Date</h2>
        </section>
        <ol>
          {
            this.state.results.map((result, index) => {
              return <SearchResult key={index} title = {result.title} author = {result.author} url = {result.url} points = {result.points} date = {result.created_at}/>;
            })
          }
        </ol> 
      </div>
    );
  }
}

export default App;
