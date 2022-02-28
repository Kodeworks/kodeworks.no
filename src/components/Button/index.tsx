import { Project } from '../../types';

import './button.css';

enum Appearance {
  Dark,
  Light,
  Secondary
}

interface MainButtonProp {
  text: string;
  appearance?: Appearance;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
};

interface ButtonProp {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

function Button({ appearance, ...props }: MainButtonProp) {
  switch (appearance) {
    case Appearance.Light:
      return <LightButton { ...props } />

    case Appearance.Dark:
    default:
      return <DarkButton { ...props } />
  }
}

function DarkButton({ text, onClick, href, disabled }: ButtonProp) {
  if (href != null) {
    return (
      <a href={ href } className={`btn btn-dark ${disabled ? 'btn-disabled' : ''}`}>
        <span>{ text }</span>
      </a>
    );
  } else {
    return (
      <></>
    );
  }
}

function LightButton({ text, onClick, href, disabled }: ButtonProp) {
  if (href != null) {
    return (
      <a href={ href } className={`btn btn-light ${disabled ? 'btn-disabled' : ''}`}>
        <span>{ text }</span>
      </a>
    );
  } else {
    return (
      <></>
    );
  }
}

Button.appearances = Appearance;

export default Button;
