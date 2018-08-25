import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import { DateRange } from '@appbaseio/reactivesearch';
import { NumberBox } from '@appbaseio/reactivesearch';
import { RangeSlider } from '@appbaseio/reactivesearch';
import { ResultCard } from '@appbaseio/reactivesearch';
import './App.css';

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

            <RangeSlider
                    componentId="PriceSensor"
                    dataField="price"
                    title="Price Range"
                    range={{
                        start: 10,
                        end: 250,
                    }}
                    rangeLabels={{
                        start: '$10',
                        end: '$250',
                    }}
                    defaultSelected={{
                        start: 10,
                        end: 50,
                    }}
                    stepValue={10}
                    interval={20}
                    react={{
                        and: ['DateRangeSensor'],
                    }}
                />
          </div>

          <ResultCard
                className="right-column"
                componentId="SearchResult"
                dataField="name"
                size={12}
                onData={data => ({
                    image: data.image,
                    title: data.name,
                    description: (
                        <div>
                            <div className="price">${data.price}</div>
                            <p className="info">{data.room_type} · {data.accommodates} guests</p>
                        </div>
                    ),
                    url: data.listing_url,
                })}
                pagination
                react={{
                    and: ['GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
                }}
                innerClass={{
                    resultStats: 'result-stats',
                    list: 'list',
                    listItem: 'list-item',
                    image: 'image',
                }}
            />

        </ReactiveBase>
      </div>
    );
  }
}
export default App;