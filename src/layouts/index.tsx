import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, history } from 'umi';
import { Layout, Menu, ConfigProvider, Typography, Space } from 'antd';
import { theme } from '@/utils/theme';
import type { MenuProps } from 'antd';
import styles from './index.less';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const BasicLayout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuProps['items'] = [
    {
      key: '/',
      label: 'home',
    },
    {
      key: '/about',
      label: 'about',
    },
    {
      key: '/skills',
      label: 'skills',
    },
    {
      key: '/projects',
      label: 'projects',
    },
    {
      key: '/contact',
      label: 'contact',
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    history.push(key);
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout className={styles.layout}>
        <Header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
          <div className={styles.headerContainer}>
            <Space 
              className={styles.logo}
              onClick={() => history.push('/')}
              style={{ cursor: 'pointer' }}
              size="small"
            >
              <img 
                src="/favicon-32x32.png" 
                alt="Duck Logo" 
                style={{ 
                  width: 32, 
                  height: 32,
                  marginTop: -2 
                }}
              />
              <Typography.Title 
                level={4} 
                style={{ margin: 0, color: '#2d2d2d' }}
              >
                ridho's portfolio
              </Typography.Title>
            </Space>
            <Menu
              mode="horizontal"
              items={menuItems}
              selectedKeys={[location.pathname]}
              onClick={handleMenuClick}
              style={{ 
                flex: 1,
                minWidth: 0,
                background: 'transparent', 
                border: 'none',
                justifyContent: 'flex-end'
              }}
            />
          </div>
        </Header>
        
        <Content className={styles.content}>
          <Outlet />
        </Content>
        
        <Footer style={{ textAlign: 'center', padding: '24px 50px' }}>
          <Text type="secondary">
            © 2024 Ahmad Ridho Portfolio. All rights reserved.
          </Text>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default BasicLayout;