import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import { createStream } from "../../actions"

class CreateStream extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error)
      return (
        <div className='ui error message'>
          <div className='header '>{error}</div>
        </div>
      )
  }
  renderInput = ({ input, label, meta }) => {
    console.log(meta)
    return (
      <div className={`field + ${meta.error && meta.touched ? "error" : ""}`}>
        <label htmlFor={input.name}>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }
  onSubmit = values => {
    console.log(values)
  }

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
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

export default connect(
  null,
  { createStream }
)(
  reduxForm({
    form: "CreateStream",
    validate
  })(CreateStream)
)
