import * as S from './container.styled';

type ContainerProps  = {
  children: React.ReactNode
}

function Container({ children, ...props } : ContainerProps) : JSX.Element {
   return(
  <S.Container {...props}>{children}</S.Container>
  );
}

export default Container;
