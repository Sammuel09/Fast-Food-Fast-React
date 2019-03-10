import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';

const MenuCardLoader = () => {
  return (
    <Card fluid style={{ marginTop: '30px' }}>
      <Placeholder>
        <Placeholder.Image style={{ height: 200, width: '100%' }} />
      </Placeholder>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Card.Content>
    </Card>
  );
};

export default MenuCardLoader;
