import * as S from './page-subtext.styled';

interface PageSubtextProps {
  children: JSX.Element | string;
  props?:any;
}

function PageSubtext ({ children, ...props } : PageSubtextProps) : JSX.Element { 
  return(
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
  );
}
export default PageSubtext;
