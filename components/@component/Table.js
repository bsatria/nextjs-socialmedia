import React, { Fragment } from "react";
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";

const TableComponent = props => {
  const { column, data } = props;
  return (
    <Table basic>
      <Table.Header>
        <Table.Row>
          {column.map(val => (
            <Fragment key={val.id}>
              <Table.HeaderCell>{val.id}</Table.HeaderCell>
              <Table.HeaderCell>{val.title}</Table.HeaderCell>
              <Table.HeaderCell>{val.body}</Table.HeaderCell>
            </Fragment>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(val => (
          <Table.Row key={val.key}>
            <Table.Cell>{val.id}</Table.Cell>
            <Table.Cell>{val.title}</Table.Cell>
            <Table.Cell>{val.body}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

TableComponent.propTypes = {
  column: PropTypes.array,
  data: PropTypes.array
};

export default TableComponent;
