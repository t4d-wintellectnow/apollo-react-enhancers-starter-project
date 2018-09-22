import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { AddSelectedWidgetIdMutation } from './AddSelectedWidgetIdMutation';

export const DELETE_SELECTED_WIDGETS_MUTATION = gql`
  mutation DeleteSelectedWidgetsMutation($widgetIds: [ID]) {
    deleteWidgets(widgetIds: $widgetIds) {
      id
    }
  }
`;

export const DeleteSelectedWidgetsMutation = props =>
  <Mutation mutation={DELETE_SELECTED_WIDGETS_MUTATION}>
    {mutateDeleteWidgets => <AddSelectedWidgetIdMutation {...props}
      onDeleteSelectedWidgets={widgetIds =>
        mutateDeleteWidgets({
          variables: { widgetIds },
          refetchQueries: props.refetchQueries,
        })} />}
  </Mutation>;

DeleteSelectedWidgetsMutation.propTypes = {
  refetchQueries: PropTypes.array.isRequired,
};
