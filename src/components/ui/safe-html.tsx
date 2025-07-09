import React from 'react';
import { sanitizeHtml } from '@/utils/security';

interface SafeHtmlProps {
  html: string;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

/**
 * SafeHtml component that sanitizes HTML content before rendering
 * This replaces dangerous dangerouslySetInnerHTML usage
 */
export const SafeHtml: React.FC<SafeHtmlProps> = ({ 
  html, 
  className = '', 
  tag: Tag = 'div' 
}) => {
  const sanitizedHtml = sanitizeHtml(html);
  
  return (
    <Tag 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

/**
 * SafeText component for displaying user-generated text content
 */
interface SafeTextProps {
  text: string;
  className?: string;
  maxLength?: number;
}

export const SafeText: React.FC<SafeTextProps> = ({ 
  text, 
  className = '',
  maxLength = 1000
}) => {
  // Sanitize and truncate text
  const sanitizedText = text
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, maxLength);
    
  return (
    <span className={className}>
      {sanitizedText}
    </span>
  );
};