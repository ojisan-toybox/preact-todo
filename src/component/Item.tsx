import { h } from "preact";
import { TodoType } from "../type";

interface IProps {
  data: TodoType;
}

export const Item: React.FC<IProps> = (props) => {
  return (
    <div>
      <p>{props.data.todo}</p>
    </div>
  );
};
