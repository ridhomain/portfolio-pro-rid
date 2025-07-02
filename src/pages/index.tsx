import React from 'react';
import { Button, Space, Typography, Row, Col, Divider } from 'antd';
import { ArrowRightOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title, Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const { data } = usePortfolio();
  
  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={20} lg={16} xl={14}>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
              {/* Hero Section */}
              <div>
                <Text type="secondary" style={{ fontSize: 16, letterSpacing: 2 }}>
                  WELCOME TO MY PORTFOLIO
                </Text>
              </div>
              
              <Title 
                level={1} 
                style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  marginBottom: 0,
                  fontWeight: 700
                }}
              >
                {data.about.name || 'Ahmad Ridho'}
              </Title>
              
              <Title 
                level={2} 
                type="secondary" 
                style={{ 
                  fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
                  fontWeight: 400,
                  marginTop: 0 
                }}
              >
                {data.about.title || 'Senior Backend Engineer'}
              </Title>
              
              <Paragraph 
                style={{ 
                  fontSize: 18, 
                  maxWidth: 600, 
                  margin: '0 auto',
                  lineHeight: 1.8
                }}
              >
                {data.about.summary || 'Building scalable systems and crafting elegant solutions. Passionate about distributed systems, microservices architecture, and creating impactful software.'}
              </Paragraph>
              
              {/* CTA Buttons */}
              <Space size="large" wrap style={{ marginTop: 32 }}>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={() => history.push('/projects')}
                  style={{ height: 48, paddingInline: 32 }}
                >
                  View My Work
                </Button>
                <Button 
                  size="large"
                  icon={<ArrowRightOutlined />}
                  onClick={() => history.push('/about')}
                  style={{ height: 48, paddingInline: 32 }}
                >
                  Learn More
                </Button>
              </Space>
              
              <Divider style={{ margin: '48px 0' }}>
                <Text type="secondary">Connect With Me</Text>
              </Divider>
              
              {/* Social Links */}
              <Space size="large">
                {data.contact.email && (
                  <Button 
                    type="text" 
                    icon={<MailOutlined style={{ fontSize: 24 }} />}
                    href={`mailto:${data.contact.email}`}
                    style={{ color: 'inherit' }}
                  />
                )}
                {data.contact.github && (
                  <Button 
                    type="text" 
                    icon={<GithubOutlined style={{ fontSize: 24 }} />}
                    href={data.contact.github.startsWith('http') ? data.contact.github : `https://github.com/${data.contact.github}`}
                    target="_blank"
                    style={{ color: 'inherit' }}
                  />
                )}
                {data.contact.linkedin && (
                  <Button 
                    type="text" 
                    icon={<LinkedinOutlined style={{ fontSize: 24 }} />}
                    href={data.contact.linkedin.startsWith('http') ? data.contact.linkedin : `https://linkedin.com/in/${data.contact.linkedin}`}
                    target="_blank"
                    style={{ color: 'inherit' }}
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