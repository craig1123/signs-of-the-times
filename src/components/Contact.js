import React, { Component } from 'react';
import Layout from './Layout';

export default class Contact extends Component {
    state = { }

    render() {
      return (
        <Layout>
          <form action="//formspree.io/craigwalker1123@gmail.com" method="POST">
            <div>
              <textarea name="message" placeholder="message..." maxLength="200" />
            </div>
            <div>
              <button value="Send" id="spree">Send Message</button>
            </div>
          </form>
        </Layout>
      );
    }
}
