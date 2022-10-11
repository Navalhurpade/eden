import './LandingPage.css';
import React, { useState } from 'react';
import edenLogo from './../../assets/eden_s.png';
import StepBadge from '../../Components/StepBadge';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { ReactComponent as UserLogo } from './../../assets/user.svg';
import { ReactComponent as PeopleLogo } from './../../assets/group.svg';
import tikMarkLogo from './../../assets/tick.png';
import ChoiceBox from '../../Components/ChoiceBox/ChoiceBox';

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
    console.log('called', CurrentStep);
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

function FristSlide({ onClick, data, setData }) {
  return (
    <>
      <span className="title">Welcome! First things first...</span>
      <span className="sub-text">You can always change them later.</span>
      <div className="form-container">
        <Input
          lable="Full Name"
          placeholder="Steve Jobs"
          value={data.fullName}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
        <Input
          lable="Display Name"
          placeholder="steve"
          value={data.displayName}
          onChange={(e) => setData({ ...data, displayName: e.target.value })}
        />
        <Button lable="Create Workspace" onClick={onClick}></Button>
      </div>
    </>
  );
}

function SecandSlide({ onClick, data, setData }) {
  return (
    <>
      <span className="title">Let's set up a home for all your work</span>
      <span className="sub-text">You can always create another workspace later.</span>

      <form action="/">
        <div className="form-container">
          <Input
            lable="Workspace Name"
            placeholder="eden"
            value={data.workspaceName}
            onChange={(e) => setData({ ...data, workspaceName: e.target.value })}
          />
          <Input
            prepend="www.eden.com/"
            placeholder="Example"
            lable={`Workspace URL `}
            isOptional
            value={data.workspaceUrl}
            onChange={(e) => setData({ ...data, workspaceUrl: e.target.value })}
          />
          <Button lable="Create Workspace" onClick={onClick}></Button>
        </div>
      </form>
    </>
  );
}

function ThirdSlide({ onClick, data, setData }) {
  return (
    <>
      <span className="title">How are you planning to use Eden?</span>
      <span className="sub-text">We'll streamline your setup experience acordingly.</span>
      <div className="form-container">
        <div className="choice-box-container">
          <ChoiceBox
            Logo={UserLogo}
            title="For myself"
            subTtile="write better. think more clearly. Stay organized."
            isActive={data.role === 'user'}
            onClick={() => setData({ ...data, role: 'user' })}
          />
          <ChoiceBox
            Logo={PeopleLogo}
            title="With my team"
            subTtile="Wikis, docs, tasks & projects, all in one peice."
            isActive={data.role === 'organization'}
            onClick={() => setData({ ...data, role: 'organization' })}
          />
        </div>
        <Button lable="Create Workspace" onClick={onClick}></Button>
      </div>
    </>
  );
}

function ForthSlide({ onClick, data }) {
  return (
    <>
      <div className="tikMark">
        <img src={tikMarkLogo} alt="tik" />
      </div>
      <span className="title">Congratulations, Eren!</span>
      <span className="sub-text">You have completed onboarding, you start using the Eden!</span>
      <div style={{ width: '350px', marginTop: '20px' }}>
        <Button lable="Lunch Eden" onClick={() => console.log('DATA :: ', data)} />
      </div>
    </>
  );
}
