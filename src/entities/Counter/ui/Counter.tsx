import { useDispatch, useSelector } from "react-redux";

import { Button } from "shared/ui";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">value: {counterValue}</h1>
      <Button data-testid="increment" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
export default Counter;
