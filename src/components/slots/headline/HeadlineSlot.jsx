import { h } from 'preact'; // eslint-disable-line no-unused-vars
import Welcome from './Welcome';
import WidgetDescription from './WidgetDescription';
import WidgetContext from '../../WidgetContext';

export default function HeadlineSlot(widget) {
  if (widget.error && widget.error.status) {
    return null;
  }

  return (
    <WidgetContext.Provider value={widget}>
      <div className="merkur__headline">
        <div className="merkur__view">
          <Welcome />
          <WidgetDescription name={widget.name} version={widget.version} />
        </div>
      </div>
    </WidgetContext.Provider>
  );
}
