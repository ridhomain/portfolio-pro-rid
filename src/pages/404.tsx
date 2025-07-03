import React from 'react';
import { Result, Button, Space } from 'antd';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { history } from 'umi';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ 
      flex: 1,
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
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
              size="large"
            >
              Go Back
            </Button>
            <Button 
              type="primary" 
              icon={<HomeOutlined />}
              onClick={() => history.push('/')}
              size="large"
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