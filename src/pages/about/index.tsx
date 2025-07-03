import React from 'react';
import { Typography, Card, Row, Col, Timeline, Space, Statistic, Divider, Avatar, Tag, Badge } from 'antd';
import { 
  UserOutlined, 
  CodeOutlined, 
  TrophyOutlined, 
  TeamOutlined, 
  CalendarOutlined,
  BankOutlined,
  RocketOutlined,
  BookOutlined,
  BulbOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title, Paragraph, Text } = Typography;

const AboutPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  const stats = [
    {
      title: 'Years Experience',
      value: data.about.yearsExperience || '6',
      suffix: '+',
      icon: <CalendarOutlined />,
      color: '#1890ff'
    },
    {
      title: 'Cost Reduction',
      value: '40',
      suffix: '%',
      icon: <TrophyOutlined />,
      color: '#52c41a'
    },
    {
      title: 'Enterprise Clients',
      value: 'Yamaha, BNI',
      icon: <BankOutlined />,
      color: '#722ed1'
    },
    {
      title: 'Specialization',
      value: 'Backend + Architecture',
      icon: <CodeOutlined />,
      color: '#eb2f96'
    },
  ];

  const experiences = [
    {
      color: '#1890ff',
      dot: <RocketOutlined style={{ fontSize: '16px' }} />,
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Technical Lead</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Current Company • January 2025 - Present</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Leading technical strategy and architecture decisions with focus on backend systems and business impact.
          </Paragraph>
          <div>
            <Tag color="blue">Leadership</Tag>
            <Tag color="green">Architecture</Tag>
            <Tag color="purple">Strategy</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#52c41a',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Fullstack → Backend Specialist</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Current Company • 2021 - December 2024</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Evolved from fullstack to backend focus. Achieved 40% cost reduction through holistic system optimization.
          </Paragraph>
          <div>
            <Tag color="green">Performance</Tag>
            <Tag color="orange">Cost Optimization</Tag>
            <Tag color="blue">Scalability</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#722ed1',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Software Engineer</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Freelance • 2019 - 2021</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Delivered solutions for enterprise clients like Yamaha and BNI, focusing on business process analysis.
          </Paragraph>
          <div>
            <Tag color="purple">Enterprise</Tag>
            <Tag color="cyan">Business Analysis</Tag>
            <Tag color="geekblue">System Design</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#faad14',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Teaching & Business Analyst</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Project-Based • Sep 2018 - Jan 2019</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Applied analytical skills in hybrid role bridging technical and business domains.
          </Paragraph>
          <div>
            <Tag color="gold">Teaching</Tag>
            <Tag color="orange">Analysis</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#eb2f96',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Career Transition</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Bootcamp • July - August 2018</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Intensive training transitioning from Civil Engineering to software development.
          </Paragraph>
          <div>
            <Tag color="magenta">Career Change</Tag>
            <Tag color="red">Fast Learning</Tag>
          </div>
        </div>
      ),
    },
  ];

  const techStack = {
    backend: ['Node.js (Hapi, Fastify)', 'Go', 'Python (Django, Odoo)'],
    frontend: ['React', 'UmiJS', 'Next.js'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'NATS JetStream'],
    microservices: ['NATS', 'NATS JetStream', 'Redis'],
    devops: ['Linux', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GCP'],
    tools: ['Git', 'VS Code', 'Postman', 'Claude AI']
  };

  return (
    <div className="section" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <div className="container">
        {/* Header Section */}
        <Row justify="center" style={{ marginBottom: '48px' }}>
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
              <Avatar 
                size={120} 
                icon={<UserOutlined />} 
                style={{ 
                  margin: '0 auto', 
                  display: 'block',
                  backgroundColor: '#1890ff',
                  fontSize: '48px'
                }}
              />
              <div>
                <Title level={1} style={{ marginBottom: '8px', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                  {data.about.name || 'Ahmad Ridho'}
                </Title>
                <Title level={3} type="secondary" style={{ marginTop: 0, fontWeight: 400 }}>
                  {data.about.title || 'Technical Lead'}
                </Title>
                <Text style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)' }}>
                  Civil Engineering → Software Architecture
                </Text>
              </div>
            </Space>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row gutter={[24, 24]} style={{ marginBottom: '48px' }}>
          {stats.map((stat, index) => (
            <Col xs={12} sm={12} md={6} key={index}>
              <Card 
                hoverable 
                style={{ 
                  textAlign: 'center', 
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
                bodyStyle={{ padding: '24px 16px' }}
              >
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ fontSize: '28px', color: stat.color }}>
                    {stat.icon}
                  </div>
                  {typeof stat.value === 'string' && stat.value.includes(',') ? (
                    <Text strong style={{ fontSize: '14px', display: 'block' }}>
                      {stat.value}
                    </Text>
                  ) : (
                    <Statistic 
                      value={stat.value} 
                      suffix={stat.suffix}
                      valueStyle={{ 
                        fontSize: 'clamp(20px, 4vw, 28px)', 
                        fontWeight: 'bold',
                        color: stat.color
                      }}
                    />
                  )}
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    {stat.title}
                  </Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[32, 32]}>
          {/* About Me Section */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Space>
                  <BulbOutlined style={{ color: '#1890ff' }} />
                  <span>My Story</span>
                </Space>
              } 
              style={{ height: '100%', borderRadius: '12px' }}
              headStyle={{ borderBottom: '2px solid #f0f0f0' }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={4} style={{ color: '#1890ff', marginBottom: '12px' }}>
                    Engineering Mindset Meets Software Innovation
                  </Title>
                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {data.about.description || 'Civil Engineering graduate turned Technical Lead with 6+ years in software development. My engineering background provides exceptional analytical skills for creating business-impactful technical solutions.'}
                  </Paragraph>
                  
                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {data.about.expertise || 'Combining Civil Engineering analytical rigor with fast learning and holistic system understanding. I specialize in backend architecture that delivers measurable business impact.'}
                  </Paragraph>
                </div>

                <Divider />

                <div>
                  <Title level={5} style={{ marginBottom: '16px' }}>
                    <BookOutlined style={{ marginRight: '8px', color: '#52c41a' }} />
                    What Sets Me Apart
                  </Title>
                  <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <div>
                      <Text strong>🏗️ Engineering Foundation:</Text>
                      <br />
                      <Text type="secondary">Civil Engineering degree provides systematic, structural thinking</Text>
                    </div>
                    <div>
                      <Text strong>🎯 Business-Technical Bridge:</Text>
                      <br />
                      <Text type="secondary">Translating business needs into impactful technical solutions</Text>
                    </div>
                    <div>
                      <Text strong>⚡ Rapid Learning:</Text>
                      <br />
                      <Text type="secondary">Fast adaptation while maintaining specialization focus</Text>
                    </div>
                    <div>
                      <Text strong>🔍 Holistic Vision:</Text>
                      <br />
                      <Text type="secondary">Top-notch ability to see and improve systems as a whole</Text>
                    </div>
                  </Space>
                </div>
              </Space>
            </Card>
          </Col>

          {/* Technical Stack */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <Space>
                  <ToolOutlined style={{ color: '#52c41a' }} />
                  <span>Technical Expertise</span>
                </Space>
              } 
              style={{ height: '100%', borderRadius: '12px' }}
              headStyle={{ borderBottom: '2px solid #f0f0f0' }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Badge.Ribbon text="Specialization" color="blue">
                    <div style={{ padding: '8px 0' }}>
                      <Title level={5} style={{ marginBottom: '8px' }}>Backend Development</Title>
                      <Space wrap>
                        {techStack.backend.map(tech => (
                          <Tag key={tech} color="blue">{tech}</Tag>
                        ))}
                      </Space>
                    </div>
                  </Badge.Ribbon>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: '8px' }}>Frontend</Title>
                  <Space wrap>
                    {techStack.frontend.map(tech => (
                      <Tag key={tech} color="cyan">{tech}</Tag>
                    ))}
                  </Space>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: '8px' }}>Databases & Storage</Title>
                  <Space wrap>
                    {techStack.databases.map(tech => (
                      <Tag key={tech} color="green">{tech}</Tag>
                    ))}
                  </Space>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: '8px' }}>Microservices</Title>
                  <Space wrap>
                    {techStack.microservices.map(tech => (
                      <Tag key={tech} color="purple">{tech}</Tag>
                    ))}
                  </Space>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: '8px' }}>DevOps & Cloud</Title>
                  <Space wrap>
                    {techStack.devops.map(tech => (
                      <Tag key={tech} color="orange">{tech}</Tag>
                    ))}
                  </Space>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: '8px' }}>Development Tools</Title>
                  <Space wrap>
                    {techStack.tools.map(tech => (
                      <Tag key={tech} color="geekblue">{tech}</Tag>
                    ))}
                  </Space>
                </div>

                <Divider />

                <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <Text strong style={{ color: '#1890ff' }}>
                    "Strategic specialization in Node.js + Go while staying open to proven tools that enhance backend architecture capabilities"
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Career Journey */}
        <Row style={{ marginTop: '48px' }}>
          <Col xs={24}>
            <Card 
              title={
                <Space>
                  <RocketOutlined style={{ color: '#722ed1' }} />
                  <span>Career Journey</span>
                </Space>
              }
              style={{ borderRadius: '12px' }}
              headStyle={{ borderBottom: '2px solid #f0f0f0' }}
            >
              <Timeline
                mode="left"
                items={experiences}
                style={{ marginTop: '24px' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Achievement Highlight */}
        <Row style={{ marginTop: '32px' }}>
          <Col xs={24}>
            <Card 
              style={{ 
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none'
              }}
            >
              <Row align="middle" gutter={[24, 24]}>
                <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '64px', color: 'white' }}>
                    <TrophyOutlined />
                  </div>
                </Col>
                <Col xs={24} md={16}>
                  <Title level={3} style={{ color: 'white', marginBottom: '12px' }}>
                    Key Achievement: 40% Cost Reduction
                  </Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: 0 }}>
                    Successfully designed and implemented a comprehensive system overhaul that achieved a remarkable 40% reduction in operational costs while significantly improving maintainability, scalability, and performance. This demonstrates my ability to see systems holistically and deliver transformative business impact.
                  </Paragraph>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Personal Touch */}
        <Row style={{ marginTop: '32px' }}>
          <Col xs={24}>
            <Card 
              title="Beyond the Code" 
              style={{ borderRadius: '12px', textAlign: 'center' }}
              headStyle={{ borderBottom: '2px solid #f0f0f0' }}
            >
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Paragraph style={{ fontSize: '16px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                  When I'm not architecting systems or solving complex technical challenges, you'll find me gaming 🎮 
                  (which keeps my problem-solving skills sharp) and reading books 📚 to continuously learn and stay inspired.
                </Paragraph>
                <div style={{ marginTop: '24px' }}>
                  <Text style={{ fontSize: '18px', fontStyle: 'italic', color: '#1890ff' }}>
                    "Every technical decision should drive measurable business impact"
                  </Text>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;