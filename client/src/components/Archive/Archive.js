import React from 'react';
import { Media } from 'react-bootstrap';

class Archive extends React.Component {
    render () {
        return (
            <Media>
            <Media.Left>
              <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media Heading</Media.Heading>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        );
    }
};
export default Archive;