import React, { useState, useEffect } from 'react';

function Task1(props) {

    const [sort, setSort] = useState('');
    const [data, setdata] = useState([]);

    const getdata = async () => {
        const responce = await fetch("https://fakestoreapi.com/products");
        const pdata = await responce.json()
        setdata(pdata)
    }

    useEffect(() => {
        getdata();
    })

    const handleSort = (v) => {
        setSort(v);
        let fdata = [];

        fdata = getdata.filter((v, i) => {
            v.title.toLowerCase() || v.price.toString();
        })
        console.log(fdata);

        console.log("Sort");
        if (sort === "a_z") {
            fdata.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "z_a") {
            fdata.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sort === "h_l"){
            fdata.sort((a, b) => a.price - b.price);
        } else if (sort === "l_h") {
            fdata.sort((a, b) => b.price - a.price);
        }
    }

    return (
        <div>
            <select name="" id="" onChange={(e) => handleSort(e.target.value)}>
                <option value="0">--Select to sort</option>
                <option value="a_z">A - Z</option>
                <option value="z_a">Z - A</option>
                <option value="h_l">H - L</option>
                <option value="l_h">L - H</option>
            </select>
        </div>
    );
}

export default Task1;