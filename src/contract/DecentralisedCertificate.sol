// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DecentralisedCertificate{
    address [] public teachers;
    address [] public students;
    string [] public certificates;

    mapping (address=>string []) public teacherToCertificate;
    mapping (address=>string []) public studentToCertificate;
    mapping (string=>string) public certificateNoToIpfsHash;

    address admin; //admin of the platform

constructor(){
    admin=msg.sender;
}
//put admin as msg.sender

 function addStudent(address student) public {
     require(msg.sender==admin,"Not Admin Account");
     students.push(student);
 }
//add student

 function addTeacher(address teacher)public {
     require(msg.sender==admin,"Not Admin Account");
     teachers.push(teacher);
 }
//add teacher

  function issueCertificate(address student, string memory ipfsHash,string memory certificateNumber) public {
        teacherToCertificate[msg.sender].push(ipfsHash);
        studentToCertificate[student].push(ipfsHash);
        certificates.push(certificateNumber);
        certificateNoToIpfsHash[certificateNumber]=ipfsHash;
    }//issue certificate

 function verifyCertificate(string memory certificateNo) public view returns(string memory) {
      bool isValid=isValidCertificateNo(certificateNo);
      require(isValid==true, "Not Valid Certificate Number");
      return certificateNoToIpfsHash[certificateNo];
 }//verify certificate by returning ipfs address

 function isValidCertificateNo(string memory certificateNo) public view returns (bool) {
   for(uint i=0;i<certificates.length;i++)
   {
       if(keccak256(abi.encodePacked(certificates[i])) == keccak256(abi.encodePacked(certificateNo)))
       return  true;
   }
   return false;
 }//check if certificate found on the blockchain

}