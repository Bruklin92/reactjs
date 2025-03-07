import React, { useEffect, useState } from 'react';

function Product(props) {
    const [data, setdata] = useState([]);
    const [serch, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCaragry] = useState([]);
    const [selectcat, setSelectCat] = useState('');
    const [rate, setRate] = useState('');

    const getdata = async () => {
        const responce = await fetch("https://fakestoreapi.com/products");
        const pdata = await responce.json()

        const uniqdata = [];
        setdata(pdata)
        pdata.map((v) => {
            if (!uniqdata.includes(v.category)) {
                uniqdata.push(v.category);
            }
        })
        console.log(uniqdata);
        setCaragry(uniqdata);
    }

    useEffect(() => {
        getdata();
    }, [])

    const filterdata = () => {
        const fdata = data.filter((v) =>
            v.title.toLowerCase().includes(serch.toLowerCase()) ||
            v.description.toLowerCase().includes(serch.toLowerCase()) ||
            v.price.toString().includes(serch)
        );

        const sdata = fdata.sort((a, b) => {
            if (sort === 'a_z') {
                return a.title.localeCompare(b.title)
            } else if (sort === "z_a") {
                return b.title.localeCompare(a.title)
            } else if (sort === "h_l") {
                return b.price - a.price
            } else if (sort === "l_h") {
                return a.price - b.price
            }
        })

        if (selectcat) {
            const cdata = sdata.filter((v) => v.category === selectcat);

            return cdata;
        }
        return sdata;
    }

    const finaldata = filterdata();

    return (
        <div className='container'>
            <h2 style={{ textAlign: "center" }}>Product</h2>
            <input type='search' placeholder='Search...' onChange={(e) => setSearch(e.target.value)}></input>
            {
                category.map((v) => (
                    <button onClick={() => setSelectCat(v)} style={{
                        backgroundColor: v === selectcat ? "green" : "white",
                        color: selectcat === v ? "white" : "black",
                    }}>{v}</button>
                ))
            }

            <button onClick={() => setSelectCat()}
                style={{
                    backgroundColor: selectcat ? "white" : "green",
                    color: selectcat ? "black" : "white",
                }}>All</button>

            <div>
                <select name="" id="" onChange={(e) => setSort(e.target.value)}>
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
                            finaldata.map((v) => (
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