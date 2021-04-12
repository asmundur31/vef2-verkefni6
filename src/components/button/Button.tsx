import classnames from 'classnames';
import s from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export function Button({ children, onClick, disabled = false }: Props): JSX.Element {
  if (disabled) {
    return (
      <div className={s.button__loading}>Fetching...</div>
    );
  }
  return (
    <button
      className={classnames(s.button, { [s.disabled]: disabled })}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
