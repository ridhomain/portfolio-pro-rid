// src/pages/about/index.tsx
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
import Loading from '@/components/Loading';

const { Title, Paragraph, Text } = Typography;

const AboutPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  // Dynamic stats using data from Google Sheets
  const stats = [
    {
      title: 'Years Experience',
      value: data.about.yearsExperience || '6',
      suffix: '+',
      icon: <CalendarOutlined />,
      color: '#1890ff'
    },
    {
      title: 'Technologies',
      value: data.about.technologies || '15',
      suffix: '+',
      icon: <CodeOutlined />,
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
      icon: <TeamOutlined />,
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
          <Title level={4} style={{ marginBottom: '4px' }}>Software Engineer</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Current Company • 2021 - December 2024</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Made strategic technical decisions that progressively improved system reliability and performance. Naturally evolved toward backend specialization while maintaining full-stack capabilities.
          </Paragraph>
          <div>
            <Tag color="green">System Design</Tag>
            <Tag color="orange">Backend Focus</Tag>
            <Tag color="blue">Technical Decisions</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#722ed1',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Fullstack Developer → Software Engineer</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Freelance • 2019 - 2021</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Delivered end-to-end solutions for enterprise clients including Yamaha and BNI. Focused on understanding business processes to build systems that actually solve problems.
          </Paragraph>
          <div>
            <Tag color="purple">Enterprise Solutions</Tag>
            <Tag color="cyan">Business Analysis</Tag>
            <Tag color="geekblue">Fullstack Development</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#faad14',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Teaching Assistant & Business Analyst</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>Project-Based • Sep 2018 - Jan 2019</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Taught programming fundamentals to 20+ students while applying analytical skills in business context. This dual role strengthened my ability to communicate complex concepts simply.
          </Paragraph>
          <div>
            <Tag color="gold">Teaching</Tag>
            <Tag color="orange">Communication</Tag>
            <Tag color="yellow">Analysis</Tag>
          </div>
        </div>
      ),
    },
    {
      color: '#eb2f96',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '4px' }}>Career Transition</Title>
          <Text type="secondary" style={{ fontSize: '14px' }}>GarageScript (c0d3.com) • July - August 2018</Text>
          <Paragraph style={{ marginTop: '8px', marginBottom: '8px' }}>
            Intensive bootcamp that transformed my engineering mindset into practical coding skills. The beginning of my journey from Civil Engineering to Software Engineering.
          </Paragraph>
          <div>
            <Tag color="magenta">Career Change</Tag>
            <Tag color="red">Fullstack Fundamentals</Tag>
          </div>
        </div>
      ),
    },
  ];

  // Use skills from Google Sheets data with new categorization
  const techStack = {
    languages_expert: data.skills?.Languages_Expert || ['JavaScript', 'TypeScript'],
    backend_expert: data.skills?.Backend_Expert || ['Fastify', 'HapiJS', 'Express'],
    languages_intermediate: data.skills?.Languages_Intermediate || ['Go', 'Python'],
    backend_intermediate: data.skills?.Backend_Intermediate || ['Gin', 'Fiber', 'Goroutines', 'WebSockets (Melody)'],
    python: data.skills?.Python || ['Django', 'Odoo'],
    frontend_intermediate: data.skills?.Frontend_Intermediate || ['React', 'UmiJS', 'Next.js', 'Ant Design'],
    databases: data.skills?.Databases || ['PostgreSQL', 'MongoDB', 'Redis'],
    datalake: data.skills?.DataLake || ['Trino', 'Iceberg', 'MinIO'],
    messaging: data.skills?.Messaging || ['NATS', 'NATS JetStream'],
    monitoring: data.skills?.Monitoring || ['Grafana', 'Prometheus', 'Loki', 'Promtail'],
    devops: data.skills?.DevOps || ['Linux', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GCP'],
    tools: data.skills?.Tools || ['Git', 'VS Code', 'Postman', 'Claude AI'],
    future: data.skills?.Future || ['gRPC', 'Vector Databases', 'Advanced Go Patterns', 'OpenTelemetry']
  };

  if (loading) {
    return <Loading tip="Loading about information..." />;
  }

  return (
    <div className="section" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <div className="container">
        {/* Header */}
        <Row justify="center" style={{ marginBottom: '48px' }}>
          <Col xs={24} sm={20} md={16} lg={12}>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
              <Avatar 
                size={120} 
                icon={<UserOutlined />} 
                style={{ 
                  margin: '0 auto', 
                  display: 'block',
                  backgroundColor: '#1890ff'
                }}
                src="/profile.jpg"
              />
              <div>
                <Title level={1} style={{ marginBottom: '8px' }}>
                  {data.about.name || 'Ahmad Ridho'}
                </Title>
                <Title level={3} type="secondary" style={{ marginTop: 0, fontWeight: 400 }}>
                  {data.about.title || 'Technical Lead'}
                </Title>
              </div>
            </Space>
          </Col>
        </Row>

        {/* Stats Grid */}
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
                  <div style={{ fontSize: '32px', color: stat.color }}>
                    {stat.icon}
                  </div>
                  {typeof stat.value === 'string' && (stat.value.includes(',') || stat.value.includes('+')) ? (
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
                  {/* <Title level={4} style={{ color: '#1890ff', marginBottom: '12px' }}>
                    Practical Creativity: Dancing with Constraints
                  </Title> */}
                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {data.about.description || 'With 6 years of experience in software engineering, I\'ve evolved from a curious developer into a technical leader who bridges the gap between complex technical concepts and business outcomes.'}
                  </Paragraph>
                  
                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    I'm the engineer who thrives in the space between ambitious goals and real-world constraints. My approach is simple: understand the problem deeply, challenge assumptions relentlessly, and build solutions that actually work. I don't chase the latest framework hype or over-engineer for imaginary scale. Instead, I focus on what matters - shipping reliable systems that solve real problems and create lasting impact.
                  </Paragraph>

                  <Paragraph style={{ fontSize: '16px', lineHeight: 1.7 }}>
                    {data.about.expertise || 'My exceptional analytical and problem-solving skills, combined with a focus on system architecture and technical leadership, enable me to design solutions that reduce costs while improving maintainability, scalability, and performance.'}
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
                      <Text type="secondary">Civil Engineering isn't just my degree - it's my thinking framework. The analytical rigor and systematic approach that others might miss comes naturally.</Text>
                    </div>
                    <div>
                      <Text strong>🎯 Business Acumen:</Text>
                      <br />
                      <Text type="secondary">Top-notch ability to analyze businesses holistically. Given context, I can read between the lines and understand the real problems beyond technical requirements.</Text>
                    </div>
                    <div>
                      <Text strong>⚡ Rapid Learning + Pattern Recognition:</Text>
                      <br />
                      <Text type="secondary">Fast adaptation while maintaining depth. I quickly identify patterns and apply proven solutions across different contexts.</Text>
                    </div>
                    <div>
                      <Text strong>🔍 Systems Thinking:</Text>
                      <br />
                      <Text type="secondary">See the forest AND the trees. I understand how individual decisions ripple through entire systems, enabling transformative improvements.</Text>
                    </div>
                  </Space>
                </div>
              </Space>
            </Card>
          </Col>

          {/* Technical Skills */}
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
                  <Badge.Ribbon text="Expert" color="blue">
                    <div style={{ padding: '8px 0' }}>
                      <Title level={5} style={{ marginBottom: '8px' }}>Core Expertise</Title>
                      <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <div>
                          <Text strong>Languages:</Text>
                          <Space wrap style={{ marginLeft: '8px' }}>
                            {techStack.languages_expert.map(lang => (
                              <Tag key={lang} color="blue" style={{ fontWeight: 'bold' }}>{lang}</Tag>
                            ))}
                          </Space>
                        </div>
                        <div>
                          <Text strong>Backend:</Text>
                          <Space wrap style={{ marginLeft: '8px' }}>
                            {techStack.backend_expert.map(tech => (
                              <Tag key={tech} color="green">{tech}</Tag>
                            ))}
                          </Space>
                        </div>
                      </Space>
                    </div>
                  </Badge.Ribbon>
                </div>

                <div>
                  <Badge.Ribbon text="Intermediate" color="green">
                    <div style={{ padding: '8px 0' }}>
                      <Title level={5} style={{ marginBottom: '8px' }}>Growing Skills</Title>
                      <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        <div>
                          <Text strong>Frontend:</Text>
                          <Space wrap style={{ marginLeft: '8px' }}>
                            {techStack.frontend_intermediate.map(tech => (
                              <Tag key={tech} color="cyan">{tech}</Tag>
                            ))}
                          </Space>
                        </div>
                        <div>
                          <Text strong>Go:</Text>
                          <Space wrap style={{ marginLeft: '8px' }}>
                            {techStack.backend_intermediate.map(tech => (
                              <Tag key={tech} color="geekblue">{tech}</Tag>
                            ))}
                          </Space>
                        </div>
                        <div>
                          <Text strong>Python:</Text>
                          <Space wrap style={{ marginLeft: '8px' }}>
                            {techStack.python.map(tech => (
                              <Tag key={tech}>{tech}</Tag>
                            ))}
                          </Space>
                        </div>
                      </Space>
                    </div>
                  </Badge.Ribbon>
                </div>

                <div>
                  <Title level={5} style={{ marginBottom: '8px' }}>Infrastructure & Tools</Title>
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <div>
                      <Text strong>Databases:</Text>
                      <Space wrap style={{ marginLeft: '8px' }}>
                        {techStack.databases.map(tech => (
                          <Tag key={tech} color="green">{tech}</Tag>
                        ))}
                      </Space>
                    </div>
                    <div>
                      <Text strong>Data Lake:</Text>
                      <Space wrap style={{ marginLeft: '8px' }}>
                        {techStack.datalake.map(tech => (
                          <Tag key={tech} color="purple">{tech}</Tag>
                        ))}
                      </Space>
                      <Text type="secondary" style={{ fontSize: '12px', display: 'block', marginTop: '4px' }}>
                        ✨ Implemented enterprise data lake solution
                      </Text>
                    </div>
                    <div>
                      <Text strong>Messaging & Events:</Text>
                      <Space wrap style={{ marginLeft: '8px' }}>
                        {techStack.messaging.map(tech => (
                          <Tag key={tech} color="orange">{tech}</Tag>
                        ))}
                      </Space>
                    </div>
                    <div>
                      <Text strong>Monitoring:</Text>
                      <Space wrap style={{ marginLeft: '8px' }}>
                        {techStack.monitoring.map(tech => (
                          <Tag key={tech} color="gold">{tech}</Tag>
                        ))}
                      </Space>
                    </div>
                    <div>
                      <Text strong>DevOps:</Text>
                      <Space wrap style={{ marginLeft: '8px' }}>
                        {techStack.devops.map(tech => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </Space>
                    </div>
                  </Space>
                </div>

                <Divider />

                <div>
                  <Badge.Ribbon text="Learning Path" color="purple">
                    <div style={{ padding: '8px 0' }}>
                      <Title level={5} style={{ marginBottom: '8px' }}>Future Focus</Title>
                      <Space direction="vertical" size="small" style={{ width: '100%' }}>
                        {techStack.future.map((item, index) => {
                          const descriptions = [
                            'Better service communication',
                            'AI/ML backend support',
                            'Distributed systems',
                            'Unified observability'
                          ];
                          return (
                            <div key={item}>
                              <Text><Text strong>{item}</Text> - {descriptions[index] || 'Next learning goal'}</Text>
                            </div>
                          );
                        })}
                      </Space>
                    </div>
                  </Badge.Ribbon>
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

        {/* Education */}
        <Row style={{ marginTop: '32px' }}>
          <Col xs={24}>
            <Card 
              title={
                <Space>
                  <BookOutlined style={{ color: '#1890ff' }} />
                  <span>Education</span>
                </Space>
              }
              style={{ borderRadius: '12px' }}
              headStyle={{ borderBottom: '2px solid #f0f0f0' }}
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card bordered={false} style={{ backgroundColor: '#f8f9fa' }}>
                    <Space direction="vertical" size="small">
                      <Title level={4} style={{ marginBottom: '4px' }}>
                        Bachelor of Civil Engineering
                      </Title>
                      <Text type="secondary">{data.about.university || 'Universitas Indonesia'}</Text>
                      <Text>{data.about.educationYear || '2013 - 2018'}</Text>
                      <Paragraph style={{ marginTop: '8px', marginBottom: 0 }}>
                        Strong foundation in analytical thinking, problem-solving, and systematic approach to complex challenges.
                      </Paragraph>
                    </Space>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card bordered={false} style={{ backgroundColor: '#f8f9fa' }}>
                    <Space direction="vertical" size="small">
                      <Title level={4} style={{ marginBottom: '4px' }}>
                        Software Engineering Bootcamp
                      </Title>
                      <Text type="secondary">{data.about.bootcamp || 'GarageScript (c0d3.com)'}</Text>
                      <Text>{data.about.bootcampYear || 'July - August 2018'}</Text>
                      <Paragraph style={{ marginTop: '8px', marginBottom: 0 }}>
                        Career transition program focusing on full-stack development, marking the beginning of my software engineering journey.
                      </Paragraph>
                    </Space>
                  </Card>
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
                    {data.about.philosophy || '"The best solution isn\'t the fanciest—it\'s the one that works within constraints while solving real problems"'}
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