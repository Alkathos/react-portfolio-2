import React from "react";
import Card from "react-bootstrap/Card";

import Laugh from '../img/laugh_gen.png';
import Readme from '../img/readme-gen.png';
import Recipe from '../img/recipe.png';
import Travlr from '../img/travlr.png';
import Note from '../img/note-taker.png';
import Book from '../img/book-search.png';

const bgColor ='#3c8dad';

function Project() {
    return (
      <div>
        <div className='container'>
          <div className="row">
              <div class="col card-margin">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Book} />
                  <Card.Body>
                    <Card.Title>Book Search</Card.Title>
                    <Card.Text>
                    Book search that follows the MERN stack. You can look up books and save them to a list so you can purchase them when you can't.
                    </Card.Text>
                    <Card.Link href='https://github.com/Alkathos/book-search-MERN-rebuild' className='project-link'>GitHub</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col card-margin">
               <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Note} />
                  <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Text>
                    A simple not taking app where you can store and delete previously written notes.
                    </Card.Text>
                    <Card.Link href='https://github.com/Alkathos/Note-Taker' className='project-link'>GitHub</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col card-margin">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Laugh} />
                  <Card.Body>
                    <Card.Title>Laugh Generator</Card.Title>
                    <Card.Text>
                    This is a simple joke and meme generator that used a joke and meme API. You are also allowed to specify if you want to filter the content as well.
                    </Card.Text>
                    <Card.Link href='https://github.com/Alkathos/Laugh-Generator' className='project-link'>Github</Card.Link>
                    <Card.Link href='https://alkathos.github.io/Laugh-Generator/' className='project-link'>Deployment</Card.Link>
                  </Card.Body>
                </Card>
              </div>
          </div>
        </div>
        <div className='container'>
          <div className="row">
              <div class="col card-margin">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Readme} />
                  <Card.Body>
                    <Card.Title>README Generator</Card.Title>
                    <Card.Text>
                    README generator that you can create using Node to reduce the amount of time you need to spend on making one! a dev's best friend!
                    </Card.Text>
                    <Card.Link href='https://github.com/Alkathos/README-Generator' className='project-link'>GitHub</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col card-margin">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Recipe} />
                  <Card.Body>
                    <Card.Title>Recipe and Cookbook</Card.Title>
                    <Card.Text>
                    A recipe website that utilizes a database to store log ins and recipes.
                    You can also look up recipes and it will look through a food API to help you find what you are looking for and how to cook it as well.
                    </Card.Text>
                    <Card.Link href='https://github.com/Alkathos/Recipe-Project' className='project-link'>GitHub</Card.Link>
                    <Card.Link href='https://cryptic-dusk-68462.herokuapp.com/' className='project-link'>Deployment</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col card-margin">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Travlr} />
                  <Card.Body>
                    <Card.Title>Travlr</Card.Title>
                    <Card.Text>
                    Travlr is a traveling solution and community hub that helps recommend places to those looking for something to do in their area.
                    As a user you can add a location and give it a certain category.
                    </Card.Text>
                    <Card.Link href='https://github.com/Alkathos/travlr' className='project-link'>GitHub</Card.Link>
                    <Card.Link href='https://travlr-proj.herokuapp.com/' className='project-link'>Deployment</Card.Link>
                  </Card.Body>
                </Card>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;