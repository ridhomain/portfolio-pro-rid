// src/components/Loading.tsx
import React from 'react';
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface LoadingProps {
  tip?: string;
  size?: 'small' | 'default' | 'large';
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  tip = 'Loading...', 
  size = 'large',
  fullScreen = true 
}) => {
  const spinIcon = <LoadingOutlined style={{ fontSize: size === 'large' ? 48 : 24 }} spin />;
  
  const content = (
    <div style={{ textAlign: 'center' }}>
      <Spin indicator={spinIcon} size={size} />
      <div style={{ marginTop: 16 }}>
        <Text type="secondary" style={{ fontSize: size === 'large' ? 16 : 14 }}>
          {tip}
        </Text>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 144px)'
      }}>
        {content}
      </div>
    );
  }

  return content;
};

export default Loading;