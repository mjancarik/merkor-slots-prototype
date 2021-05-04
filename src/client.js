import { render, hydrate } from 'preact';
import { unmountComponentAtNode } from 'preact/compat';
import { createMerkurWidget, createMerkur } from '@merkur/core';
import layoutFactory from './components/layoutFactory';
import { widgetProperties } from './widget';
import style from './style.css'; // eslint-disable-line no-unused-vars

function createWidget(widgetParams) {
  return createMerkurWidget({
    ...widgetProperties,
    ...widgetParams,
    $dependencies: {
      render,
      hydrate,
      unmountComponentAtNode,
    },
    async mount(widget) {
      const { View, slots } = await layoutFactory();

      function hydrate(el) {
        const container = document.querySelector(el.props.containerSelector);

        if (container && container.children.length) {
          return widget.$dependencies.hydrate(el.View(widget), container);
        }

        return widget.$dependencies.render(el.View(widget), container);
      }

      hydrate({ ...widget, View });
      slots.map(hydrate);

      return {};
    },
    unmount(widget) {
      // TODO unmount slots
      const container = document.querySelector(widget.props.containerSelector);

      widget.$dependencies.unmountComponentAtNode(container);

      return {}
    },
    async update(widget) {
      const { View, slots } = await layoutFactory();

      function update(el) {
        const container = document.querySelector(el.props.containerSelector);

        return widget.$dependencies.render(el.View(widget), container);
      }

      update({ ...widget, View });
      slots.map(update);

      return {};
    },
  });
}

const merkur = createMerkur();
merkur.register({
  ...widgetProperties,
  createWidget,
});
