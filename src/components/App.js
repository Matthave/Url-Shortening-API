import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Shorten from './Shorten';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class App extends Component {

  state = {
    inputValue: '',
    newLink: '',
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })

    this.postUrl(e.target.value)
  }

  addNewShortenLink = () => {
    const shortenLink = document.createElement('div');
    shortenLink.setAttribute('class', 'shortenLink');

    const shortenLinkOld = document.createElement('a');
    shortenLinkOld.setAttribute('class', 'shortenLink__old');
    shortenLinkOld.setAttribute('href', `${this.state.inputValue}`);
    shortenLinkOld.textContent = `${this.state.inputValue}`

    const hr = document.createElement('hr');

    const shortenLinkNew = document.createElement('a');
    shortenLinkNew.setAttribute('class', 'shortenLink__new');
    shortenLinkNew.setAttribute('href', `${this.state.newLink}`);
    shortenLinkNew.textContent = `${this.state.newLink}`

    const shortenLinkBtn = document.createElement('button');
    shortenLinkBtn.setAttribute('class', 'shortenLink__btn');
    shortenLinkBtn.textContent = 'Copy'

    const shortenWrap = document.querySelector('.shortenWrap');

    shortenWrap.appendChild(shortenLink)
    shortenLink.appendChild(shortenLinkOld)
    shortenLink.appendChild(hr)
    shortenLink.appendChild(shortenLinkNew)
    shortenLink.appendChild(shortenLinkBtn)

    this.setState({
      inputValue: '',
      newLink: ''
    })
  }


  postUrl = (link) => {
    const url = 'https://rel.ink/api/links/';

    const sendUrl = {
      url: link
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(sendUrl),
      headers: {
        'content-Type': 'application/json'
      }
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => this.getPromise(data))
  }

  getPromise = (object) => {
    this.setState({
      newLink: `https://rel.ink/${object.hashid}`
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main>
          <Shorten
            handleInputValue={this.handleInputValue}
            inputValue={this.state.inputValue}
            addNewShortenLink={this.addNewShortenLink}
          />
        </main>
      </div>
    );
  }
}

export default App;

// Shorten It!

// Advanced Statistics

// Track how your links are performing across the web with our
// advanced statistics dashboard.

// Brand Recognition

// Boost your brand recognition with each click. Generic links don’t
// mean a thing. Branded links help instil confidence in your content.

// Detailed Records

// Gain insights into who is clicking your links. Knowing when and where
// people engage with your content helps inform better decisions.

// Fully Customizable

// Improve brand awareness and content discoverability through customizable
// links, supercharging audience engagement.

// Boost your links today

// Get Started

// Features

// Link Shortening
// Branded Links
// Analytics

// Resources

// Blog
// Developers
// Support

// Company

// About
// Our Team
// Careers
// Contact