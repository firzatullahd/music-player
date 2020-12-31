// eslint-disable-next-line
import react from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)} >
                Library    <FontAwesomeIcon className="library-toggle" icon={faMusic} size="2x" />
            </button>
        </nav>
    );
}

export default Nav;