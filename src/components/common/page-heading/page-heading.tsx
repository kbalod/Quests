import * as S from './page-heading.styled';

interface PageHeadingProps {
  children: JSX.Element[] | string;
  props?:any;
}

function PageHeading ({ children, ...props } : PageHeadingProps) : JSX.Element {
  return(
  <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}
export default PageHeading;
