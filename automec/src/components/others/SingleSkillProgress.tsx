import React, { useEffect, useState } from 'react';

type ProgressData = {
  title: string;
  end: number;
};


const SingleSkillProgress = ({ progress }: { progress: ProgressData }) => {
  const { title, end } = progress

  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    setProgressWidth(end);
  }, [end]);

  return (
    <>
      <div className="skill-progressbar">
        <div className="skill-items">
          <div className="progress-box">
            <span className="skill-title">{title}</span>
            <div className="progress">
              <div className="progress-bar" role="progressbar" data-width={end} style={{ width: `${progressWidth}%` }}>
                <span>{`${end}%`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSkillProgress;