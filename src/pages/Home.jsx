import './Home.css'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BlockchainContext } from '../context/BlockchainConnecter'
import LoginWithMetamask from '../components/MetamaskLogin'
import { getUserAccount } from '../utils/createEthAccount'
import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import RandomUser from './RandomUser'

const Home = () => {
    const [userAccount, setUserAccount] = useState(null)
    const [userType, setUserType] = useState('random')
    const { contractInstance } = useContext(BlockchainContext);

    const checkUserType = async () => {
        const isStudent = await contractInstance.methods.isValidStudent(userAccount).call();
        console.log('stude', isStudent)
        if (isStudent) {
            setUserType("student");
            return;
        }
        const isTeacher = await contractInstance.methods.isValidTeacher(userAccount).call();
        if (isTeacher) {
            setUserType("teacher")
            return;
        }
        if (userAccount == '0x4da4088a9E341E912C22671BbC3F4416571256B0') {
            setUserType("admin")
            return;
        }
    }

    const getAccount = async () => {
        const userAccount = await getUserAccount();
        setUserAccount(userAccount);
    }

    window.ethereum?.on("accountsChanged", async function() {
       await getAccount();
        if (userAccount)
            checkUserType();
    });

    useEffect(() => {
        getAccount()
    })

    useEffect(() => {
        if (userAccount)
            checkUserType();
    })


    return (
        <div className='home'>
            <LoginWithMetamask />
            <Link to="verifyCertificate">Verify Certificate</Link>


            {
                !userAccount && <p className='connectText'>Please Connect Your Wallet <br />To Proceed.</p>}

            {userType == 'admin' && userAccount && <Admin />}

            {userType == 'student' && userAccount && <Student />}

            {userType == 'teacher' && userAccount && <Teacher />}

        </div>
    )
}

export default Home