import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { DeleteSelectedWidgetsMutation } from './DeleteSelectedWidgetsMutation';

export const DELETE_WIDGET_MUTATION = gql`
mutation DeleteWidget($widgetId: ID) {
  deleteWidget(widgetId: $widgetId) {
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

export const DeleteWidgetMutation = props =>
  <Mutation mutation={DELETE_WIDGET_MUTATION}>
    {mutateDeleteWidget => <DeleteSelectedWidgetsMutation {...props}
      onDeleteWidget={widgetId => mutateDeleteWidget({
        variables: { widgetId },
        refetchQueries: props.refetchQueries,
      })} />}
  </Mutation>;

DeleteWidgetMutation.propTypes = {
  refetchQueries: PropTypes.array.isRequired,
};
