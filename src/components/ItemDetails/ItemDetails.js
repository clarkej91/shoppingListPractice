import React, {Component} from 'react';
import { Button, Collapse, DropdownItem , Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render(){
    return (
      <div>
      <Button
        className="item-details-button"
        bsStyle="link"
        onClick={() => this.setState({open: !this.state.open })}
      >
      { this.state.open === false ? `See` : `Hide `} item details
      {this.state.open === false ? ` +` : ` -`}
      </Button>
      <Collapse in={this.state.open}>
        <div>
          <DropdownItem>
                <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                />
                <Media.Body>
                  <p>Racing Style Leather Gaming Chair, Red</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`} </strong>
                      <strong className="price-strike"> {`$${this.props.price}`}
                      </strong>
                    </Col>
                    <Col md={6}> Qty: 1</Col>
                  </Row>
                </Media.Body>
          </DropdownItem>
        </div>
      </Collapse>
      </div>
    )
  }
}
