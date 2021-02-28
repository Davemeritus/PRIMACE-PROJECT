import React from 'react';
// import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&');
// }

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({
  //       'form-name': form.getAttribute('name'),
  //       ...this.state,
  //     }),
  //   })
  //     .then(() => navigate(form.getAttribute('action')))
  //     .catch((error) => alert(error));
  // };

  render() {
    return (
      <Layout>
        <div style={{ backgroundColor: '#2a05b6' }}>


          <div className="hero" style={{ background: '#2a05b6', color: 'white' }}>
            <h1>Contact Us</h1>
            <p>
              Get in touch with our winning team of experts, <br />let's build and grow your brand.
          </p>
          </div>
          <section style={{ background: '#fff', borderRadius: '50px 50px 0 0' }} className='section corner'>
            <div className='container'>
              <div className='content'>

                <form
                  action='mailto:primaceagency@gmail.com'
                  method='post'
                  encType='text/plain'
                >
                  <div className='field'>
                    <label className='label' htmlFor='name'>
                      Your name
                    </label>
                    <div className='control'>
                      <input
                        className='input'
                        type='text'
                        name='name'
                        placeholder='Full Name'
                        required
                        id='name'
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor='email'>
                      Email
                    </label>
                    <div className='control'>
                      <input
                        className='input'
                        type='email'
                        name='email'
                        required
                        id='email'
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor='subject'>
                      Subject
                    </label>
                    <div className='control'>
                      <input
                        className='input'
                        type='text'
                        name='subject'
                        id='subject'
                        required
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor='message'>
                      Message
                    </label>
                    <div className='control'>
                      <textarea
                        className='textarea'
                        name='message'
                        id='message'
                        required
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <button className='button is-link' type='submit'>
                      Send
                    </button>
                  </div>
                </form>
      
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
