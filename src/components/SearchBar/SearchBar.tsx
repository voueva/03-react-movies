import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSubmit: (value: string) => void;
}
  
function SearchBar({ onSubmit }: SearchBarProps) {
    const handleSubmit = (formData: FormData) => {
        const query = formData.get("query") as string;
        if (query === '') {
            toast.error("Please enter your search query.");
        } else {
            onSubmit(query);
        }
    };
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form action={handleSubmit} className={styles.form}>
                    <input
                        className={styles.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}

export default SearchBar