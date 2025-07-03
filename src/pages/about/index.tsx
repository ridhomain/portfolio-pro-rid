import React from 'react';
import { Typography, Row, Col, Card, Statistic, Space, Tag, Progress, Spin } from 'antd';
import { 
  CodeOutlined, 
  ProjectOutlined, 
  TrophyOutlined,
  DatabaseOutlined,
  CloudOutlined,
  ToolOutlined,
  ApiOutlined
} from '@ant-design/icons';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title, Paragraph, Text } = Typography;

const AboutPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  if (loading) {
    return (
      <div style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Spin size="large" />
      </div>
    );
  }

  // Icon mapping for skill categories
  const getSkillIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Languages': <CodeOutlined />,
      'Backend': <ApiOutlined />,
      'Frontend': <CodeOutlined />,
      'Database': <DatabaseOutlined />,
      'Cloud': <CloudOutlined />,
      'Tools': <ToolOutlined />,
      'DevOps': <CloudOutlined />,
    };
    return iconMap[category] || <CodeOutlined />;
  };

  return (
    <div style={{ 
      flex: 1,
      overflowY: 'auto',
      padding: '24px'
    }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title 
            level={2} 
            style={{ 
              marginBottom: '8px',
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)'
            }}
          >
            About Me
          </Title>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            Backend Engineer & System Architect
          </Text>
        </div>

        {/* Bio Section */}
        <Card 
          bordered={false} 
          style={{ 
            marginBottom: '32px',
            background: '#fafafa'
          }}
        >
          <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
            {data.about.description || 'With over 9 years of experience in software engineering, I specialize in building robust backend systems and scalable architectures that power modern applications.'}
          </Paragraph>
          <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: 0 }}>
            {data.about.expertise || 'My expertise spans across multiple programming languages and frameworks, with a focus on creating efficient, maintainable, and innovative solutions that solve real-world problems.'}
          </Paragraph>
        </Card>

        {/* Stats Section */}
        <Row gutter={[16, 16]} style={{ marginBottom: '48px' }}>
          <Col xs={24} sm={8}>
            <Card 
              bordered={false} 
              style={{ textAlign: 'center', height: '100%' }}
              bodyStyle={{ padding: '24px' }}
            >
              <CodeOutlined style={{ fontSize: '28px', color: '#165c3b', marginBottom: '12px' }} />
              <Statistic 
                value={data.about.yearsExperience || "9+"} 
                suffix="years"
                valueStyle={{ fontSize: '24px', color: '#165c3b' }}
              />
              <Text type="secondary">Experience</Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card 
              bordered={false} 
              style={{ textAlign: 'center', height: '100%' }}
              bodyStyle={{ padding: '24px' }}
            >
              <ProjectOutlined style={{ fontSize: '28px', color: '#165c3b', marginBottom: '12px' }} />
              <Statistic 
                value={data.about.projectsCompleted || "50+"} 
                valueStyle={{ fontSize: '24px', color: '#165c3b' }}
              />
              <Text type="secondary">Projects Completed</Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card 
              bordered={false} 
              style={{ textAlign: 'center', height: '100%' }}
              bodyStyle={{ padding: '24px' }}
            >
              <TrophyOutlined style={{ fontSize: '28px', color: '#165c3b', marginBottom: '12px' }} />
              <Statistic 
                value={data.about.technologies || "15+"} 
                valueStyle={{ fontSize: '24px', color: '#165c3b' }}
              />
              <Text type="secondary">Technologies</Text>
            </Card>
          </Col>
        </Row>

        {/* Skills Section */}
        <div style={{ marginBottom: '48px' }}>
          <Title level={3} style={{ marginBottom: '24px', textAlign: 'center' }}>
            Technical Skills
          </Title>
          
          {data.skills && data.skills.length > 0 ? (
            <Row gutter={[16, 16]}>
              {data.skills.map((skillCategory: any, index: number) => (
                <Col xs={24} md={12} key={index}>
                  <Card 
                    bordered={false}
                    title={
                      <Space>
                        {getSkillIcon(skillCategory.category)}
                        <Text strong>{skillCategory.category}</Text>
                      </Space>
                    }
                    style={{ height: '100%' }}
                  >
                    <Space size={[8, 8]} wrap>
                      {skillCategory.skills.split(',').map((skill: string) => (
                        <Tag 
                          key={skill.trim()} 
                          color={skillCategory.category === 'Languages' ? 'green' : 'blue'}
                        >
                          {skill.trim()}
                        </Tag>
                      ))}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            // Default skills if no data
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card 
                  bordered={false}
                  title={<Space><CodeOutlined /> <Text strong>Languages</Text></Space>}
                >
                  <Space size={[8, 8]} wrap>
                    <Tag color="green">Golang</Tag>
                    <Tag color="green">Python</Tag>
                    <Tag color="green">JavaScript</Tag>
                    <Tag color="green">TypeScript</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  bordered={false}
                  title={<Space><ApiOutlined /> <Text strong>Backend</Text></Space>}
                >
                  <Space size={[8, 8]} wrap>
                    <Tag color="blue">Node.js</Tag>
                    <Tag color="blue">Django</Tag>
                    <Tag color="blue">FastAPI</Tag>
                    <Tag color="blue">gRPC</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  bordered={false}
                  title={<Space><DatabaseOutlined /> <Text strong>Database</Text></Space>}
                >
                  <Space size={[8, 8]} wrap>
                    <Tag color="blue">PostgreSQL</Tag>
                    <Tag color="blue">MongoDB</Tag>
                    <Tag color="blue">Redis</Tag>
                    <Tag color="blue">Elasticsearch</Tag>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  bordered={false}
                  title={<Space><CloudOutlined /> <Text strong>Cloud & DevOps</Text></Space>}
                >
                  <Space size={[8, 8]} wrap>
                    <Tag color="blue">AWS</Tag>
                    <Tag color="blue">Docker</Tag>
                    <Tag color="blue">Kubernetes</Tag>
                    <Tag color="blue">CI/CD</Tag>
                  </Space>
                </Card>
              </Col>
            </Row>
          )}
        </div>

        {/* Core Competencies */}
        <Card 
          bordered={false}
          title={
            <Title level={3} style={{ marginBottom: 0, textAlign: 'center' }}>
              Core Competencies
            </Title>
          }
          style={{ textAlign: 'center' }}
        >
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={12}>
              <div>
                <Text strong>System Design</Text>
                <Progress percent={90} strokeColor="#165c3b" />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div>
                <Text strong>API Development</Text>
                <Progress percent={95} strokeColor="#165c3b" />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div>
                <Text strong>Database Optimization</Text>
                <Progress percent={85} strokeColor="#165c3b" />
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div>
                <Text strong>Cloud Architecture</Text>
                <Progress percent={80} strokeColor="#165c3b" />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;