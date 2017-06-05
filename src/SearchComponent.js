import React, { Component } from 'react'
import './SearchComponent.css';

class SearchComponent extends Component {
  render() {
    let props = this.props
    return (
      <form className='search' onSubmit={(e) => {e.preventDefault(); props.searchAction(this.refs.search.value);}}>
        <input type='text' ref={'search'}/>
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default SearchComponent;
