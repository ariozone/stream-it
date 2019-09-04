import React from "react"
import { Field, reduxForm } from "redux-form"

class Form extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error)
      return (
        <div className='ui error message'>
          <div className='header '>{error}</div>
        </div>
      )
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field + ${meta.error && meta.touched ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }
  onSubmit = values => {
    this.props.onSubmit(values)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    )
  }
}
const validate = formValues => {
  const errors = {}

  if (!formValues.title) errors.title = "Title is required!"
  if (!formValues.description) errors.description = "Description is required!"

  return errors
}
export default reduxForm({
  form: "streamForm",
  validate
})(Form)
