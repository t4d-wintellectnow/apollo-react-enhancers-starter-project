import * as React from 'react';

import { ToolNameQuery, WidgetsQuery, WIDGETS_QUERY } from './queries';
import { InsertWidgetMutation } from './mutations';
import { WidgetInsertedSubscription, WidgetDeletedSubscription } from './subscriptions';

export class App extends React.Component {

  render() {

    const refetchQueries = [{ query: WIDGETS_QUERY }];

    return <React.Fragment>
      <WidgetInsertedSubscription refetchQueries={refetchQueries} />
      <WidgetDeletedSubscription refetchQueries={refetchQueries} />
      <ToolNameQuery />
      <WidgetsQuery refetchQueries={[{ query: WIDGETS_QUERY }]} />
      <InsertWidgetMutation refetchQueries={refetchQueries} />
    </React.Fragment>;
  }
}
