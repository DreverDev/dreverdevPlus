import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  date: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  date,
}) => (
  <div>
    <h1>New Contact</h1>
    <ul>
      <li><strong>Name: </strong>{name}</li>
      <li><strong>Email: </strong>{email}</li>
      <li><strong>Message: </strong>{message}</li>
      <li><strong>Mail sent: </strong>{date}</li>
    </ul>
  </div>
);