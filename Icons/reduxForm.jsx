import React, { Component } from 'react'



import CardHeader from "components/Card/CardHeader.jsx";
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";

class ReduxForm extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div>
                <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 >teste do teste</h4> 
                <p >Lorem ipsum dolor sit amet 
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Produto"]}
                  tableData={[
                    ["001", "Ryan", "R$36,738", "Calça"],
                    ["2223", "Jhonatas", "R$23,789", "Meia"],
                    ["3115", "Claudemir", "R$56,142", "Skate"],
                    ["4010", "Nathan", "R$38,735", "Camiseta"]
                    ]}
                    />
                </CardBody>
                </Card>
             </GridItem>
            </div>
        )
    }
}

export default ReduxForm