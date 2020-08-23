import { h } from "preact";
import { TodoType } from "../type";

interface IProps {
  className?: string;
  data: TodoType;
}

export const Item: React.FC<IProps> = (props) => {
  return (
    <div className={props.className}>
      <p>{props.data.todo}</p>
    </div>
  );
};
