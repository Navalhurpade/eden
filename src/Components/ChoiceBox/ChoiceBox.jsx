export default function ChoiceBox({ Logo, title = '', subTtile = '', isActive = false, ...rest }) {
  return (
    <div className={`choice-box ${isActive ? 'choice-box-active' : ''}`} {...rest}>
      <div className="logo">
        <Logo className="" />
      </div>
      <span className="choice-box-title">{title}</span>
      <span className="choice-box-sub">{subTtile} </span>
    </div>
  );
}
