import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchComponent from './SearchComponent'
import TreeComponent from './TreeComponent'
import treeAction from './treeAction'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    searchAction(filter) {
      dispatch(treeAction(filter))
    }
  }
}

class TreeContainer extends Component {
  render() {
    return (
      <section className='Tree-center'>
        <SearchComponent searchAction={this.props.searchAction}/>
        <TreeComponent tree={this.props.tree} filter={this.props.filter}/>
      </section>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
