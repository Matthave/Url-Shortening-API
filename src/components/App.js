import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Shorten from './Shorten';
import Stats from './Stats';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class App extends Component {

  state = {
    inputValue: '',
    newLink: '',
    navFlag: true,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY;

      if (scrollHeight > 100) {
        this.setState({
          navFlag: false,
        })
      } else {
        this.setState({
          navFlag: true,
        })
      }
    })
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
    // const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

    // var regex = new RegExp(expression);

    // if (expression.match(regex)) {
    //   alert("Successful match");
    // } else {
    //   alert("No match");
    // }
    this.postUrl(e.target.value)
  }

  addNewShortenLink = () => {
    const { inputValue, newLink } = this.state;
    const catchErr = document.querySelector('.shorten__invalid');
    if (inputValue === '') {
      document.querySelector('.shorten__input').style.border = "1px solid red"
      catchErr.textContent = "Invalid URL value. Value can't be 0"

    } else if (inputValue.length < 8) {
      document.querySelector('.shorten__input').style.border = "1px solid red"
      catchErr.textContent = 'Invalid URL value. Value must be longer then 8'

    } else if (inputValue.length > 8 && newLink !== '') {
      document.querySelector('.shorten__input').style.border = "none"
      catchErr.textContent = ''
      const shortenLink = document.createElement('div');
      shortenLink.setAttribute('class', 'shortenLink');

      const shortenLinkOld = document.createElement('a');
      shortenLinkOld.setAttribute('class', 'shortenLink__old');
      shortenLinkOld.setAttribute('href', `${inputValue}`);
      shortenLinkOld.setAttribute('target', `_blank`);
      shortenLinkOld.setAttribute('rel', `noopener noreferrer`);
      shortenLinkOld.textContent = `${inputValue}`

      const hr = document.createElement('hr');

      const shortenLinkNew = document.createElement('a');
      shortenLinkNew.setAttribute('class', 'shortenLink__new');
      shortenLinkNew.setAttribute('href', `${newLink}`);
      shortenLinkNew.setAttribute('target', `_blank`);
      shortenLinkNew.setAttribute('rel', `noopener noreferrer`);
      shortenLinkNew.textContent = `${newLink}`

      const shortenLinkBtn = document.createElement('button');
      shortenLinkBtn.setAttribute('class', 'shortenLink__btn');
      shortenLinkBtn.textContent = 'Copy'
      shortenLinkBtn.addEventListener('click', (e) => this.copy(e))

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

  copy = (e) => {
    const currentShortenLink = e.target.parentNode;
    const txt = currentShortenLink.children[2].textContent;
    this.copyToClp(txt)

    e.target.style.backgroundColor = 'hsl(257, 27%, 26%)';
    e.target.textContent = 'Copied!'
  }


  copyToClp = (txt) => {
    txt = document.createTextNode(txt);
    let m = document;
    let w = window;
    let b = m.body;
    b.appendChild(txt);
    if (b.createTextRange) {
      let d = b.createTextRange();
      d.moveToElementText(txt);
      d.select();
      m.execCommand('copy');
    }
    else {
      let d = m.createRange();
      let g = w.getSelection;
      d.selectNodeContents(txt);
      g().removeAllRanges();
      g().addRange(d);
      m.execCommand('copy');
      g().removeAllRanges();
    }
    txt.remove();
  }

  render() {
    return (
      <div className="App">
        {this.state.navFlag ? <Nav /> : null}
        <Header />
        <main>
          <Shorten
            handleInputValue={this.handleInputValue}
            inputValue={this.state.inputValue}
            addNewShortenLink={this.addNewShortenLink}
          />
          <Stats />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;