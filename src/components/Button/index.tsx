import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './button.module.css';

enum Appearance {
  Dark,
  Light,
  DarkNoPadding,
  LightNoPadding,
  Secondary,
}

interface ButtonProp {
  appearance?: Appearance;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

function Button({ appearance, ...props }: ButtonProp): JSX.Element {
  switch (appearance) {
    case Appearance.Light:
    case Appearance.LightNoPadding:
      return <LightButton appearance={appearance} {...props} />;

    case Appearance.Dark:
    case Appearance.DarkNoPadding:
    default:
      return <DarkButton appearance={appearance} {...props} />;
  }
}

function DarkButton({ appearance, onClick, href, disabled, children }: ButtonProp): JSX.Element {
  const { locale } = useRouter();

  if (href != null) {
    return (
      <Link
        href={href}
        locale={locale}
        className={`${style.btn} ${style['btn-dark']} ${disabled ? style['btn-disabled'] : ''} ${
          appearance === Appearance.DarkNoPadding ? style['btn--noPadding'] : ''
        }`}
      >
        <span>{children}</span>
      </Link>
    );
  } else {
    return <></>;
  }
}

function LightButton({ appearance, onClick, href, disabled, children }: ButtonProp): JSX.Element {
  const { locale } = useRouter();

  if (href != null) {
    return (
      <Link
        href={href}
        locale={locale}
        className={`${style.btn} ${style['btn-light']} ${disabled ? style['btn-disabled'] : ''} ${
          appearance === Appearance.LightNoPadding ? 'btn--noPadding' : ''
        }`}
      >
        <span>{children}</span>
      </Link>
    );
  } else {
    return <></>;
  }
}

Button.appearances = Appearance;

export default Button;
