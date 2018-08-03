import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { DateRange } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <div className="container">
          <ReactiveBase
            app="airbnb_clone_mbhdtech"
            credentials="uWa0mgsKv:d8217a30-8340-4661-b0cc-10faf9da7a5f"
            type="listing"
          >
            Hello from ReactiveSearch!
          </ReactiveBase>

          <nav className="navbar">
            <div className="title">AirBnB - Matt</div>
          </nav>
      </div>


    );
  }
}
export default App;