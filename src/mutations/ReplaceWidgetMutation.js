import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { DeleteWidgetMutation } from './DeleteWidgetMutation';

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
    {mutateReplaceWidget => <DeleteWidgetMutation {...props}
      onReplaceWidget={widget => mutateReplaceWidget({
        variables: { widget },
        refetchQueries: props.refetchQueries,
        update: (store) => {
          store.writeQuery({
            query: gql`query EditWidgetIdQuery { editWidgetId @client }`,
            data: { editWidgetId: '-1' },
          });
        },
      })} />}
  </Mutation>;

ReplaceWidgetMutation.propTypes = {
  refetchQueries: PropTypes.array.isRequired,
};
