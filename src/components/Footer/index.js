import React from 'react';
import FilterLink from '../FilterLink';
import { Segment, Button, Grid } from 'semantic-ui-react';

const Footer = () => (
  <Segment basic>
    <Grid doubling columns={3}>
      <Grid.Row>
        <Grid.Column>
          <FilterLink filter='all'>
            All
          </FilterLink>
        </Grid.Column>
        <Grid.Column>
          <FilterLink filter='active'>
            Active
          </FilterLink>
        </Grid.Column>
        <Grid.Column>
          <FilterLink filter='completed'>
            Completed
          </FilterLink>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column floated='left'>
          <Button circular fluid disabled>? Items left</Button>
        </Grid.Column>
        <Grid.Column floated='right'>
          <Button circular fluid>Clear completed (?)</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Footer;
