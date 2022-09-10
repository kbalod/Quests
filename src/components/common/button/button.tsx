import * as S from './button.styled';

interface ButtonProps {
  children?: any;
  onClick?: (e:React.MouseEvent<HTMLElement>) => void;
  props?:any;
}


function Button({ children, ...props } : ButtonProps) : any {
  return(
  <S.Button {...props}>{children}</S.Button>
  );
}
export default Button;
