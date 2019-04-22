import React, { Component } from "react";
import marked from "marked";

class Main extends Component {
  state = {
    markdown: ""
  };

  updateMarkdown = function(markdown) {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);

    //tomar el contenido del input
    //procesarlo con marked
    //devolverlo en el output.

    return (
      <main>
        <textarea
          componentClass="textarea"
          id="editor"
          rows="10"
          cols="50"
          value={markdown}
          onChange={event => this.updateMarkdown(event.target.value)}
          placeholder="Escribí algo."
        />
        <p id="output"> Output</p>
        <div
          id="preview"
          //dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        >
          {marked(markdown)}
        </div>
      </main>
    );
  }
}

export default Main;
