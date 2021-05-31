import React, { Fragment } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const TableComponent = props => {
  const { column, data, onDeleteRow, onEditRow } = props;
  return (
    <Table basic>
      <Table.Header>
        <Table.Row>
          {column.map(val => (
            <Fragment key={val.id}>
              <Table.HeaderCell>{val.id}</Table.HeaderCell>
              <Table.HeaderCell>{val.email}</Table.HeaderCell>
              <Table.HeaderCell>{val.name}</Table.HeaderCell>
              <Table.HeaderCell>{val.body}</Table.HeaderCell>
              <Table.HeaderCell>{val.action}</Table.HeaderCell>
            </Fragment>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(val => (
          <Table.Row key={val.id}>
            <Table.Cell>{val.id}</Table.Cell>
            <Table.Cell>{val.email}</Table.Cell>
            <Table.Cell>{val.name}</Table.Cell>
            <Table.Cell>{val.body}</Table.Cell>
            <Table.Cell>
              <Button color="green" icon onClick={() => onEditRow(val)}>
                <Icon name="edit" />
              </Button>
              <Button color="red" icon onClick={() => onDeleteRow(val)}>
                <Icon name="delete" />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

TableComponent.propTypes = {
  column: PropTypes.array,
  data: PropTypes.array,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func
};

export default TableComponent;
