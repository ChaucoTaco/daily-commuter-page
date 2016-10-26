import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class GlobalWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="global__wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default GlobalWrapper;

GlobalWrapper.propTypes = {
  children: React.PropTypes.object,
};
