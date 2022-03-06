import React from 'react';
import { Project } from '../../types';

import './button.css';

enum Appearance {
  Dark,
  Light,
  DarkNoPadding,
  LightNoPadding,
  Secondary
}

interface ButtonProp {
  appearance?: Appearance;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode
}

function Button({ appearance, ...props }: ButtonProp) {
  switch (appearance) {
    case Appearance.Light:
    case Appearance.LightNoPadding:
      return <LightButton appearance={appearance} { ...props } />

    case Appearance.Dark:
    case Appearance.DarkNoPadding:
    default:
      return <DarkButton appearance={appearance} { ...props } />
  }
}

function DarkButton({ appearance, onClick, href, disabled, children }: ButtonProp) {
  if (href != null) {
    return (
      <a href={ href } className={`btn btn-dark ${disabled ? 'btn-disabled' : ''} ${appearance === Appearance.DarkNoPadding ? 'btn--noPadding' : ''}`}>
        <span>{ children }</span>
      </a>
    );
  } else {
    return (
      <></>
    );
  }
}

function LightButton({ appearance,  onClick, href, disabled, children }: ButtonProp) {
  if (href != null) {
    return (
      <a href={ href } className={`btn btn-light ${disabled ? 'btn-disabled' : ''} ${appearance === Appearance.LightNoPadding ? 'btn--noPadding' : ''}`}>
        <span>{ children }</span>
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
