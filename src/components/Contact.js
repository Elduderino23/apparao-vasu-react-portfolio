import { React, useState} from 'react';
import { validEmail } from '../utils/helper';
import Stairs from '../images background/Stairs.jpg'
const styles = {
  contactStyles: {
    background: `url(${Stairs})`,
    height: "900px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  textStyle: {
    color: "gold",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue"
  },
  
};
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [formState] = useState('Send')
  const [errorMessage, setErrorMessage] = useState('');
  // const testThis = (e) => {
  //   e.preventDefault()
  //   formReport('Please wait while your input submit')
  //   const { name, email, message } = e.target.elements
  //   let subForm = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  // }
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        return false;
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (!validEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      
      }else{
        setErrorMessage('email submitted')
        return
      }
  
  }

  
  return (
   <section style={styles.contactStyles}>
     <div className="container mt-5">
      <h2 className="mb-3 ContactMe"style={styles.textStyle}>Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name" style={styles.textStyle}>
            Name
          </label>
          <input className="form-control" type="text" id="name"/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email" style={styles.textStyle}>
            Email
          </label>
          <input className="form-control" type="email" id="email" required value={email}
          name="email"
          onChange={handleInputChange}
          placeholder="email" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message" style={styles.textStyle}>
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit" style={styles.textStyle} onClick={handleFormSubmit}>
          {formState}
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
   </section>
  )
}
export default ContactForm