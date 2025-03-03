import { logDOM } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';

function Product(props) {
    const [data, setdata] = useState([]);
    const [sort, setSort] = useState('');

    const getdata = async () => {
        const responce = await fetch("https://fakestoreapi.com/products");
        const pdata = await responce.json()
        setdata(pdata)
    }

    useEffect(() => {
        getdata();
    })

    const handleSort = (e) => {
        setSort(e);
        console.log(e);

        let fdata = data.filter((v, i) => {
            v.title.toLowerCase() || v.price.toString();
        })
        console.log(fdata);

        if (sort === "a_z") {
            fdata.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "z_a") {
            fdata.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sort === "h_l") {
            fdata.sort((a, b) => a.price - b.price);
        } else if (sort === "l_h") {
            fdata.sort((a, b) => b.price - a.price);
        }
    }

    return (
        <div className='container'>
            <h2 style={{ textAlign: "center" }}>Product</h2>
            <div>
                <select name="" id="" onChange={(e) => handleSort(e.target.value)}>
                    <option value="0">--Select to sort</option>
                    <option value="a_z">A - Z</option>
                    <option value="z_a">Z - A</option>
                    <option value="h_l">H - L</option>
                    <option value="l_h">L - H</option>
                </select>
            </div>
            {
                data.length > 0 ?
                    <div className='row' style={{ textAlign: "center" }}>
                        {
                            data.map((v) => (
                                <div className="card col-3" style={{ border: "2px solid black", borderRadius: "20px", margin: "10px" }} >
                                    <img src={v.image} className="card-img-top" alt="..." style={{ width: "100%", height: "300px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.title}</h5>
                                        <p className="card-text">{v.description.substring(100, 1)}...</p>
                                        <h3>{v.price}</h3>
                                        <a href="#" className="btn btn-primary">Add To Cart</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div> : <p>Loadding...</p>
            }
        </div>
    );
}

export default Product;