import { h } from 'preact'; // eslint-disable-line no-unused-vars
import WidgetContext from './WidgetContext';
import Counter from './Counter';
import ErrorView from './ErrorView';

export default function View(widget) {
  if (widget.error && widget.error.status) {
    return <ErrorView error={widget.error} />;
  }

  return (
    <WidgetContext.Provider value={widget}>
      <div className="merkur__page">
        <div className="merkur__view">
          <Counter counter={widget.state.counter} />
        </div>
      </div>
    </WidgetContext.Provider>
  );
}
