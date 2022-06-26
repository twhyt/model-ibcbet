import styled from "styled-components";

function Container(props: any) {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export default Container;