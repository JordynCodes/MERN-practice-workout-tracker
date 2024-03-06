import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">
                            <h1>Log in</h1>
                        </Link>
                        <Link to="/signup">
                            <h1>Sign up</h1>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
     );
}
 
export default Navbar;