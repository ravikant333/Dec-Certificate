import "./Certificate.css";

const Certificate = ({ data }) => {

  const { certificateNo,
    issuedTo,
    issuedBy,
    issueDate,
    description,
    validity,
    image } = data;
  const cid = image?.substring(7);
  return (
    <div className="certificateContainer">
      <img
        src={`https://ipfs.io/ipfs/${cid}`}
        alt="Certificate"
        style={{ height: "400px", width: "350px" }}
      />
      <section className="certificateField">
        <p>Certificate Number:</p>
        <p>{certificateNo}</p>
      </section>
      <section className="certificateField">
        <p>Issued To:</p>
        <p>{issuedTo}</p>
      </section>
      <section className="certificateField">
        <p>Issued By:</p>
        <p>{issuedBy}</p>
      </section>
      <section className="certificateField">
        <p>Issue Date:</p>
        <p>{issueDate}</p>
      </section>
      <section className="certificateField">
        <p>Validity:</p>
        <p>{validity}</p>
      </section>
      <section className="certificateField">
        <p>Description:</p>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default Certificate;
