import React from 'react';

function MyWork() {
  return (
    <article id="my-work">
      <div className="row">
        <h2 className="display-4 col-12 headers">Portfolio</h2>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Little Village</h4>
              <p className="card-text">
                An idle game where users manage their village and gather resources to
                trade with other users, increase their population, or level up.
              </p>
              <p className="card-text">
                MongoDB, React, Express, Node, Apollo Client
              </p>
              <a href="https://github.com/asantercureton/little-village" className="btn card-link links">Source Code</a>
              <a href="https://little-village-10292021.herokuapp.com/" className="btn card-link links">Live Site</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Luxury Rentals</h4>
              <p className="card-text">
                A mock car rental company that allows users to login and make
                car reservations from a multiple locations, each with varying stock
                available.
              </p>
              <p className="card-text">
                Express, Node, MySQL, NoSQL, Sequelize
              </p>
              <a href="https://github.com/AlexWilsonNC/luxury-rentals" className="btn card-link links">Source Code</a>
              <a href="https://luxury-rentals-10-4-2021.herokuapp.com/" className="btn card-link links">Live Site</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Quick Fix Recipe</h4>
              <p className="card-text">
                A recipe website that allows users to search for cocktail and meal recipes
                by name, get randomized recipes, and save recipes using local storage.
              </p>
              <p className="card-text">
                JavaScript, APIs, Local Storage, HTML, CSS
              </p>
              <a href="https://github.com/kerilp/quick-fix-recipe" className="btn card-link links">Source Code</a>
              <a href="https://kerilp.github.io/quick-fix-recipe/" className="btn card-link links">Live Site</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Weather Dashboard</h4>
              <p className="card-text">
                A weather dashboard that allows the user to search for a city by name and displays
                the current weather, a five day forecast, and the user's search history.
              </p>
              <p className="card-text">
                JavaScript, APIs, Local Storage, HTML, CSS
              </p>
              <a href="https://github.com/kerilp/weather-dashboard-exercise" className="btn card-link links">Source Code</a>
              <a href="https://kerilp.github.io/weather-dashboard-exercise/" className="btn card-link links">Live Site</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Code Quiz Challenge</h4>
              <p className="card-text">
                A quiz game where users answer shuffled questions about coding, and
                get time added or subtracted from the timer depending on their correctness.
              </p>
              <p className="card-text">
                JavaScript, Local Storage, HTML, CSS
              </p>
              <a href="https://github.com/kerilp/coding-quiz-challenge" className="btn card-link links">Source Code</a>
              <a href="https://kerilp.github.io/coding-quiz-challenge/" className="btn card-link links">Live Site</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Employee Tracker</h4>
              <p className="card-text">
                A command-line application that manages an employee database. The user can create and
                assign new employees, roles, and departments.
              </p>
              <p className="card-text">
                Node, JavaScript, Inquirer, MySQL
              </p>
              <a href="https://github.com/kerilp/employee-tracker" className="btn card-link no-live">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MyWork;