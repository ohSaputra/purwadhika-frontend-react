import React, { Component } from 'react'

class Product extends Component {
  render() {
    return(
      <section id="product-list">
        <div className="container">
          <h2>List of our Products</h2>
          <p>Humblebrag butcher austin blue bottle letterpress bespoke. Actually pug raw denim poke air plant venmo</p>

          <div className="row">
            <div className="col-6 col-md-4 product-item">
              <img
                src="http://via.placeholder.com/350x350"
                alt="Placholder Text"
                className="img-fluid" />
            </div>

            <div className="col-6 col-md-4 product-item">
              <img
                src="http://via.placeholder.com/350x350"
                alt="Placholder Text"
                className="img-fluid" />
            </div>

            <div className="col-6 col-md-4 product-item">
              <img
                src="http://via.placeholder.com/350x350"
                alt="Placholder Text"
                className="img-fluid" />
            </div>

            <div className="col-6 col-md-4 product-item">
              <img
                src="http://via.placeholder.com/350x350"
                alt="Placholder Text"
                className="img-fluid" />
            </div>

            <div className="col-6 col-md-4 product-item">
              <img
                src="http://via.placeholder.com/350x350"
                alt="Placholder Text"
                className="img-fluid" />
            </div>

            <div className="col-6 col-md-4 product-item">
              <img
                src="http://via.placeholder.com/350x350"
                alt="Placholder Text"
                className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Product