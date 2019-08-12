import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// for Icon Button
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Checkbox
} from "@material-ui/core";
// for icons
import { DeleteOutline, EditOutlined } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

export default function SimpleTableBody(props) {
  const rows = props.data;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox inputProps={{ "aria-label": "select all desserts" }} />
            </TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <TableCell>
                <Checkbox inputProps={{ "aria-labelledby": row.username }} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.duration}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.date.substring(0, 10)}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link className="btn btn-link" to={"/edit/" + row._id}>
                <IconButton variant="extended" color="primary">
                <EditOutlined />
                  </IconButton>
                </Link>{" "}
                <IconButton variant="extended" color="secondary">
                  <DeleteOutline />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
