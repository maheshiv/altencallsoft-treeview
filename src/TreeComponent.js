import React from 'react'
import './TreeComponent.css';

const TreeComponent = (props) => {
  let hasData = false
  const treeNodes = props.tree.map((nodeObj, i) => {
    const node = nodeObj.node
    const isFilterContains = !props.filter || (props.filter && node.description.includes(props.filter))

    if (isFilterContains) {
      hasData = true;
    }

    return (<li key={i}>
      {isFilterContains ? (
        <div>
          {node.description}
        </div>
      ): null}
      {node.children && node.children.length? <TreeComponent isFilterContains={isFilterContains} tree={node.children} filter={props.filter}/>: null}
    </li>)
  })

  return (
    <ul className={!props.isFilterContains?'Node-desc': ''}>
      {hasData? treeNodes: (<div className='No-res'>No results found</div>)}
    </ul>
  )
}

export default TreeComponent;
