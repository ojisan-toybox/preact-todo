import { h } from "preact";
import { styled } from "goober";
import { TodoType } from "../type";

interface IProps {
  className?: string;
  data: TodoType;
}

export const Item: React.FC<IProps> = (props) => {
  console.log(props.data.id);
  return (
    <Wrapper className={props.className}>
      <Text>{props.data.todo}</Text>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding: 12px;
`;

const Text = styled("p")`
  font-size: 1.6rem;
`;
