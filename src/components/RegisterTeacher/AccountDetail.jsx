
const AccountDetail = ({account}) => {
  return (
    <div className="accountDetails">
    <p>Public Key: {account?.address}</p>
    <p>Private Key: {account?.privateKey}</p>
  </div> 
  )
}

export default AccountDetail