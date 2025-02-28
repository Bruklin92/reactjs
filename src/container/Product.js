import { logDOM } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';

function Product(props) {
    const [data, setdata] = useState([]);

    const getdata = async () => {
        const responce = await fetch("https://fakestoreapi.com/products");
        const pdata = await responce.json()
        console.log(pdata);
        setdata(pdata)
    }

    useEffect(() => {
        getdata();
    })

    return (
        <div className='container'>
            {
                data.length > 0 ?
                    <div className='row'>
                        {
                            data.map((v) => (

                                <div className="card col-4" >
                                    <img src={v.image} className="card-img-top" alt="..." style={{ width: "100%", height: "300px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.title}</h5>
                                        <p className="card-text">{v.description.split('-')[3]}</p>
                                        <h3>{v.price}</h3>
                                        <a href="#" className="btn btn-primary">Add To Cart</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div> :
                    <p>Loadding...</p>
            }
        </div>
    );
}

export default Product;