import React, {Component} from "react";
<<<<<<< HEAD
import FormContainer from "./HomeContainer";
||||||| merged common ancestors
import FormContainer from "./FormContainer";
=======
import HomeContainer from "./HomeContainer";
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98
import forkImage from "../../public/styles/images/fork.png";


export default class App extends Component {

  render() {
    return (
        <div className="main">
<<<<<<< HEAD
            <article>
                <FormContainer/>
            </article>
            <nav>
                <a href={"https://github.com/alisaitbilgi/GithubBadge-React-Redux"}>
                    <img className="forkImage" alt="fork-me" src={forkImage} />
                </a>
            </nav>
            <aside />
||||||| merged common ancestors
            <article>
                <FormContainer/>
            </article>
            <nav>
                <a href={"https://github.com/alisaitbilgi"}>
                    <img className="forkImage" alt="fork-me" src={forkImage} />
                </a>
            </nav>
            <aside />
=======
            <div className="sidebar">
              <a href={"https://github.com/alisaitbilgi/GithubBadge-React-Redux"}>
                <img className="fork-image" alt="fork-me" src={forkImage} />
              </a>
            </div>
            <div className="article">
                <HomeContainer/>
            </div>
            <div className="sidebar"></div>
>>>>>>> cefce5133a5783ddd6e9563fbbfd252a9fcbbc98
        </div>
    );
  }
}

