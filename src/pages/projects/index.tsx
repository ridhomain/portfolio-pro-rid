// src/pages/projects/index.tsx
import Loading from '@/components/Loading';
import {
  ArrowRightOutlined,
  CalendarOutlined,
  RocketOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Badge, Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';

const { Title, Paragraph, Text } = Typography;

const projectsData = [
  {
    id: 'whatsapp-platform',
    title: 'Daisi Product - WhatsApp Business Automation Platform',
    company: 'PT. Timkado Sejahtera Indonesia',
    role: 'Technical Lead | Software Engineer',
    duration: 'Ongoing',
    featured: false,
    category: 'architecture',
    summary:
      'Leading complete architectural transformation from MVP to enterprise-scale SaaS platform',
    challenge:
      'Inherited a platform facing critical scalability crisis with unsustainable unit economics',
    impact: [
      'Reduced infrastructure cost significantly per customer',
      'Transformed onboarding from manual process to automated',
      'Achieved high system reliability and uptime',
      'Architecture ready for substantial business growth',
    ],
    techStack: [
      'Node.js',
      'Golang',
      'NATS JetStream',
      'PostgreSQL',
      'Kubernetes',
      'Redis',
      'Trino',
      'Apache Iceberg',
    ],
    highlights: [
      'Designed multi-tenant architecture with schema isolation',
      'Implemented event-driven architecture with NATS JetStream',
      'Built modern data lakehouse with Trino + Apache Iceberg',
      'Led team through complete architecture migration with zero downtime',
    ],
  },
  {
    id: 'yamaha-tool-lifecycle',
    title: 'Manufacturing Tool Lifecycle Management System',
    company: 'Yamaha',
    role: 'Fullstack Developer & Business Analyst',
    duration: '12+ months',
    featured: false,
    category: 'enterprise',
    summary:
      'Digital transformation of tool tracking for hundreds of precision manufacturing tools',
    challenge:
      'Manual tracking using Excel and paper forms with no visibility into tool lifecycle',
    impact: [
      'Eliminated manual data entry and paper-based tracking',
      '100% visibility of tool location and status',
      'Prevented quality issues from worn tools',
      'System scaled over 12+ months with continuous features',
    ],
    techStack: [
      'UmiJS',
      'Ant Design',
      'React Native',
      'Express.js',
      'MongoDB',
      'Barcode Integration',
    ],
    highlights: [
      'Led frontend development for web and mobile applications',
      'Conducted business analysis for complex workflows',
      'Designed UI optimized for factory floor conditions',
      'Collaborated directly with Yamaha stakeholders',
    ],
  },
  {
    id: 'yamaha-mold-maintenance',
    title: 'Smart Mold Maintenance System',
    company: 'Yamaha',
    role: 'Fullstack Developer',
    duration: '6 months',
    featured: false,
    category: 'enterprise',
    summary:
      'Comprehensive maintenance management system with Odoo integration',
    challenge:
      'Multiple complex SOPs needed digitization with no unified maintenance tracking',
    impact: [
      'Complete overview of maintenance schedules across all machines',
      'Improved resource allocation and planning efficiency',
      'Real-time tracking of planned vs actual maintenance',
      'Streamlined spare parts procurement workflow',
    ],
    techStack: [
      'Odoo',
      'Express.js',
      'React Native',
      'Gantt Charts',
      'PostgreSQL',
    ],
    highlights: [
      'Developed custom Odoo modules for maintenance workflows',
      'Built interactive Gantt chart for scheduling',
      'Created mobile app for field technicians',
      'Integrated multiple business processes into cohesive system',
    ],
  },
  {
    id: 'bni-sei',
    title: 'Service Excellence Index Automation',
    company: 'Bank Negara Indonesia',
    role: 'Fullstack Developer',
    duration: '3 months',
    featured: false,
    category: 'dashboard',
    summary:
      'Automated performance monitoring system for all BNI branches nationwide',
    challenge:
      'Manual score calculations with no centralized visibility for management',
    impact: [
      'Reduced processing time from days to minutes',
      'Real-time insights for management decisions',
      'Eliminated manual calculation errors',
      'Scalable to all branches nationwide',
    ],
    techStack: [
      'UmiJS',
      'Ant Design',
      'Feathers.js',
      'Redis',
      'Excel Processing',
    ],
    highlights: [
      'Built UI for data upload and dashboard visualization',
      'Implemented Excel parsing and score calculations',
      'Created statistical visualizations and trend analysis',
      'Added Redis caching for performance optimization',
    ],
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'enterprise', label: 'Enterprise' },
  { key: 'dashboard', label: 'Dashboard' },
];

const categoryColors: Record<string, string> = {
  architecture: 'blue',
  enterprise: 'purple',
  dashboard: 'green',
};

const ProjectsPage: React.FC = () => {
  const [loading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  if (loading) {
    return <Loading tip="Loading projects..." />;
  }

  const renderProjectCard = (project: (typeof projectsData)[0]) => {
    const cardContent = (
      <Card
        hoverable
        style={{
          borderRadius: 16,
          height: '100%',
          overflow: 'hidden',
          border: 'none',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease',
        }}
        bodyStyle={{ padding: 0 }}
      >
        {/* Category Header Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, #8b6914 0%, #6b4f0f 100%)',
            padding: '16px 24px',
          }}
        >
          <Space>
            <Tag
              color="rgba(255,255,255,0.2)"
              style={{
                border: 'none',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {project.category.charAt(0).toUpperCase() +
                project.category.slice(1)}
            </Tag>
            <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13 }}>
              <CalendarOutlined style={{ marginRight: 4 }} />
              {project.duration}
            </Text>
          </Space>
        </div>

        {/* Card Body */}
        <div style={{ padding: 24 }}>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            {/* Company & Title */}
            <div>
              <Text
                strong
                style={{
                  fontSize: 13,
                  color: categoryColors[project.category]
                    ? `var(--ant-color-${categoryColors[project.category]})`
                    : '#1890ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {project.company}
              </Text>
              <Title level={4} style={{ margin: '8px 0 0', lineHeight: 1.3 }}>
                {project.title}
              </Title>
            </div>

            {/* Role */}
            <Text type="secondary" style={{ fontSize: 14 }}>
              <TeamOutlined style={{ marginRight: 6 }} />
              {project.role}
            </Text>

            {/* Summary */}
            <Paragraph
              style={{
                marginBottom: 0,
                color: '#595959',
                lineHeight: 1.6,
              }}
            >
              {project.summary}
            </Paragraph>

            {/* Key Impact */}
            <div
              style={{
                background: '#f8f9fa',
                borderRadius: 8,
                padding: 16,
              }}
            >
              <Text
                strong
                style={{
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#8c8c8c',
                }}
              >
                Key Impact
              </Text>
              <ul
                style={{
                  margin: '8px 0 0',
                  paddingLeft: 16,
                  listStyle: 'none',
                }}
              >
                {project.impact.slice(0, 2).map((item, index) => (
                  <li
                    key={index}
                    style={{
                      position: 'relative',
                      paddingLeft: 12,
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 8,
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: '#52c41a',
                      }}
                    />
                    <Text style={{ fontSize: 13, color: '#595959' }}>
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <Text
                strong
                style={{
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#8c8c8c',
                  display: 'block',
                  marginBottom: 8,
                }}
              >
                Tech Stack
              </Text>
              <Space wrap size={[6, 6]}>
                {project.techStack.slice(0, 5).map((tech) => (
                  <Tag
                    key={tech}
                    style={{
                      borderRadius: 4,
                      border: '1px solid #e8e8e8',
                      background: 'white',
                      fontSize: 12,
                    }}
                  >
                    {tech}
                  </Tag>
                ))}
                {project.techStack.length > 5 && (
                  <Tag
                    style={{
                      borderRadius: 4,
                      background: '#f5f5f5',
                      border: 'none',
                      fontSize: 12,
                    }}
                  >
                    +{project.techStack.length - 5}
                  </Tag>
                )}
              </Space>
            </div>
          </Space>

          {/* View Details Button */}
          <Button
            type="primary"
            size="large"
            block
            icon={<ArrowRightOutlined />}
            onClick={() => history.push(`/project/${project.id}`)}
            style={{
              marginTop: 24,
              height: 48,
              borderRadius: 8,
              fontWeight: 500,
            }}
          >
            View Case Study
          </Button>
        </div>
      </Card>
    );

    return project.featured ? (
      <Badge.Ribbon text="Featured" color="red">
        {cardContent}
      </Badge.Ribbon>
    ) : (
      cardContent
    );
  };

  return (
    <div
      className="section"
      style={{ paddingTop: '48px', paddingBottom: '48px' }}
    >
      <div className="container" style={{ maxWidth: 1200 }}>
        {/* Hero Section */}
        <Row justify="center" style={{ marginBottom: 48 }}>
          <Col xs={24} md={20} lg={16}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ marginBottom: 16 }}>
                Featured Projects
              </Title>
              <Paragraph
                style={{
                  fontSize: 18,
                  color: '#595959',
                  maxWidth: 600,
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                A collection of projects showcasing my expertise in backend
                architecture, system design, and full-stack development
              </Paragraph>
            </div>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row justify="center" style={{ marginBottom: 40 }}>
          <Col>
            <Space wrap size={[8, 8]} style={{ justifyContent: 'center' }}>
              {categories.map((cat) => (
                <Button
                  key={cat.key}
                  type={activeCategory === cat.key ? 'primary' : 'default'}
                  shape="round"
                  size="large"
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    fontWeight: activeCategory === cat.key ? 500 : 400,
                  }}
                >
                  {cat.label}
                </Button>
              ))}
            </Space>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row gutter={[24, 32]}>
          {filteredProjects.map((project) => (
            <Col xs={24} lg={12} key={project.id}>
              {renderProjectCard(project)}
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Title level={3} style={{ marginBottom: 16 }}>
            Interested in working together?
          </Title>
          <Paragraph style={{ marginBottom: 24 }}>
            I'm always open to discussing new opportunities and interesting
            projects.
          </Paragraph>
          <Space size="middle">
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={() => history.push('/contact')}
            >
              Get In Touch
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
