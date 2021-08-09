import { PanelPlugin } from '@grafana/data';
import { SearchOptions } from './types';
import { App } from 'components/App';

export const plugin = new PanelPlugin<SearchOptions>(App).setPanelOptions(builder => {
  return builder.addNumberInput({
    path: 'limit',
    name: 'Search Limit',
    description: 'Limit search results',
    defaultValue: 50,
    settings: {
      max: 50,
      min: 1,
    },
  });
});
