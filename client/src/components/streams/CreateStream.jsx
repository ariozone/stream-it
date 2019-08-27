import React from "react"
import { Field, reduxForm } from "redux-form"

class CreateStream extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div className='field'>
        <label htmlFor={input.name}>{label}</label>
        <input {...input} />
      </div>
    )
  }
  onSubmit = values => {
    console.log(values)
  }

  render() {
    return (
      <form
        className='ui form'
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
export default reduxForm({
  form: "CreateStream"
})(CreateStream)
