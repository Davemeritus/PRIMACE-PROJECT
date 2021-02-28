import React from 'react';
import Layout from '../../components/Layout';

const Contact =  () => {
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
    <form action="mailto:someone@example.com" method="post" enctype="text/plain">
      Name:<br>
      <input type="text" name="name"/><br />
      E-mail:<br>
      <input type="text" name="mail"/><br />
      Comment:<br>
      <input type="text" name="comment" size="50"/><br /><br />
      <button type="submit">Submit </button>
      <input type="reset" value="Reset"/>
      </form>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Contact
