import React, {Component} from "react";
import FormContainer from "./FormContainer";


const forkImage = require("../../public/styles/images/fork.png");

class App extends Component {

  render() {
    return (
        <div className="main">
            <article>
                <FormContainer/>
            </article>
            <nav>
                <a href={"https://github.com/alisaitbilgi"}>
                    <img className="forkImage" src={forkImage} alt="empty"/>
                </a>
            </nav>
            <aside />
        </div>
    );
  }
}

export default App;
