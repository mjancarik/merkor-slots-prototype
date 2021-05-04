import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { useContext } from 'preact/hooks';
import WidgetContext from '../../WidgetContext';

export default function Welcome() {
  const widget = useContext(WidgetContext);

  return (
    <div>
      <h1>
        <a href="https://github.com/mjancarik/merkur">MERKUR</a>
      </h1>
      <h2>a tiny extensible javascript library for front-end microservices {widget.state.counter}</h2>
    </div>
  );
}
