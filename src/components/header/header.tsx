import './header.css'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/typeHooks';
import { searchBooks } from '../../redux/slice/bookSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('all');
    const [sorting, setSorting] = useState('relevance');

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSorting(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(searchBooks({
            query: searchText,
            category: category,
            sorting: sorting
        }))
        navigate('/');
    };
    return (
        <div className='main__head'>
                <h1 className='main__head-title'>Search for books</h1>
                <form className='main__head-form' onSubmit={handleSubmit}>
                    <input
                        className='main__head-input'
                        type="text"
                        placeholder="Enter a book title or author"
                        value={searchText}
                        onChange={handleSearchTextChange}
                    />
                    <div>
                        <span>Categories</span>
                        <select value={category} onChange={handleCategoryChange}>
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                        <span>Sorting by</span>
                        <select value={sorting} onChange={handleLanguageChange}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>

                    <button type="submit">Search</button>
                </form>
            </div>
    )
}

export default Header;