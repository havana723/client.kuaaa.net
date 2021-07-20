import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import './style.css';

class FullpageWrapper extends React.Component {
  render() {
    return (
      <ReactFullpage

        navigation
        navigationTooltips={['KUAAA', '관측회', '세미나', 'MT', '출사', '사진전', '연락']}
        anchors={['KUAAA', 'observe', 'seminar', 'MT', 'photo', 'exhibition', 'contact']}
        menu='#landingMenu'

        render={({state, fullpageApi}) => {
          return (
            <div id="fullpage-wrapper">
              <div className="main" id = "main">
                <div className="section main" id="section0">
                  <h3 id="text1">KUAAA 둘러보기</h3>
                </div>
                <div className="section 1" id="section1_1">
                </div>
                <div className="section 2" id="section1_2">
                </div>
                <div className="section 3" id="section1_3">
                </div>
                <div className="section 4" id="section1_4">
                </div>
                <div className="section 5" id="section1_5">
                </div>
                <div className="section foot" id="section2">
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
