import React from 'react';
import { Link } from 'react-router-dom';

function BookCard(props) {
    const book=props.book
    return (
       <article className='shadow-md'>
        <Link to={`/books/${book._id}`}><img className='w-full aspect-[3/4]' src={book.thumbnail} alt="{book.title}" /></Link>
        <div className='px-2 pb-4'>
        <h3 className='font-bold text-lg mt-2'>{book.title}</h3>
        <span>{book.author.author}</span>
        </div>
       </article>
    );
}

export default BookCard;