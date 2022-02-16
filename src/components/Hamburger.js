import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return <div className='hamburger-menu'>
    <div className='menu-secondary-background-color'></div>
    <div className='menu-layer'>
      <div className='menu-city-background'>

      </div>
      <div className='container'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li><Link to='/opportunities'>Opportunities</Link></li>
                  <li><Link to='/solutions'>Solutions</Link></li>
                  <li><Link to='/contact-us'>Contact us</Link></li>
                </ul>
              </nav>
              <div  className='info'>
                <h3>Our Promise</h3>
                <p>
                Nunc quis venenatis mauris. Nullam molestie, tortor eget volutpat ultrices, lacus velit condimentum massa, at aliquet nisi tellus eget mauris. Donec luctus quam nibh, et mollis felis vulputate vitae. Donec tempus mattis sapien, blandit viverra velit dignissim sed. Curabitur sed est consequat, feugiat nunc a, rutrum neque. Aliquam eleifend leo vitae nisi vehicula facilisis. Donec lacus sem, placerat ut pulvinar in, scelerisque sit amet nisl. Aliquam erat volutpat. Nullam felis sem, convallis vel varius nec, commodo quis dui. Integer vel pretium tortor, eu mattis turpis.
                </p>
              </div>
              <div  className='locatons'>
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>;
};

export default Hamburger;
