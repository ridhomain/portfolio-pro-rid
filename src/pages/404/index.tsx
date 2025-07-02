import React from 'react';
import { Result, Button, Space } from 'antd';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { history } from 'umi';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 64px)', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Result
        status="404"
        title="404"
        subTitle="Oops! The page you're looking for doesn't exist."
        extra={
          <Space>
            <Button 
              icon={<ArrowLeftOutlined />}
              onClick={() => history.back()}
            >
              Go Back
            </Button>
            <Button 
              type="primary" 
              icon={<HomeOutlined />}
              onClick={() => history.push('/')}
            >
              Back Home
            </Button>
          </Space>
        }
      />
    </div>
  );
};

export default NotFoundPage;