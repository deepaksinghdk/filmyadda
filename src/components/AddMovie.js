import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { movieRef } from '../firebase/firebase';
import swal from 'sweetalert';

const AddMovie = () => {
    const [form, setForm] = useState({
        title:"",
        year:"",
        description:"",
        image:""
    });
    const[loading, setLoading] = useState(false);

    const addMovie = async() => {
      setLoading(true);
      await addDoc(movieRef, form);
      swal({
        title: "Successfully added",
        icon: "success",
        buttons: false,
        timer: 3000
      })
      setLoading(false);
    }

  return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font relative">
    <div class="container px-5 py-8 mx-auto">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add New Movie</h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
           <div class="p-2 w-1/2">
             <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400">Title</label>
                <input 
                 value={form.title}
                 onChange={(e) => setForm({...form, title: e.target.value})}
                  type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
             </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-400">Year</label>
            <input 
             value={form.year}
            onChange={(e) => setForm({...form, year: e.target.value})}
            type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="image" class="leading-7 text-sm text-gray-400">Image Link</label>
            <textarea 
            value={form.image}
            onChange={(e) => setForm({...form, image: e.target.value})}
            id="image" name="image" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">Description</label>
            <textarea 
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={addMovie} class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
          {loading ? <TailSpin height={25} color="white"/> : 'Submit'}
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default AddMovie;