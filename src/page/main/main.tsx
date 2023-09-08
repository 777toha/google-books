import './main.css';
import { useAppSelector } from '../../redux/typeHooks';
import { Link } from 'react-router-dom';

const Main = () => {
    const books = useAppSelector(state => state.book.books);

    return (
        <div className='main'>
            <h4>{`Found ${books?.length} result`}</h4>
            <div className='main__container'>{books?.map((book, index) => (
                <div key={index} className='main__book'>
                    <Link to={`/book/${index}`}>
                        <img
                            className='main__img'
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            alt='img'
                        />
                    </Link>
                    <div className='main__text-container'>
                        <p className='main__subject'>{book.volumeInfo.categories}</p>
                        <p className='main__title'>{book.volumeInfo.title}</p>
                        <p className='main__subtitle'>{book.volumeInfo.authors?.join(', ')}</p>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}

export default Main;