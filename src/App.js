import * as React from 'react';

import { AppQuery, APP_QUERY } from './queries/AppQuery';
import { InsertWidgetMutation } from './mutations';
import { WidgetInsertedSubscription, WidgetDeletedSubscription } from './subscriptions';

export class App extends React.Component {

  render() {

    const refetchQueries = [{ query: APP_QUERY }];

    return <React.Fragment>
      <WidgetInsertedSubscription refetchQueries={refetchQueries} />
      <WidgetDeletedSubscription refetchQueries={refetchQueries} />
      <AppQuery refetchQueries={refetchQueries} />
      <InsertWidgetMutation refetchQueries={refetchQueries} />
    </React.Fragment>;
  }
}
