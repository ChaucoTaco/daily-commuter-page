import React, { Component } from 'react';

class Transit extends Component {
  render() {
    const { transit } = this.props;
    return (
      <div>
        {
          transit.map((item, key) => {
            const transitDetails = item.steps[1].transit_details;
            return (
              <div key={key}>
                <p>
                  <img src={transitDetails.line.icon} alt={transitDetails.line.short_name} />
                  <span> is leaving at {transitDetails.departure_time.text} towards Manhatten </span>
                </p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Transit;

Transit.propTypes = {
  transit: React.PropTypes.array,
};
