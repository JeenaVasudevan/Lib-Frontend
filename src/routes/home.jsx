import React from 'react';
import BookCard from '../components/BookCard';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    const response=await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books`)
    const books=response.data
    return { books };
  }
function Home(props) {
    const {books}=useLoaderData()
    return (
        <main>
            <section>
            <h1 className='text-2xl font-bold'>Recommended Reads</h1>
            <div className='grid grid-cols-3 gap-4 mt-8'>
            {
                books.map(book=>{
                    return(
                        <BookCard key={book._id} book={book}/>
                    )
                })
            }
            </div>
            </section>
        </main>
    );
}

export default Home;