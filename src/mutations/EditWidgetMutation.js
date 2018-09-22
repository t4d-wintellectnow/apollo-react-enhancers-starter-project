import React from 'react';
import PropTypes from 'prop-types';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { WidgetTable } from '../components/WidgetTable';

export const EditWidgetMutation = props =>
  <ApolloConsumer>
    {client => {

      const editWidget = widgetId => {
        client.writeQuery({
          query: gql`query EditWidgetId { editWidgetId @client }`,
          data: { editWidgetId: widgetId },
        });
      };

      const cancelWidget = () => editWidget('-1');

      return <WidgetTable widgets={props.widgets}
        editWidgetId={props.editWidgetId}
        selectedWidgetIds={props.selectedWidgetIds}
        onDeleteWidget={props.onDeleteWidget} onEditWidget={editWidget}
        onCancelWidget={cancelWidget} onSaveWidget={props.onReplaceWidget}
        onDeleteSelectedWidgets={() => props.onDeleteSelectedWidgets(props.selectedWidgetIds)}
        onAddSelectedWidgetId={props.onAddSelectedWidgetId}
        onRemoveSelectedWidgetId={props.onRemoveSelectedWidgetId} />;
    }}
  </ApolloConsumer>;

EditWidgetMutation.propTypes = {
  widgets: PropTypes.array.isRequired,
  editWidgetId: PropTypes.string.isRequired,
  selectedWidgetIds: PropTypes.array.isRequired,
  onDeleteWidget: PropTypes.func.isRequired,
  onReplaceWidget: PropTypes.func.isRequired,
  onAddSelectedWidgetId: PropTypes.func.isRequired,
  onRemoveSelectedWidgetId: PropTypes.func.isRequired,
  onDeleteSelectedWidgets: PropTypes.func.isRequired,
};
