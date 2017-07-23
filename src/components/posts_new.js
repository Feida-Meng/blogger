import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return(
      <div className='form-group'>
        <label> {field.label} </label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
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



        </form>
      </div>
    );
  }
}

function validate() {
  
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' //has to be unique, name of the form to distingush different forms on the same page
})(PostsNew);
