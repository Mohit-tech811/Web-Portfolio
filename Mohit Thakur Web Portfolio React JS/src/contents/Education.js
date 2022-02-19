import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech(CSE)" where="Lovely Professional Unversity, Punjab" from="Aug 2018-Aug 2022" to="Present"/>
            <Widecard title="12th" where="Disha Public Sr.Sec. School Chauntra, Himachal Pradesh" from="2017" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    