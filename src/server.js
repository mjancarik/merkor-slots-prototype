import render from 'preact-render-to-string';
import { createMerkurWidget } from '@merkur/core';
import layoutFactory from './components/layoutFactory';
import { widgetProperties } from './widget';

export function createWidget(widgetParams) {
  return createMerkurWidget({
    ...widgetProperties,
    ...widgetParams,
    $dependencies: {
      render,
    },
    async mount(widget) {
      const { View, slots } = await layoutFactory();

      return { 
        html: widget.$dependencies.render(View(widget)),
        slots: slots.map((slot) => {
          return { 
            ...slot,
            html: widget.$dependencies.render(slot.View(widget))
          }
        })
      };
    },
  });
}
