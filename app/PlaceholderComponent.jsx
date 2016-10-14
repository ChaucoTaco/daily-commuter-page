import React, {Component} from 'react';
import styles from './index.css';

class PlaceholderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikeCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikeCount});
  }

  render() {
    return(
      <div className={styles.app}>
      aASDSADAASDSADAS
        <span> {this.state.likesCount} </span>
        <button onClick={this.onLike}> + </button>
      </div>
    );
  }
}

export default PlaceholderComponent;
