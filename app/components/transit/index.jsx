import React, { Component } from 'react';

class Transit extends Component {
  render() {
    const { transit } = this.props;
    return (
      <div>
        <p> This is Transit </p>
        {
          transit.map((item, key) => {
            const transitDetails = item.steps[1].transit_details;
            return (
              <div key={key}>
                <p>
                  {transitDetails.line.name}
                  <img src={transitDetails.line.icon} alt={transitDetails.line.short_name} />
                  <span>
                    is leaving at {transitDetails.departure_time.text}
                  </span>
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
