import React, { Component } from 'react';

import './FuneralPlans.css';
import funerals from  '../../components/data/funeral';
import PackageLayout from '../../components/Packages/PackageLayout';
import { HashRouter, Route} from 'react-router-dom'
import Basic from '../../components/Packages/Basics/Basics';
import Standard from "../../components/Packages/Standard/Standard";
import Perl from "../../components/Packages/Perl/Perl";
import Diamond from "../../components/Packages/Diamond/Diamond";



export default class FuneralPlans extends Component{
    state={
        funeralplan: funerals
    }
    render(){
        return (
          <HashRouter>
            <div className="Funeral">
              <PackageLayout>
                <Route path="/agent" exact component={Basic} />
                <Route path="/agent/standard" exact component={Standard} />
                <Route path="/agent/perl" exact component={Perl} />
                <Route path="/agent/diamond" exact component={Diamond} />
              </PackageLayout>
            </div>
          </HashRouter>
        );
    }
};