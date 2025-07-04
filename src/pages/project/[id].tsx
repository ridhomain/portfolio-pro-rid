// src/pages/project/[id].tsx
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, history } from 'umi';
import { 
  Typography, 
  Row, 
  Col, 
  Card, 
  Tag, 
  Space, 
  Button, 
  Divider, 
  Timeline,
  Alert,
  Breadcrumb,
  Affix,
  Anchor
} from 'antd';
import { 
  ArrowLeftOutlined, 
  RocketOutlined, 
  CodeOutlined, 
  TeamOutlined, 
  CalendarOutlined,
  CheckCircleOutlined,
  ToolOutlined,
  TrophyOutlined,
  BulbOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import './index.less';

const { Title, Paragraph, Text } = Typography;
const { Link } = Anchor;

// Custom hook for responsive behavior
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

// Type definitions
interface Feature {
  title: string;
  description: string;
  impact?: string;
  features?: string[];
  services?: string[];
  benefits?: string[];
  components?: string[];
  capabilities?: string[];
  changes?: string[];
}

interface TimelinePhase {
  phase: string;
  description: string;
  highlights: string[];
}

interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  category: string;
  overview: {
    challenge: string;
    role: string;
    timeline: TimelinePhase[];
  };
  solution: {
    keyFeatures: Feature[];
    techStack: Record<string, string | string[]>;
  };
  impact: Record<string, string[]>;
  lessons: string;
}

// Full project data with complete details
const projectsFullData: Record<string, Project> = {
  'whatsapp-platform': {
    id: 'whatsapp-platform',
    title: 'WhatsApp Business Automation Platform',
    company: 'Current Company',
    role: 'Lead Backend Engineer / Systems Architect',
    duration: 'Ongoing',
    category: 'architecture',
    
    overview: {
      challenge: `Inherited a WhatsApp automation platform facing critical scalability crisis:
        • Unsustainable Unit Economics: Each company required dedicated infrastructure (1 Supabase stack self-hosted including Postgres + 1 CDC + 1 WS)
        • Zero Observability: No monitoring, metrics, or debugging capabilities
        • Technical Debt: Tightly coupled microservices with inconsistent APIs
        • Manual Operations: Every customer onboarding required manual infrastructure deployment
        • Business Impact: Customer acquisition costs exceeded revenue, threatening company viability`,
      
      role: `As the sole senior backend engineer (after CTO departure, January 2025):
        • Systems Architect: Designed and led complete platform re-architecture
        • Technical Leadership: Managing frontend developer, data engineer, QA, and contractors
        • Full-Stack Ownership: From infrastructure to API design to data architecture
        • Strategic Planning: Drove technical roadmap, hiring initiatives, and architectural decisions`,
      
      timeline: [
        {
          phase: 'Phase 1: Foundation & Stabilization',
          description: 'Built core platform components including real-time chat, WhatsApp automation, multi-tenant management',
          highlights: ['Migrated Firebase to Supabase', 'Implemented custom CDC with Golang', 'Developed K8s automation']
        },
        {
          phase: 'Phase 2: Architectural Transformation',
          description: 'Complete redesign focusing on shared resources and efficient scaling',
          highlights: ['Database consolidation', 'Service decentralization', 'NATS JetStream implementation', 'Cost reduction achieved']
        },
        {
          phase: 'Phase 3: Data Platform & Analytics',
          description: 'Modern data lakehouse architecture implementation',
          highlights: ['Apache Iceberg integration', 'Trino for distributed SQL', 'MinIO object storage', 'REST API layer']
        }
      ]
    },
    
    solution: {
      keyFeatures: [
        {
          title: 'Database Consolidation',
          description: 'Transformed from dedicated PostgreSQL per customer to single managed PostgreSQL with schema-per-tenant',
          impact: 'Significant reduction in database infrastructure costs'
        },
        {
          title: 'Service Decentralization',
          description: 'Decomposed monolith into specialized microservices with clear boundaries',
          services: [
            'WhatsApp Service (Fastify): Centralized messaging logic',
            'REST Postgres API (Go): Multi-tenant data access layer',
            'Agent API (Fastify): Lightweight connection handlers',
            'Events Processor (Go): Heavy processing separated from agents',
            'CDC Consumer (Go): Centralized change data capture',
            'WebSocket Service (Go): Real-time chat features'
          ]
        },
        {
          title: 'Event-Driven Architecture',
          description: 'Replaced Redis Streams with NATS JetStream for reliable message processing',
          benefits: ['Fault-tolerant processing', 'Exactly-once semantics', 'Dead letter queues']
        },
        {
          title: 'Infrastructure Transformation',
          description: 'Moved from linear to logarithmic cost growth model',
          changes: [
            'Shared Global Services: 70% of infrastructure now shared',
            'Smart Resource Allocation: Per-company resources only where necessary',
            'Automated Scaling: Customer onboarding fully automated'
          ]
        }
      ],
      
      techStack: {
        languages: ['Node.js (Fastify, Hapi.js)', 'Golang'],
        messaging: ['NATS JetStream', 'WebSocket (Melody)', 'Redis'],
        databases: ['PostgreSQL (multi-tenant)', 'MongoDB', 'Redis'],
        dataplatform: ['Apache Iceberg', 'Trino', 'MinIO', 'Nessie'],
        infrastructure: ['Kubernetes', 'Docker', 'DigitalOcean'],
        monitoring: ['Prometheus', 'Grafana', 'Loki Stack']
      }
    },
    
    impact: {
      business: [
        'Infrastructure Cost: Significantly reduced per customer',
        'Onboarding Time: Streamlined from manual process to automated',
        'System Reliability: High uptime achieved',
        'Scaling Capability: Architecture ready for substantial growth'
      ],
      technical: [
        'Designed efficient multi-tenant architecture with proper isolation',
        'Implemented comprehensive observability with metrics and tracing',
        'Created automated deployment pipeline for customer onboarding',
        'Built fault-tolerant event processing with exactly-once semantics'
      ],
      leadership: [
        'Successfully managed architecture migration with zero downtime',
        'Coordinated with contractors on critical components',
        'Established engineering best practices and documentation standards',
        'Mentored team members on microservices and event-driven patterns'
      ]
    },
    
    lessons: `This project demonstrated that architectural decisions directly impact business viability. 
      By transforming a cost center into a scalable platform, we enabled the business to grow profitably. 
      The experience reinforced the importance of designing for multi-tenancy from the start, 
      choosing boring technology that scales, prioritizing observability and debugging capabilities, 
      separating concerns for independent scaling, and building with cost-per-customer in mind.`
  },
  
  'yamaha-tool-lifecycle': {
    id: 'yamaha-tool-lifecycle',
    title: 'Manufacturing Tool Lifecycle Management System',
    company: 'Yamaha',
    role: 'Frontend Developer & System Analyst',
    duration: '12+ months',
    category: 'enterprise',
    
    overview: {
      challenge: `Yamaha's manufacturing facility was managing hundreds of precision tools using a fragmented system 
        of Excel spreadsheets, paper forms, and printed specifications. This manual approach led to:
        • Difficulty tracking tool locations across production lines, regrinding stations, and tool centers
        • No visibility into tool lifecycle and optimal regrinding schedules
        • Risk of using worn tools affecting product quality
        • Time-consuming manual data entry and reporting`,
      
      role: `As a Frontend Developer & System Analyst, I:
        • Led the frontend development for both web and mobile applications using React and React Native
        • Conducted business analysis to map complex manufacturing workflows into digital processes
        • Designed user interfaces optimized for factory floor conditions
        • Collaborated with backend team on API design and integration
        • Worked directly with Yamaha stakeholders to gather requirements and iterate on features`,
      
      timeline: [
        {
          phase: 'Initial Development',
          description: 'Core system development with barcode tracking and basic workflows',
          highlights: ['Tool database creation', 'Barcode system implementation', 'Mobile app development']
        },
        {
          phase: 'Feature Expansion',
          description: 'Added reporting, analytics, and approval workflows',
          highlights: ['Dashboard development', 'Reporting modules', 'Multi-level approvals']
        },
        {
          phase: 'Continuous Enhancement',
          description: 'System grew over 12+ months with additional features',
          highlights: ['Document management', 'Advanced analytics', 'Performance optimization']
        }
      ]
    },
    
    solution: {
      keyFeatures: [
        {
          title: 'Comprehensive Tool Tracking',
          description: 'Digitized entire tool lifecycle with barcode-based identification',
          impact: '100% visibility of tool location and status across facilities'
        },
        {
          title: 'Multi-Platform Solution',
          description: 'Web application for engineers and mobile app for operators',
          components: [
            'Web Application: Central dashboard for monitoring and analytics',
            'Mobile Application: For operators to scan tools and update status',
            'REST API: Connecting all systems with seamless data flow',
            'Barcode System: Unique identification for instant tracking'
          ]
        },
        {
          title: 'Digital Tool Database',
          description: 'Replaced printed specifications with searchable digital catalog',
          benefits: ['Instant access to tool specs', 'Version control', 'Easy updates']
        },
        {
          title: 'Automated Workflows',
          description: 'Digital approval system for document changes and standard updates',
          features: ['Multi-level approval routing', 'Audit trails', 'Notification system']
        }
      ],
      
      techStack: {
        frontend: ['UmiJS + Ant Design (Web)', 'React Native (Mobile)'],
        backend: ['Express.js', 'RESTful API architecture'],
        database: ['MongoDB for flexible tool data management'],
        integration: ['Barcode scanning', 'Synchronization between mobile/web']
      }
    },
    
    impact: {
      business: [
        'Automated Processes: Eliminated manual data entry and paper-based tracking',
        'Enhanced Traceability: 100% visibility of tool location and status',
        'Quality Improvement: Prevented worn tools from affecting product quality',
        'Data-Driven Decisions: Management gained insights previously impossible with manual systems',
        'Scalability: System grew over 12+ months with continuous feature additions'
      ],
      technical: [
        'Successfully mapped complex manufacturing workflows to digital processes',
        'Designed intuitive UI for factory floor conditions',
        'Implemented real-time synchronization between mobile and web',
        'Built flexible system architecture supporting continuous feature additions'
      ],
      personal: [
        'Deepened understanding of manufacturing processes',
        'Improved stakeholder communication skills',
        'Gained experience in enterprise system design',
        'Led successful long-term project with evolving requirements'
      ]
    },
    
    lessons: `This project demonstrated my ability to translate complex manufacturing requirements 
      into user-friendly digital solutions while working in an agile team environment. 
      The success came from deep collaboration with end users, iterative development based on feedback, 
      and building a flexible architecture that could grow with changing needs.`
  },
  
  'yamaha-mold-maintenance': {
    id: 'yamaha-mold-maintenance',
    title: 'Smart Mold Maintenance System',
    company: 'Yamaha',
    role: 'Full-Stack Developer',
    duration: '6 months',
    category: 'enterprise',
    
    overview: {
      challenge: `Yamaha's molding operations required a sophisticated maintenance management system to handle multiple complex workflows:
        • Planning and scheduling preventive maintenance across numerous molding machines
        • Tracking machine repairs and downtime
        • Managing improvement requests and spare parts changes
        • Coordinating spare parts procurement and warehouse delivery
        • No unified system to visualize maintenance schedules and track execution`,
      
      role: `As a Full-Stack Developer working with Odoo, I:
        • Developed custom Odoo modules for maintenance workflow management
        • Built interactive Gantt chart for maintenance scheduling
        • Created Odoo-based desktop planning interface
        • Developed React Native mobile app for field technicians
        • Designed custom statistical dashboards and data visualizations
        • Integrated planning data with real-time execution tracking`,
      
      timeline: [
        {
          phase: 'Requirements & Design',
          description: 'Analyzed 4 SOPs and designed system architecture',
          highlights: ['Workflow mapping', 'Odoo customization planning', 'UI/UX design']
        },
        {
          phase: 'Core Development',
          description: 'Built Odoo modules and mobile application',
          highlights: ['Gantt chart implementation', 'Mobile app development', 'API integration']
        },
        {
          phase: 'Integration & Deployment',
          description: 'System integration and user training',
          highlights: ['Data migration', 'User training', 'Performance optimization']
        }
      ]
    },
    
    solution: {
      keyFeatures: [
        {
          title: 'Maintenance Planning Module',
          description: 'Interactive Gantt chart for scheduling preventive maintenance',
          features: [
            'Drag-and-drop functionality for schedule adjustments',
            'Resource allocation and conflict detection',
            'Visual timeline of all maintenance activities'
          ]
        },
        {
          title: 'Field Execution App',
          description: 'Mobile interface for technicians to log actual maintenance',
          capabilities: [
            'Real-time status updates from production floor',
            'Photo documentation and notes capability',
            'Work order management'
          ]
        },
        {
          title: 'Repair Management',
          description: 'Digital repair request workflows with priority management',
          benefits: ['Priority-based queue', 'Repair history tracking', 'Downtime analysis']
        },
        {
          title: 'Spare Parts Integration',
          description: 'Streamlined parts procurement and inventory management',
          features: [
            'Improvement request system',
            'Automated procurement workflows',
            'Warehouse inventory integration'
          ]
        }
      ],
      
      techStack: {
        backend: ['Odoo (Custom Modules)', 'Express.js'],
        frontend: ['Odoo (Desktop Planning)', 'React Native (Mobile)'],
        visualization: ['Custom chart components for maintenance data'],
        integration: ['Real-time sync between planning and execution']
      }
    },
    
    impact: {
      business: [
        'Visibility: Complete overview of maintenance schedules across all machines',
        'Efficiency: Reduced planning time and improved resource allocation',
        'Accuracy: Real-time tracking of planned vs actual maintenance',
        'Preventive Care: Data-driven maintenance intervals reducing breakdowns',
        'Streamlined Procurement: Automated spare parts workflow reducing delays'
      ],
      technical: [
        'Deep Odoo customization and module development',
        'Complex data visualization with interactive Gantt charts',
        'Seamless mobile-desktop synchronization',
        'Integration of multiple business processes into cohesive system'
      ],
      personal: [
        'Mastered Odoo framework and customization',
        'Improved full-stack development skills',
        'Gained experience in manufacturing maintenance processes',
        'Successfully delivered complex enterprise solution'
      ]
    },
    
    lessons: `This project showcased my ability to work with enterprise platforms like Odoo 
      while creating custom solutions that address specific manufacturing needs. 
      The key to success was understanding the maintenance workflows deeply, 
      leveraging Odoo's capabilities while knowing when to build custom solutions, 
      and ensuring seamless integration between desktop planning and mobile execution.`
  },
  
  'bni-sei': {
    id: 'bni-sei',
    title: 'Service Excellence Index Automation',
    company: 'Bank Negara Indonesia',
    role: 'Full-Stack Developer',
    duration: '3 months',
    category: 'dashboard',
    
    overview: {
      challenge: `Bank Negara Indonesia needed to monitor and evaluate service excellence across all their branches nationwide. 
        The existing process relied on:
        • Manual score calculations from multiple Excel files
        • No centralized visibility for auditors and management
        • Time-consuming data consolidation across branches
        • Difficulty tracking performance trends over time`,
      
      role: `As a Full-Stack Developer, I:
        • Developed the user interface for both data upload and dashboard visualization
        • Built backend services for Excel parsing and score calculations
        • Implemented data processing logic for various service metrics
        • Created interactive charts and statistical visualizations
        • Implemented Redis caching for improved performance
        • Ensured smooth data flow from branch uploads to executive dashboards`,
      
      timeline: [
        {
          phase: 'System Design',
          description: 'Analyzed requirements and designed architecture',
          highlights: ['Data flow design', 'UI/UX mockups', 'Database schema']
        },
        {
          phase: 'Development',
          description: 'Built upload system and analytics dashboard',
          highlights: ['Excel parser implementation', 'Dashboard creation', 'Caching layer']
        },
        {
          phase: 'Deployment',
          description: 'System rollout and user training',
          highlights: ['Performance optimization', 'User training', 'Documentation']
        }
      ]
    },
    
    solution: {
      keyFeatures: [
        {
          title: 'Excel Integration',
          description: 'Branches upload data using familiar Excel templates',
          features: [
            'Drag-and-drop upload interface',
            'Data validation and error handling',
            'Bulk processing capabilities'
          ]
        },
        {
          title: 'Automated Calculations',
          description: 'System processes scores using statistical methods',
          capabilities: [
            'Multiple metric calculations',
            'Weighted scoring algorithms',
            'Automatic aggregation'
          ]
        },
        {
          title: 'Centralized Dashboard',
          description: 'Real-time visibility of all branch performances',
          features: [
            'Multi-branch overview',
            'Drill-down capabilities',
            'Trend analysis over time'
          ]
        },
        {
          title: 'Performance Optimization',
          description: 'Redis caching for fast data retrieval',
          benefits: ['Reduced load times', 'Improved user experience', 'Scalable architecture']
        }
      ],
      
      techStack: {
        frontend: ['UmiJS + Ant Design for responsive dashboards'],
        backend: ['Feathers.js for robust API and real-time updates'],
        dataprocessing: ['Excel parsing libraries for reliable data extraction'],
        database: ['Structured to handle multi-branch hierarchical data'],
        caching: ['Redis for performance optimization'],
        visualization: ['Interactive charts for statistical analysis']
      }
    },
    
    impact: {
      business: [
        'Efficiency Gains: Reduced manual processing time from days to minutes',
        'Real-time Insights: Management could monitor service quality instantly',
        'Data Accuracy: Eliminated manual calculation errors',
        'Scalability: Easily handled data from all BNI branches nationwide',
        'Historical Analysis: Enabled trend identification and predictive insights'
      ],
      technical: [
        'Rapidly developed and deployed enterprise solution in 3 months',
        'Transformed manual processes into automated workflows',
        'Created intuitive interfaces for non-technical users',
        'Handled complex data processing at scale'
      ],
      personal: [
        'Gained experience in financial services domain',
        'Improved rapid development skills',
        'Enhanced data visualization capabilities',
        'Successfully delivered under tight deadline'
      ]
    },
    
    lessons: `This streamlined system empowered BNI to make data-driven decisions about service improvements 
      across their entire branch network. The project showcased our ability to rapidly develop 
      and deploy enterprise solutions that transform manual processes into efficient digital workflows.`
  }
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = useMemo(() => projectsFullData[id as keyof typeof projectsFullData], [id]);
  const isMobile = useResponsive();

  if (!project) {
    return (
      <div className="section">
        <div className="container" style={{ maxWidth: 1200, textAlign: 'center', padding: '100px 20px' }}>
          <Title level={2}>Project Not Found</Title>
          <Paragraph>The project you're looking for doesn't exist.</Paragraph>
          <Button type="primary" icon={<ArrowLeftOutlined />} onClick={() => history.push('/projects')}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div style={{ position: 'relative' }}>
        {/* Side Navigation - Desktop Only */}
        {!isMobile && (
          <div className="desktop-side-nav" style={{
            position: 'fixed',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 160
          }}>
            <Card 
              size="small" 
              style={{ 
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                borderRadius: 8
              }}
              bodyStyle={{ padding: '16px 8px' }}
            >
              <Anchor 
                affix={false}
                offsetTop={80}
                style={{ fontSize: 14 }}
              >
                <Link href="#challenge" title="Challenge" />
                <Link href="#solution" title="Solution" />
                <Link href="#impact" title="Impact" />
                <Link href="#tech" title="Technologies" />
              </Anchor>
            </Card>
          </div>
        )}

        <div className="container" style={{ maxWidth: 1000 }}>
          {/* Navigation - Responsive */}
          <div className="mobile-back-nav">
            <Button 
              icon={<ArrowLeftOutlined />} 
              onClick={() => history.push('/projects')}
              type="text"
              style={{ padding: '4px 8px' }}
            >
              Back to Projects
            </Button>
          </div>

          <Breadcrumb className="desktop-breadcrumb" style={{ marginBottom: 24 }}>
            <Breadcrumb.Item>
              <a onClick={() => history.push('/')}>Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a onClick={() => history.push('/projects')}>Projects</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{project.title}</Breadcrumb.Item>
          </Breadcrumb>

          {/* Project Header */}
          <div style={{ marginBottom: 48 }}>
            <Space direction="vertical" size={16} style={{ width: '100%' }}>
              <div>
                <Tag color="blue">{project.company}</Tag>
                <Tag>{project.category}</Tag>
              </div>
              <Title level={1} style={{ margin: 0 }}>{project.title}</Title>
              <Space size="large" wrap>
                <Text><TeamOutlined /> {project.role}</Text>
                <Text><CalendarOutlined /> {project.duration}</Text>
              </Space>
            </Space>
          </div>

          {/* Challenge Section */}
          <Card id="challenge" style={{ marginBottom: 24 }}>
            <Title level={3}>
              <ThunderboltOutlined /> The Challenge
            </Title>
            <Paragraph style={{ whiteSpace: 'pre-line', marginBottom: 24 }}>
              {project.overview.challenge}
            </Paragraph>
            
            <Title level={4}>My Role</Title>
            <Paragraph style={{ whiteSpace: 'pre-line' }}>
              {project.overview.role}
            </Paragraph>
          </Card>

          {/* Timeline */}
          <Card style={{ marginBottom: 24 }}>
            <Title level={3}>
              <CalendarOutlined /> Project Timeline
            </Title>
            <Timeline mode="left">
              {project.overview.timeline.map((phase, index) => (
                <Timeline.Item 
                  key={index}
                  dot={<CheckCircleOutlined style={{ fontSize: '16px' }} />}
                  color="blue"
                >
                  <Title level={5}>{phase.phase}</Title>
                  <Paragraph>{phase.description}</Paragraph>
                  <ul>
                    {phase.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>

          {/* Solution Section */}
          <div id="solution">
            <Title level={2} style={{ marginBottom: 24 }}>
              <BulbOutlined /> The Solution
            </Title>
            
            {project.solution.keyFeatures.map((feature, index) => (
              <Card key={index} style={{ marginBottom: 16 }}>
                <Title level={4}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
                
                {feature.impact && (
                  <Alert
                    message="Impact"
                    description={feature.impact}
                    type="success"
                    showIcon
                    style={{ marginTop: 16 }}
                  />
                )}
                
                {feature.features && (
                  <ul>
                    {feature.features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {feature.services && (
                  <ul>
                    {feature.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                )}
                
                {feature.benefits && (
                  <Space direction="vertical" size={8}>
                    <Text strong>Benefits:</Text>
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </Space>
                )}
                
                {feature.components && (
                  <Space direction="vertical" size={8}>
                    <Text strong>Components:</Text>
                    <ul>
                      {feature.components.map((component, idx) => (
                        <li key={idx}>{component}</li>
                      ))}
                    </ul>
                  </Space>
                )}
                
                {feature.capabilities && (
                  <Space direction="vertical" size={8}>
                    <Text strong>Capabilities:</Text>
                    <ul>
                      {feature.capabilities.map((capability, idx) => (
                        <li key={idx}>{capability}</li>
                      ))}
                    </ul>
                  </Space>
                )}
                
                {feature.changes && (
                  <ul>
                    {feature.changes.map((change, idx) => (
                      <li key={idx}>{change}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          {/* Technologies Section */}
          <Card id="tech" style={{ marginBottom: 24 }}>
            <Title level={3}>
              <ToolOutlined /> Technologies & Tools
            </Title>
            <Row gutter={[16, 16]}>
              {Object.entries(project.solution.techStack).map(([category, items]) => (
                <Col xs={24} sm={12} key={category}>
                  <Title level={5} style={{ textTransform: 'capitalize' }}>
                    {category}
                  </Title>
                  <Space wrap size={[8, 8]}>
                    {Array.isArray(items) ? (
                      items.map((item) => <Tag key={item}>{item}</Tag>)
                    ) : (
                      <Text>{items}</Text>
                    )}
                  </Space>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Impact Section */}
          <div id="impact">
            <Title level={2} style={{ marginBottom: 24 }}>
              <TrophyOutlined /> Impact & Results
            </Title>
            
            <Row gutter={[16, 16]}>
              {Object.entries(project.impact).map(([category, items]) => (
                <Col xs={24} md={8} key={category}>
                  <Card>
                    <Title level={4} style={{ textTransform: 'capitalize' }}>
                      {category} Impact
                    </Title>
                    <ul style={{ paddingLeft: 20 }}>
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Lessons Learned */}
          <Card style={{ marginTop: 24, marginBottom: 48 }}>
            <Title level={3}>
              <BulbOutlined /> Key Takeaways
            </Title>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
              {project.lessons}
            </Paragraph>
          </Card>

          {/* Navigation */}
          <Row gutter={16} style={{ marginBottom: 48 }}>
            <Col span={12}>
              <Button 
                block 
                size="large" 
                icon={<ArrowLeftOutlined />}
                onClick={() => history.push('/projects')}
              >
                Back to Projects
              </Button>
            </Col>
            <Col span={12}>
              <Button 
                type="primary" 
                block 
                size="large"
                icon={<RocketOutlined />}
                onClick={() => history.push('/contact')}
              >
                Get In Touch
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;