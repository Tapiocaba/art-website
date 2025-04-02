import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">     
           <p className="contact-p">
            School: lisalin@college.harvard.edu
            <br />
            Personal: lisa.zz.lin@gmail.com
            <br />
            Engineering: <a href="https://lisalin.dev" target="_blank" rel="noopener noreferrer">lisalin.dev</a>
            <br />
            {/* Instagram TODO */}
           </p>
      </div>
    </div>
  );
};