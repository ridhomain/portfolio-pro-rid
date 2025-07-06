// src/pages/projects/index.tsx
import React, { useState } from 'react';
import { Card, Row, Col, Tag, Button, Typography, Space, Badge } from 'antd';
import {
  EyeOutlined,
  TeamOutlined,
  CalendarOutlined,
  RocketOutlined
} from '@ant-design/icons';
import { history } from 'umi';
import Loading from '@/components/Loading';

const { Title, Paragraph, Text } = Typography;

const projectsData = [
  {
    id: 'whatsapp-platform',
    title: 'WhatsApp Business Automation Platform',
    company: 'Current Company',
    role: 'Lead Backend Engineer / Systems Architect',
    duration: 'Ongoing',
    featured: true,
    category: 'architecture',
    summary: 'Leading complete architectural transformation from MVP to enterprise-scale SaaS platform',
    challenge: 'Inherited a platform facing critical scalability crisis with unsustainable unit economics',
    impact: [
      'Reduced infrastructure cost significantly per customer',
      'Transformed onboarding from manual process to automated',
      'Achieved high system reliability and uptime',
      'Architecture ready for substantial business growth'
    ],
    techStack: ['Node.js', 'Golang', 'NATS JetStream', 'PostgreSQL', 'Kubernetes', 'Redis', 'Trino', 'Apache Iceberg'],
    highlights: [
      'Designed multi-tenant architecture with schema isolation',
      'Implemented event-driven architecture with NATS JetStream',
      'Built modern data lakehouse with Trino + Apache Iceberg',
      'Led team through complete architecture migration with zero downtime'
    ]
  },
  {
    id: 'yamaha-tool-lifecycle',
    title: 'Manufacturing Tool Lifecycle Management System',
    company: 'Yamaha',
    role: 'Frontend Developer & System Analyst',
    duration: '12+ months',
    featured: true,
    category: 'enterprise',
    summary: 'Digital transformation of tool tracking for hundreds of precision manufacturing tools',
    challenge: 'Manual tracking using Excel and paper forms with no visibility into tool lifecycle',
    impact: [
      'Eliminated manual data entry and paper-based tracking',
      '100% visibility of tool location and status',
      'Prevented quality issues from worn tools',
      'System scaled over 12+ months with continuous features'
    ],
    techStack: ['UmiJS', 'Ant Design', 'React Native', 'Express.js', 'MongoDB', 'Barcode Integration'],
    highlights: [
      'Led frontend development for web and mobile applications',
      'Conducted business analysis for complex workflows',
      'Designed UI optimized for factory floor conditions',
      'Collaborated directly with Yamaha stakeholders'
    ]
  },
  {
    id: 'yamaha-mold-maintenance',
    title: 'Smart Mold Maintenance System',
    company: 'Yamaha',
    role: 'Full-Stack Developer',
    duration: '6 months',
    featured: true,
    category: 'enterprise',
    summary: 'Comprehensive maintenance management system with Odoo integration',
    challenge: 'Multiple complex SOPs needed digitization with no unified maintenance tracking',
    impact: [
      'Complete overview of maintenance schedules across all machines',
      'Improved resource allocation and planning efficiency',
      'Real-time tracking of planned vs actual maintenance',
      'Streamlined spare parts procurement workflow'
    ],
    techStack: ['Odoo', 'Express.js', 'React Native', 'Gantt Charts', 'PostgreSQL'],
    highlights: [
      'Developed custom Odoo modules for maintenance workflows',
      'Built interactive Gantt chart for scheduling',
      'Created mobile app for field technicians',
      'Integrated multiple business processes into cohesive system'
    ]
  },
  {
    id: 'bni-sei',
    title: 'Service Excellence Index Automation',
    company: 'Bank Negara Indonesia',
    role: 'Full-Stack Developer',
    duration: '3 months',
    featured: true,
    category: 'dashboard',
    summary: 'Automated performance monitoring system for all BNI branches nationwide',
    challenge: 'Manual score calculations with no centralized visibility for management',
    impact: [
      'Reduced processing time from days to minutes',
      'Real-time insights for management decisions',
      'Eliminated manual calculation errors',
      'Scalable to all branches nationwide'
    ],
    techStack: ['UmiJS', 'Ant Design', 'Feathers.js', 'Redis', 'Excel Processing'],
    highlights: [
      'Built UI for data upload and dashboard visualization',
      'Implemented Excel parsing and score calculations',
      'Created statistical visualizations and trend analysis',
      'Added Redis caching for performance optimization'
    ]
  }
];

const ProjectsPage: React.FC = () => {
  const [loading] = useState(false);

  if (loading) {
    return <Loading tip="Loading projects..." />;
  }

  const renderCard = (project: typeof projectsData[0]) => (
  <Card
    key={project.id}
    hoverable
    style={{
      borderRadius: 12,
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }}>
      {/* Top Content */}
      <div style={{ flex: 1 }}>
        <Space direction="vertical" size={16} style={{ display: 'flex' }}>
          {/* Header */}
          <div>
            <Text strong style={{ fontSize: 18, color: '#1890ff', display: 'block', marginBottom: 8 }}>
              {project.company}
            </Text>
            <Title level={4} style={{ margin: '8px 0' }}>{project.title}</Title>
            <Space size="middle" wrap>
              <Text type="secondary"><TeamOutlined /> {project.role}</Text>
              <Text type="secondary"><CalendarOutlined /> {project.duration}</Text>
            </Space>
          </div>

          {/* Summary */}
          <Paragraph style={{ marginBottom: 0 }}>{project.summary}</Paragraph>

          {/* Key Impact */}
          <div>
            <Text strong style={{ display: 'block', marginBottom: 8 }}>Key Impact:</Text>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {project.impact.slice(0, 2).map((item, index) => (
                <li key={index}><Text type="secondary">{item}</Text></li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <Text strong style={{ display: 'block', marginBottom: 8 }}>Technologies:</Text>
            <Space wrap size={[8, 8]}>
              {project.techStack.slice(0, 6).map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
              {project.techStack.length > 6 && (
                <Tag>+{project.techStack.length - 6} more</Tag>
              )}
            </Space>
          </div>
        </Space>
      </div>

      {/* Bottom Button */}
      <div style={{ marginTop: 24 }}>
        <Button
          type="primary"
          icon={<EyeOutlined />}
          onClick={() => history.push(`/project/${project.id}`)}
          size="large"
          block
        >
          View Project Details
        </Button>
      </div>
    </div>
  </Card>
);


  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1200 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Title level={2} style={{ marginBottom: 16 }}>
            Featured Projects
          </Title>
          <Paragraph style={{ fontSize: 16, maxWidth: 600, margin: '0 auto 32px' }}>
            A collection of projects showcasing my expertise in backend architecture, 
            system design, and full-stack development
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {projectsData.map(project => (
            <Col xs={24} lg={12} key={project.id}>
              {project.featured ? (
                <Badge.Ribbon text="Featured" color="red">
                  {renderCard(project)}
                </Badge.Ribbon>
              ) : renderCard(project)}
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Title level={3} style={{ marginBottom: 16 }}>
            Interested in working together?
          </Title>
          <Paragraph style={{ marginBottom: 24 }}>
            I'm always open to discussing new opportunities and interesting projects.
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
