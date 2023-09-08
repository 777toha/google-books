import './bookDetails.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/typeHooks';

const BookDetails = () => {
    const { index } = useParams<{ index?: string }>();
    const books = useAppSelector(state => state.book.books);
    const bookIndex = parseInt(index || '0', 10);
    const book = books[bookIndex];

    return (
        <div className='book__details'>
            <div className='book__details-img'>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="img" />
            </div>
            <div className='book__details-text'>
                <h4>{book.volumeInfo.categories}</h4>
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors?.join(', ')}</p>
                <div>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
