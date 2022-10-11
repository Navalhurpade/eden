import React from 'react';

export default function StepBadge({ stepNumber = 1, isCompleate = false, isfirst = false, isLast = false }) {
  return (
    <>
      {!isfirst && <div className={`line ${isCompleate ? 'compleate' : ''}`} />}
      <div className={`circle ${isCompleate ? 'compleate' : ''}`}>
        <span className={`${isCompleate ? 'compleate' : ''}`}>{stepNumber}</span>
      </div>
      {!isLast && <div className={`line ${isCompleate ? 'compleate' : ''}`} />}
    </>
  );
}
