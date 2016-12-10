var React = require('react');
var {Link, IndexLink} = require('react-router');


var Navigation = () => {
     return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
                     
            <li>
              <Link to="/"> Timer</Link>
            </li>
             <li>
              <Link to="/">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created By <a href="#" target="_blank" >Urip</a>
              </li>   
                                
            </ul>
      
        </div>
      </div>
    );
};

module.exports = Navigation;
