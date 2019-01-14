# Exercise: Broken Component

"Our Python engineer gave a try to her first React component. Can you help him to fix it?"

```js
/**
* Please identify, correct and comment on any errors or bad practices
* you see in the React component class below.
*
* This React class is intended to query an HTTP endpoint that will return
* a string, after clicking a button.
*/

import React, Component from 'react';
import queryAPI from 'queryAPI';


class ShowResultsFromAPI extends Component() {
  constructor() {
    super(props);

    this.container = null;
  }

  onDisableDelay() {
    this.props.apiQueryDelay = 0;
  }

  click() {
    if (this.props.apiQueryDelay) {
      setTimeout(function() {
        this.fetchData();
      }, this.props.apiQueryDelay);
    }
  }

  fetchData() {
    queryAPI()
      .then(function(response) {
        if (response.data) {
          this.setState({
            data: response.data,
            error: false
          });
        }
      });
  }

  render() {
    return <div class="content-container" ref="container">
            {
              if (!!error) {
                <p>Sorry - there was an error with your request.</p>
              }
              else {
                <p>data</p>
              }
            }
          </div>
          <Button onClick={this.onDisableDelay.bind(this)}>Disable request delay</Button>
          <Button onClick={this.click.bind(this)}>Request data from endpoint</Button>
  }
}

ShowResultsFromAPI.displayName = {
  name: "ShowResultsFromAPI"
};
ShowResultsFromAPI.defaultProps = {
  apiQueryDelay: 0
};
ShowResultsFromAPI.propTypes = {
  apiQueryDelay: React.propTypes.number
};

export ContentContainer;
```
