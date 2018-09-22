import * as React from 'react';

import { AppQuery, APP_QUERY } from './queries/AppQuery';
import { InsertWidgetMutation } from './mutations';
import { WidgetInsertedSubscription, WidgetDeletedSubscription } from './subscriptions';

import './App.css';

export class App extends React.Component {

  render() {

    const refetchQueries = [{ query: APP_QUERY }];

    return <React.Fragment>
      <section id="notifications">
        <WidgetInsertedSubscription refetchQueries={refetchQueries} />
        <WidgetDeletedSubscription refetchQueries={refetchQueries} />
      </section>
      <AppQuery refetchQueries={refetchQueries} />
      <InsertWidgetMutation refetchQueries={refetchQueries} />

    </React.Fragment>;
  }
}
