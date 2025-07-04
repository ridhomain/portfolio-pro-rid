// src/pages/index.tsx
import React from 'react';
import { Button, Space, Typography, Row, Col, Divider } from 'antd';
import { ArrowRightOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { usePortfolio } from '@/hooks/usePortfolio';
import Loading from '@/components/Loading';

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const { data, loading } = usePortfolio();
  
  if (loading) {
    return <Loading tip="Loading portfolio..." />;
  }
  
  return (
    <div style={{ 
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{ 
        textAlign: 'center',
        maxWidth: '800px',
        width: '100%'
      }}>
        <Text 
          type="secondary" 
          style={{ 
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '16px'
          }}
        >
          Welcome to my portfolio
        </Text>
        
        <Title 
          level={1} 
          style={{ 
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            marginBottom: '8px',
            fontWeight: 700,
            lineHeight: 1.2
          }}
        >
          {data.about.name || 'Ahmad Ridho'}
        </Title>
        
        <Title 
          level={2} 
          type="secondary" 
          style={{ 
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            fontWeight: 400,
            marginTop: 0,
            marginBottom: '24px'
          }}
        >
          {data.about.title || 'Senior Backend Engineer'}
        </Title>
        
        <Paragraph 
          style={{ 
            fontSize: '16px', 
            maxWidth: '600px', 
            margin: '0 auto 32px',
            lineHeight: 1.7,
            color: 'rgba(0, 0, 0, 0.65)'
          }}
        >
          {data.about.summary || 'Building scalable systems and crafting elegant solutions. Passionate about distributed systems, microservices architecture, and creating impactful software.'}
        </Paragraph>

        {/* CTA Buttons - Stack on mobile */}
        <Space 
          size="middle" 
          wrap
          style={{ justifyContent: 'center', marginBottom: '48px' }}
        >
          <Button 
            type="primary" 
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={() => history.push('/projects')}
            style={{ 
              minWidth: '160px',
              height: '48px'
            }}
          >
            View Projects
          </Button>
          <Button 
            size="large"
            onClick={() => history.push('/contact')}
            style={{ 
              minWidth: '160px',
              height: '48px'
            }}
          >
            Get in Touch
          </Button>
        </Space>

        <Divider style={{ margin: '32px 0' }} />

        {/* Social Links */}
        {/* <Space size="large" wrap>
          {data.contact.github && (
            <Button
              type="text"
              icon={<GithubOutlined style={{ fontSize: '20px' }} />}
              href={`https://github.com/${data.contact.github}`}
              target="_blank"
              size="large"
            />
          )}
          {data.contact.linkedin && (
            <Button
              type="text"
              icon={<LinkedinOutlined style={{ fontSize: '20px' }} />}
              href={`https://linkedin.com/in/${data.contact.linkedin}`}
              target="_blank"
              size="large"
            />
          )}
          {data.contact.email && (
            <Button
              type="text"
              icon={<MailOutlined style={{ fontSize: '20px' }} />}
              href={`mailto:${data.contact.email}`}
              size="large"
            />
          )}
        </Space> */}
      </div>
    </div>
  );
};

export default HomePage;