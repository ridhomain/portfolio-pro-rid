// src/pages/contact/index.tsx
import React from 'react';
import { Typography, Space, Button } from 'antd';
import { 
  MailOutlined, 
  WhatsAppOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { usePortfolio } from '@/hooks/usePortfolio';
import Loading from '@/components/Loading';

const { Title, Paragraph, Text } = Typography;

const ContactPage: React.FC = () => {
  const { data, loading } = usePortfolio();

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'email':
        return <MailOutlined />;
      case 'whatsapp':
        return <WhatsAppOutlined />;
      default:
        return <MessageOutlined />;
    }
  };

  const getHref = (platform: string, value: string) => {
    switch (platform.toLowerCase()) {
      case 'email':
        return `mailto:${value}`;
      case 'whatsapp':
        // WhatsApp link format with pre-filled message
        return `https://wa.me/${value}?text=Hi%20Ahmad,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`;
      default:
        return value;
    }
  };

  if (loading) {
    return <Loading tip="Loading contact information..." />;
  }

  return (
    <div style={{ 
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{ 
        textAlign: 'center', 
        maxWidth: 600,
        width: '100%'
      }}>
        <Title level={2} style={{ marginBottom: 16 }}>
          Let's Connect
        </Title>
        
        <Text type="secondary" style={{ fontSize: 16 }}>
          Have a project in mind? Let's talk about it.
        </Text>
        
        <Paragraph style={{ 
          fontSize: 18, 
          marginTop: 32, 
          marginBottom: 48,
          color: 'rgba(0, 0, 0, 0.65)'
        }}>
          {data.contact.message || "I'm always interested in new opportunities and collaborations. Feel free to reach out via email or WhatsApp."}
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {Object.entries(data.contact).map(([platform, value]) => {
            if (platform === 'message' || !value) return null;
            
            return (
              <Button
                key={platform}
                type="primary"
                size="large"
                icon={getIcon(platform)}
                href={getHref(platform, value)}
                target={platform !== 'email' ? '_blank' : undefined}
                block
                style={{ 
                  maxWidth: 300, 
                  margin: '0 auto',
                  height: 48,
                  fontSize: 16
                }}
              >
                {platform === 'email' ? value : `Connect on ${platform}`}
              </Button>
            );
          })}
        </Space>

        {/* Additional message */}
        <Paragraph style={{ 
          marginTop: 48, 
          fontSize: 14, 
          color: 'rgba(0, 0, 0, 0.45)' 
        }}>
          I typically respond within 24-48 hours.
        </Paragraph>
      </div>
    </div>
  );
};

export default ContactPage;