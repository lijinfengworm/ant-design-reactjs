import React from 'react';
import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 className="welcome-text">
          欢迎访问航数智能.
          <br />
          项目介绍
        </h1>
      </div>
    );
  }

}

export default Welcome;
