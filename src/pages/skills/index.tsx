import React from 'react';
import { Typography, Card, Tag, Row, Col, Spin, Progress, Space } from 'antd';
import { usePortfolio } from '@/hooks/usePortfolio';

const { Title } = Typography;

const SkillsPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  // Skill level mapping (you can customize this based on your data)
  const getSkillLevel = (skill: string): number => {
    // This is just an example - you might want to store this in your data
    const expertSkills = ['Python', 'JavaScript', 'Node.js', 'React'];
    const advancedSkills = ['TypeScript', 'PostgreSQL', 'MongoDB', 'Docker'];
    
    if (expertSkills.includes(skill)) return 95;
    if (advancedSkills.includes(skill)) return 85;
    return 75;
  };

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
          Technical Skills
        </Title>
        
        <Row gutter={[24, 24]}>
          {Object.entries(data.skills).map(([category, skills]) => (
            <Col xs={24} sm={12} lg={8} key={category}>
              <Card 
                title={category}
                bordered={false}
                style={{ 
                  height: '100%',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  {skills.map((skill: string) => (
                    <div key={skill}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        marginBottom: 4
                      }}>
                        <span>{skill}</span>
                        <span style={{ fontSize: 12, color: '#6b7280' }}>
                          {getSkillLevel(skill)}%
                        </span>
                      </div>
                      <Progress 
                        percent={getSkillLevel(skill)} 
                        showInfo={false}
                        strokeColor={{
                          '0%': '#73d13d',
                          '100%': '#52c41a',
                        }}
                      />
                    </div>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Alternative tag-based display */}
        <Title level={3} style={{ marginTop: 64, marginBottom: 32 }}>
          All Technologies
        </Title>
        <Card bordered={false}>
          <Space wrap size="middle">
            {Object.values(data.skills).flat().map((skill: string) => (
              <Tag 
                key={skill}
                style={{ 
                  padding: '8px 16px',
                  fontSize: 14,
                  borderRadius: 20
                }}
              >
                {skill}
              </Tag>
            ))}
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default SkillsPage;