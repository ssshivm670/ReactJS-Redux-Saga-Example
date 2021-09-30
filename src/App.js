import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { Card } from "@material-ui/core";

export default function App() {
  const storeState = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Card>
        <div>{JSON.stringify(storeState)}</div>
        <Counter />
      </Card>
    </div>
  );
}
