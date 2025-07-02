import React from 'react';
import { Typography, Row, Col, Card, Statistic, Space, Timeline, Avatar } from 'antd';
import { UserOutlined, CodeOutlined, ProjectOutlined, TrophyOutlined } from '@ant-design/icons';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  return (
    <div className="section">
      <div className="container">
        <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
          About Me
        </Title>
        
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={8}>
            <Avatar 
              size={280} 
              icon={<UserOutlined />}
              style={{ 
                display: 'block',
                margin: '0 auto',
                backgroundColor: '#f3f4f6'
              }}
            />
          </Col>
          
          <Col xs={24} md={16}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={3}>Crafting Digital Excellence</Title>
                <Paragraph style={{ fontSize: 16 }}>
                  {data.about.description || 'With over 9 years of experience in software engineering, I specialize in building robust backend systems and scalable architectures.'}
                </Paragraph>
                <Paragraph style={{ fontSize: 16 }}>
                  {data.about.expertise || 'My expertise spans across multiple programming languages and frameworks, with a focus on creating efficient, maintainable, and innovative solutions.'}
                </Paragraph>
              </div>
              
              <Row gutter={[16, 16]}>
                <Col xs={12} sm={8}>
                  <Card bordered={false} style={{ textAlign: 'center' }}>
                    <Statistic 
                      title="Experience" 
                      value={data.about.yearsExperience || 9} 
                      suffix="years"
                      prefix={<CodeOutlined />}
                    />
                  </Card>
                </Col>
                <Col xs={12} sm={8}>
                  <Card bordered={false} style={{ textAlign: 'center' }}>
                    <Statistic 
                      title="Projects" 
                      value={data.about.projectsCompleted || 50} 
                      suffix="+"
                      prefix={<ProjectOutlined />}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card bordered={false} style={{ textAlign: 'center' }}>
                    <Statistic 
                      title="Technologies" 
                      value={data.about.technologies || 15} 
                      suffix="+"
                      prefix={<TrophyOutlined />}
                    />
                  </Card>
                </Col>
              </Row>
            </Space>
          </Col>
        </Row>

        {/* Career Timeline */}
        <Title level={3} style={{ marginTop: 64, marginBottom: 32 }}>
          Career Journey
        </Title>
        <Card bordered={false}>
          <Timeline
            items={[
              {
                children: (
                  <div>
                    <Title level={5}>Senior Backend Engineer</Title>
                    <Paragraph type="secondary">Current Position</Paragraph>
                    <Paragraph>
                      Leading backend architecture and development for enterprise-scale applications.
                    </Paragraph>
                  </div>
                ),
              },
              {
                children: (
                  <div>
                    <Title level={5}>Full Stack Developer</Title>
                    <Paragraph type="secondary">2018 - 2021</Paragraph>
                    <Paragraph>
                      Developed end-to-end solutions for various clients across different industries.
                    </Paragraph>
                  </div>
                ),
              },
              {
                children: (
                  <div>
                    <Title level={5}>Junior Developer</Title>
                    <Paragraph type="secondary">2015 - 2018</Paragraph>
                    <Paragraph>
                      Started my journey in software development, learning and growing rapidly.
                    </Paragraph>
                  </div>
                ),
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;