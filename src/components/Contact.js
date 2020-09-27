import Axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./index.css";

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
      }
    }

    
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }
        )
    }

    handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
        disabled: true,
        emailSent: false
      });

      Axios.post('https://localhost:3030/api/email', this.state)
        .then(res => {
          if(res.data.success) {
            this.setState({
              disabled: false,
              emailSent: true
            });
          } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
        .catch(err => {
          console.log(err);

          this.setState({
            disabled: false,
            emailSent: false
          })
        })
    }

    render () {
      return (
        <div className="py-12 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h3 className="leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-10 lg:text-center">
                        Contact Me
                    </h3>
                </div>
                <br />
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">Full Name</Form.Label>
                    <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                  </Form.Group>

                  <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                  </Form.Group>

                  <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                    Send
                  </Button>

                  
                  {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                  {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}


                </Form>

            </div>
        </div>
      )
    }
}

export default ContactForm;