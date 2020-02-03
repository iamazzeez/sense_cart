import React, { Component } from 'react'
import db from "./firebase";


export default class Products extends Component {
    state = {
    products: [],
    }

componentDidMount(){
db.ref().on('value', (snapshot) => {
    this.setState({
      products: snapshot.val(),
    })
});
}

remove = (product) => {
  console.log(product)
  db.ref(product).remove()
}
    
    render() {
      console.log(this.state.products)
            return (
              <div className='row  m-2 '>
              {Object.values(this.state.products).map((product, index) => (   
              <div className="col-md-4.6 m-4">
              <div className="card">
              <div className="card-body">
              <h4 className="card-title">{product}</h4>
              <button type="button" key={index} class="btn btn-danger" onClick={this.remove.bind(this, index)}>Remove</button>
              </div>
              </div>
    </div>
    
    ))}
    
</div>
)    
    
}
}