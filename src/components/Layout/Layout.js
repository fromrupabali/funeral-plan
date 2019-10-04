import React from 'react';

import Navigation from '../../components/Navigation/NavigationItems/NavigationItems';
import './Layout.css';
import Modal from '../UI/Modal/Modal';
import RequestForm from '../RequestForm/RequestForm';

const layout = (props) => (
        <div>
          <div className="navbar">
            <Navigation />
          </div>
          <Modal show={props.show} clicked={props.clicked}>
           <RequestForm clicked={props.clicked} />
          </Modal>
          <main>{props.children}</main>
        </div>
      );

export default  layout;