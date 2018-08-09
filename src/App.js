import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { DateRange } from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <div className="container">
      {/* The div above is for the entire page */}
        
        
        <ReactiveBase
          app="airbnb_clone_mbhdtech"
          credentials="uWa0mgsKv:d8217a30-8340-4661-b0cc-10faf9da7a5f"
          type="listing"
        >
        {/* All the reactive search stuff will go inbetween these tags */}

          <nav className="navbar">
            <div className="title">AirBnB - Matt</div>
          </nav>

          <div className="left-column">
            <DateRange
                      dataField="date_from"
                      componentId="DateRangeSensor"
                      title="When"
                      numberOfMonths={2}
                      queryFormat="basic_date"
                      initialMonth={new Date('08-09-2018')}
            />

            <NumberBox
                    componentId="GuestSensor"
                    dataField="accommodates"
                    title="Guests"
                    defaultSelected={2}
                    labelPosition="right"
                    data={{
                        start: 1,
                        end: 16,
                    }}
            />
          </div>

        </ReactiveBase>
      </div>
    );
  }
}
export default App;