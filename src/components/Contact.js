import React from 'react'
const SubmitForm = () => {
  const [formState, formReport] = React.useState('Send')
  const sentIn = (e) => {
    e.preventDefault()
    formReport('Please wait while your input submit')
    const { name, email, message } = e.target.elements
    let subForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(subForm)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Submit</h2>
      <form sentIn={sentIn}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formState}
        </button>
      </form>
    </div>
  )
}
export default SubmitForm