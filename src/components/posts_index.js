import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <h4>{post.title}</h4>
          <p>Categories: {post.categories}</p>
          <p>Post: {post.content}</p>
        </li>
      );
    });
  }

  render() {

    return (
      <div>
        <div>
          <Link className='btn btn-primary' to='/posts/new'>
            Create new post
          </Link>
        </div>
        <h3> Post </h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );

  }
}

function mapStationToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStationToProps, { fetchPosts })(PostsIndex);
//{ fetchPosts } is same as the follow
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
