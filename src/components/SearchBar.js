function SearchBar({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();

       onSubmit('cars');
    };


 

    return ( <div>
        <form onSubmit={handleSubmit}>
        <input />
        </form>
    </div>
    );

   
}

export default SearchBar;