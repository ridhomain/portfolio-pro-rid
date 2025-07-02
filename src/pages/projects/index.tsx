import React from 'react';
import { Typography, Card, Tag, Row, Col, Button, Space, Empty, Spin } from 'antd';
import { EyeOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title, Paragraph } = Typography;

const ProjectsPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  if (loading) {
    return (
      <div className="section">
        <div className="container">
          <Row justify="center" style={{ minHeight: 400 }}>
            <Col>
              <Spin size="large" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
          Featured Projects
        </Title>
        
        {data.projects.length === 0 ? (
          <Row justify="center">
            <Col span={24}>
              <Empty description="No projects available yet" />
            </Col>
          </Row>
        ) : (
          <Row gutter={[24, 24]}>
            {data.projects.map((project: any) => (
              <Col xs={24} sm={12} lg={8} key={project.title}>
                <Card
                  hoverable
                  style={{ height: '100%' }}
                  actions={[
                    <Button 
                      type="text" 
                      icon={<EyeOutlined />}
                      onClick={() => history.push(`/project/${project.id}`)}
                    >
                      View Details
                    </Button>,
                    project.github && (
                      <Button 
                        type="text" 
                        icon={<GithubOutlined />}
                        href={project.github}
                        target="_blank"
                      >
                        Code
                      </Button>
                    ),
                    project.demo && (
                      <Button 
                        type="text" 
                        icon={<LinkOutlined />}
                        href={project.demo}
                        target="_blank"
                      >
                        Demo
                      </Button>
                    ),
                  ].filter(Boolean)}
                >
                  <Card.Meta
                    title={
                      <Title level={4} style={{ marginBottom: 8 }}>
                        {project.title}
                      </Title>
                    }
                    description={
                      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <Paragraph 
                          ellipsis={{ rows: 3 }}
                          style={{ marginBottom: 0 }}
                        >
                          {project.description}
                        </Paragraph>
                        <Space wrap>
                          {project.techstack?.split(',').map((tech: string) => (
                            <Tag key={tech.trim()}>{tech.trim()}</Tag>
                          ))}
                        </Space>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;