import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Style.css';
function FeedbackForm() {
  const navigate = useNavigate();
  const [feedbackText, setFeedbackText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { feedbackText });
    navigate('/Thankyou');
  };
  return (
    <div className="feedback-form-container">
      <h2>Give Feedback</h2>
      <form className="feedback-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="feedbackText">Write your feedback:</label>
          <textarea
            id="feedbackText"
            className="form-control"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm