import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { ToolHeader } from '../components/ToolHeader';
import { DeleteWidgetMutation } from '../mutations/DeleteWidgetMutation';

export const APP_QUERY = gql`
  query App {
    toolName @client,
    editWidgetId @client,
    selectedWidgetIds @client,
    widgets {
      id
      name
      description
      color
      size
      price
      quantity
    }
  }
`;

export const AppQuery = props => {

  return <Query query={APP_QUERY}>
    {({ loading, error, data }) => {

      if (loading) return 'Loading...';
      if (error) {
        console.error(error);
        return 'Error...';
      }

      return <React.Fragment>
        <ToolHeader headerText={data.toolName} />
        <DeleteWidgetMutation widgets={data.widgets} {...props}
          editWidgetId={data.editWidgetId}
          selectedWidgetIds={data.selectedWidgetIds} />
      </React.Fragment>;
    }}
  </Query>;

};
