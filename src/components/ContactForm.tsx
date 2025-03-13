import { useState } from 'react';
import './ContactForm.css';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{email?: string; message?: string}>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {email?: string; message?: string} = {};
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSending(true);
    
    // Simulate sending email - replace with actual email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSending(false);
    setIsSent(true);
    setTimeout(() => {
      onClose();
      setIsSent(false);
      setEmail('');
      setMessage('');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`background ${isOpen ? 'active' : ''} ${isSent ? 'sent' : ''}`}>
      <div className={`modal ${isOpen ? 'active' : ''} ${isSent ? 'sent' : ''}`}>
        <div className="modal-inner">
          <div className="header">
            <div className="title" />
            <div className="exit" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <hr />
          
          <form onSubmit={handleSubmit} noValidate>
            <div className="email">
              <div className="email-row">
                <label htmlFor="email">From:</label>
                <div className={`text-input ${errors.email ? 'error' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({...errors, email: undefined});
                    }}
                    placeholder="enter your email address..."
                  />
                </div>
              </div>
              {errors.email && (
                <div className="error-message visible">
                  {errors.email}
                </div>
              )}
            </div>
            <hr />
            
            <div className={`text-area ${errors.message ? 'error' : ''}`}>
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors({...errors, message: undefined});
                }}
                placeholder="Write your message..."
                rows={1}
              />
            </div>
            <hr />
            
            <div className="button-area">
              <button type="button" className="cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="send">
                {isSending ? (
                  <>
                    Sending...
                    <div className="caution-processing" />
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
