import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
export async function loader({params}) {
    const response=await axios.get(`${import.meta.env.VITE_API_BASE_URL}/books/${params.bookId}`)
    const book=response.data
    return { book };
  }
function Book(props) {
    const{book}= useLoaderData()
    return (
        <main className='container mx-auto'>
         <section className='py-10 grid grid-cols-2 gap-6 items-center'>
         <img className='w-full aspect-[3/4]' src={book.thumbnail} alt="" />
         <div>
            <h3 className='font-bold text-4xl'>{book.title}</h3>
            <span>{book.author.author}</span>
            <p>
            {book.description}
            </p>
         </div>
         </section>
        </main>
    );
}

export default Book;