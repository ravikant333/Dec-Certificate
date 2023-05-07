import { Link } from 'react-router-dom';
import './RandomUser.css';

const RandomUser = () => {
    return (
        <div className='randomUser'>
            <Link to="verifyCertificate">Verify Certificate</Link>
        </div>
    )
}

export default RandomUser