'use client'
import React,{useEffect} from 'react';

export default function Test() {
    const [data, setData] = React.useState(null)
const fetchtest = async () => {
    try {
        const res = await fetch('http://rickandmortyapi.com/api/character')
        const data = await res.json()
        console.log(data)
        setData(data.results[1].name)
    }
    catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    fetchtest()
}, [])




	return (
		<div>
			<h1>Hello World</h1>
            <p>i hate the app router</p>
            <p>{data}</p>


		</div>
	);
}
