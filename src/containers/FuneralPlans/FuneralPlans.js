import React, { Component } from 'react';

import './FuneralPlans.css';
import funerals from  '../../components/data/funeral';
import PackageLayout from '../../components/Packages/PackageLayout';
import { BrowserRouter, Route} from 'react-router-dom'
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
          <BrowserRouter>
            <div className="Funeral">
              <PackageLayout>
                <Route path="/compare-plan" exact component={Basic} />
                <Route path="/compare-plan/standard" exact component={Standard} />
                <Route path="/compare-plan/perl" exact component={Perl} />
                <Route path="/compare-plan/diamond" exact component={Diamond} />
              </PackageLayout>
            </div>
          </BrowserRouter>
        );
    }
};