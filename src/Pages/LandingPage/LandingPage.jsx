import './LandingPage.css';
import React, { useState } from 'react';
import edenLogo from './../../assets/eden_s.png';
import StepBadge from '../../Components/StepBadge/StepBadge';
import { ForthSlide, FristSlide, SecandSlide, ThirdSlide } from '../../Components/FormSlides/FormSlide';

let steps = [
  { count: 1, Component: FristSlide },
  { count: 2, Component: SecandSlide },
  { count: 3, Component: ThirdSlide },
  { count: 4, Component: ForthSlide },
];

export default function LandingPage() {
  const [CurrentStep, setCurrentStep] = useState(steps[0]);
  const [data, setData] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    role: '',
  });

  const increaseStepCount = () => {
    if (CurrentStep.count === 4) return;
    setCurrentStep(steps[CurrentStep.count]);
  };

  return (
    <section className="layout-container">
      <div className="container">
        <div className="logo">
          <img alt="logo" src={edenLogo}></img>
          <span>Eden</span>
        </div>
        <div className="progress-bar">
          {steps.map((step) => {
            return (
              <StepBadge
                key={step.count}
                stepNumber={step.count}
                isCompleate={step.count <= CurrentStep.count}
                isfirst={step.count === 1}
                isLast={step.count === 4}
              />
            );
          })}
        </div>
        <CurrentStep.Component onClick={increaseStepCount} data={data} setData={setData} />
      </div>
    </section>
  );
}
