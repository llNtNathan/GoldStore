import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
//import CardHeader from "components/Card/CardHeader.jsx";
import Form from '../Icons/reduxForm'


import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons(props) {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>          
          <Form />
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
