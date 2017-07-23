import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from  'react-router-dom';
import { connect } from 'react-redux';
import { createPosts } from '../actions/index';

class PostsNew extends Component {

  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return(
      <div className={className}>
        <label> {field.label} </label>

        <input
          className='form-control'
          type='text'
          {...field.input}
        />

        {field.meta.touched ? <div className='text-help'>{field.meta.error}</div> : undefined}

      </div>
    );
  }

  onSubmit(values) {
    this.props.createPosts(values,() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name='title'
            label='Title'
            component={this.renderField}
          />
          <Field
            name='categories'
            label='Post Categories'
            component={this.renderField}
          />

          <Field
            name='content'
            label='Post content'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'> Submit </button>
          <Link to='/' className='btn btn-danger'> Cancel </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter a category!";
  }

  if (!values.content) {
    errors.content = "Enter a content!";
  }
  //if errors is empty, the form is fine to submit
  //If errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' //has to be unique, name of the form to distingush different forms on the same page
})(
  //combine two helpers(reduxForm & connect) at the same time
  connect(null,{ createPosts})(PostsNew) //return a react component
);
