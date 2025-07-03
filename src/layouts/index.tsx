import React, { useState } from 'react';
import { Outlet, useLocation, history } from 'umi';
import { Layout, Menu, ConfigProvider, Typography, Space, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { theme } from '@/utils/theme';
import type { MenuProps } from 'antd';
import styles from './index.less';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const BasicLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems: MenuProps['items'] = [
    { key: '/', label: 'Home' },
    { key: '/about', label: 'About' },
    { key: '/skills', label: 'Skills' },
    { key: '/projects', label: 'Projects' },
    { key: '/contact', label: 'Contact' },
  ];

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    history.push(key);
    setMobileMenuOpen(false);
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.headerContainer}>
            <Space 
              className={styles.logo}
              onClick={() => history.push('/')}
              style={{ cursor: 'pointer' }}
              size="small"
            >
              <img 
                src="/favicon-32x32.png" 
                alt="Logo" 
                style={{ width: 32, height: 32 }}
              />
              <Typography.Title 
                level={4} 
                style={{ margin: 0 }}
                className={styles.logoText}
              >
                Ahmad Ridho
              </Typography.Title>
            </Space>
            
            {/* Desktop Menu */}
            <Menu
              mode="horizontal"
              items={menuItems}
              selectedKeys={[location.pathname]}
              onClick={handleMenuClick}
              className={styles.desktopMenu}
            />
            
            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileMenuOpen(true)}
              className={styles.mobileMenuButton}
              size="large"
            />
          </div>
        </Header>
        
        {/* Mobile Menu Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          width={280}
          styles={{
            body: { padding: 0 }
          }}
        >
          <Menu
            mode="vertical"
            items={menuItems}
            selectedKeys={[location.pathname]}
            onClick={handleMenuClick}
            style={{ border: 'none' }}
          />
        </Drawer>
        
        <Content className={styles.content}>
          <Outlet />
        </Content>
        
        <Footer className={styles.footer}>
          <Text type="secondary">
            © 2024 Ahmad Ridho. All rights reserved.
          </Text>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default BasicLayout;