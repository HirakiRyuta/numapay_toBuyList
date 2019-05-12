import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Resolve from '../components/main/Resolve'
// import Issue from '../components/main/Issue'
// import PostCard from '../components/main/PostCard'

class Main extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Route path='/items' component={issue}> */}
        <Route path='/items/resolve' exact component={Resolve} />
        {/* <PostCard /> */}
      </React.Fragment>
    )
  }

}

export default Main
