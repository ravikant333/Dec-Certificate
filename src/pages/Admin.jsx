import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
    return (
        <div className='admin'>
            <h3>Welcome Admin</h3>
            <div className='adminActivity'>
                <Link to='registerStudent'>Register Student</Link>
                <Link to='registerTeacher'>Register Teacher</Link>
            </div>
        </div>
    )
}

export default Admin