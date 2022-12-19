import React, { Component } from 'react';
import { getProducts } from '../dataRepo/fakeProducts';

class Products extends Component {
    state = {
        products: getProducts()
    }

    deleteProduct = (prod) => {
        const remainProducts = this.state.products.filter(p => p.id !== prod.id)

        this.setState(
            { products: remainProducts }
        )
        console.log(remainProducts)
    }

    renderProductsBasedOnCondition = () => {
        if (this.state.products.length == 0) return <h2>There is no Products Available</h2>

        return <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">inStock</th>
                    <th scope="col">price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.products.map(prod =>
                    <tr key={prod.id}>
                        <th scope="row">{prod.id}</th>
                        <td>{prod.title}</td>
                        <td>{prod.stock}</td>
                        <td>{prod.price}</td>
                        <td>
                            <button className='btn btn-danger m-2' onClick={() => this.deleteProduct(prod)}>Delete</button>
                            <button className='btn btn-primary'>Edit</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    }

    render() {
        return (
            <div className='m-5'>
                <h1>All Products</h1>
                {this.renderProductsBasedOnCondition()}
            </div>
        );
    }
}

export default Products;