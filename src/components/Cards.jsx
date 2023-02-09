import React , { useEffect, useState} from 'react'
import ReactStars from 'react-stars'
import { ThreeCircles } from 'react-loader-spinner';
import {getDocs} from 'firebase/firestore'
import {movieRef} from '../firebase/firebase'
import { Link } from 'react-router-dom'
 
const Cards = () => {

    const [data, setData] = useState([ ]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      async function getData(){
        setLoading(true);

        const _data = await getDocs(movieRef);
        _data.forEach((doc) => {
          setData((prv) => [...prv , {...doc.data(), id: doc.id}])
        })
        setLoading(false);
      }
      getData();
    },[])

  return (
    <div className='flex flex-wrap justify-between px-3 m-3'>
    {loading ? <div className='flex justify-center items-center w-full h-96'><ThreeCircles height={40} color="white"/></div> :
      data.map((e,i) => {
        return(
         <Link to={`/details/${e.id}`}><div key={i} className='cards shadow-lg p-2 hover:-translate-y-2 cursor-pointer mt-4'>
            <img className="h-60 md:h-72" src= {e.image} alt="Movie" />
            <h1><span className= 'text-yellow-400'> Name : </span>{e.title}</h1>
            <h1><span className= 'text-yellow-400'> Year : </span>{e.year}</h1>
            <h1 className='flex items-center'><span className= 'text-yellow-400'> Rating : </span>
            <ReactStars 
                size={20}
                half= {true}
                value= {5}
                edit={false}
            />
            </h1>
        </div> </Link>
      )})}
    </div>
  )
}

export default Cards;