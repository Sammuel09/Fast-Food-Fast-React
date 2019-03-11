import React from "react";
import { Card, Placeholder } from "semantic-ui-react";

const OrderCardLoader = () => {
  return (
    <Card fluid style={{ marginTop: "30px" }}>
      <Card.Content>
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="long" />
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

export default OrderCardLoader;
