import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { DeleteSelectedWidgetsMutation } from './DeleteSelectedWidgetsMutation';

export const REPLACE_WIDGET_MUTATION = gql`
  mutation ReplaceWidget($widget: ReplaceWidget) {
    replaceWidget(widget: $widget) {
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

export const ReplaceWidgetMutation = props =>
  <Mutation mutation={REPLACE_WIDGET_MUTATION}>
    {mutateReplaceWidget => <DeleteSelectedWidgetsMutation {...props}
      onReplaceWidget={widget => mutateReplaceWidget({
        variables: { widget },
        refetchQueries: props.refetchQueries,
      })} />}
  </Mutation>;

ReplaceWidgetMutation.propTypes = {
  refetchQueries: PropTypes.array.isRequired,
};
