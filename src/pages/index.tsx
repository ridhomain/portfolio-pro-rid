import React from 'react';
import { Button, Space, Typography, Row, Col, Divider } from 'antd';
import { ArrowRightOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const { data } = usePortfolio();
  
  return (
    <div style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="container">
        {/* Hero Section - Mobile-first */}
        <Row 
          justify="center" 
          align="middle" 
          style={{ 
            minHeight: 'calc(100vh - 64px)',
            paddingTop: '48px',
            paddingBottom: '48px' 
          }}
        >
          <Col xs={24} sm={24} md={20} lg={18} xl={16}>
            <Space 
              direction="vertical" 
              size="large" 
              style={{ width: '100%', textAlign: 'center' }}
            >
              <Text 
                type="secondary" 
                style={{ 
                  fontSize: '14px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Welcome to my portfolio
              </Text>
              
              <Title 
                level={1} 
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  marginBottom: 0,
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
                style={{ justifyContent: 'center' }}
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

              <Divider style={{ margin: '48px 0 32px' }} />

              {/* Social Links */}
              <Space size="large" wrap>
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
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;