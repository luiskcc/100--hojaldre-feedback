"use client";
import { FormEvent } from 'react';
import './star.css';

// Interface definition
export interface FeedbackData {
  rating: number;
  clientName: string;
  emailAddress: string;
  comment: string;
}

// Utility functions
export const redirectToPage = () => {
  window.location.href = "https://search.google.com/local/writereview?placeid=ChIJv_EwTLjNQQwRXhRYGLxQpdY";
};

export const redirectToHomePage = () => {
  window.location.href = "https://senscarespa.com";
};

export const showCommentSection = () => {
  const commentSection = document.querySelector('.comment-section');
  if (commentSection) {
    commentSection.classList.remove('hidden');
  }
};

export const handleSubmit = async (
  e: FormEvent, 
  feedbackData: FeedbackData, 
  setFeedbackData: (data: FeedbackData) => void
) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/manjezar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating: feedbackData.rating,
        name: feedbackData.clientName,
        email: feedbackData.emailAddress,
        message: feedbackData.comment
      })
    });

    if (response.ok) {
      setFeedbackData({
        rating: 0,
        clientName: '',
        emailAddress: '',
        comment: ''
      });
      alert('Gracias por tu feedback!');
      redirectToHomePage();
    } else {
      alert('Hubo un error. Por favor, inténtalo de nuevo.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un error. Por favor, inténtalo de nuevo.');
  }
};