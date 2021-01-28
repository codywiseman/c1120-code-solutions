import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {isOpen: null}
  }
  handleClick() {
    this.setState({isOpen: event.target.className})
  }
  render() {
    const index = languages.filter(item => item.id === this.props.title);
    return (
      <div className="title-box">
        <h2 className={index[0].id} onClick={this.handleClick}>{index[0].title}</h2>
        <div className={this.state.isOpen === index[0].id ? 'description' : 'description hidden'}>{index[0].description}</div>
      </div>
    )
  }
}



const languages = [
  {
    id: 'html',
    title: 'Hypertext Markup Languge',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for\
        creating web pages and web applications.With Cascading Style Sheets(CSS)\
        and JavaScript, it forms a triad of cornerstone technologies for the World\
        Wide Web.'
  },
  {
    id: 'css',
    title: 'Cascadng Style Sheet',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing\
        the presentation of a document written is a markup language like HTML.CSS\
        is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high- level interpreted programming\
        language that conforms to the ECMAScript specification.JavaScript has\
        curly - bracket syntax, dynamic, typing, prototype - based object - oriented, and\
        first - class functions.'
  }
];

export default Accordion;


/*
 <div>
    <div class="title-box">
      <h2 class="title">Hypertext Markup Languge</h2>
      <div class="description hidden">
        Hypertext Markup Language (HTML) is the standard markup language for
        creating web pages and web applications. With Cascading Style Sheets (CSS)
        and JavaScript, it forms a triad of cornerstone technologies for the World
        Wide Web.
      </div>
    </div>
    <div class="title-box">
      <h2 class="title">Cascading Style Sheets</h2>
      <div class="description hidden">
        Cascading Style Sheets (CSS) is a style sheet language used for describing
        the presentation of a document written is a markup language like HTML. CSS
        is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
      </div>
    </div>
    <div class="title-box">
      <h2 class="title">JavaScript</h2>
      <div class="description hidden">
        JavaScript, often abbreviated as JS, is a high-level interpreted programming
        language that conforms to the ECMAScript specification. JavaScript has
        curly-bracket syntax, dynamic, typing, prototype-based object-oriented, and
        first-class functions.
      </div>
    </div>
  </div>
*/
