import React from 'react';

import styles from './<%= className %>.styl';

export default React.createClass({
  getInitialState () {
    return {
      likesCount: 0
    };
  },

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikesCount });
  },

  render () {
    return (
      <div>
        <h1><%= componentName %> Likes: <span>{this.state.likesCount}</span></h1>
        <div><button className={styles.likeButton} onClick={this.onLike}>Like</button></div>
      </div>
    );
  }
})
