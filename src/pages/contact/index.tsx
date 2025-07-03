import React from 'react';
import { Typography, Space, Button, Spin } from 'antd';
import { 
  MailOutlined, 
  WhatsAppOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { usePortfolio } from '@/hooks/usePortfolio';

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
    return (
      <div style={{ 
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 56px)',
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

        <Space size="large" wrap style={{ justifyContent: 'center' }}>
          {data.contact.email && (
            <Button
              type="primary"
              size="large"
              icon={getIcon('email')}
              href={getHref('email', data.contact.email)}
              style={{ 
                height: 48,
                paddingInline: 32,
                minWidth: 160
              }}
            >
              Email Me
            </Button>
          )}

          {data.contact.whatsapp && (
            <Button
              size="large"
              icon={getIcon('whatsapp')}
              href={getHref('whatsapp', data.contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                height: 48,
                paddingInline: 32,
                minWidth: 160,
                color: '#25D366',
                borderColor: '#25D366',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#25D366';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#25D366';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#25D366';
                e.currentTarget.style.borderColor = '#25D366';
              }}
            >
              WhatsApp
            </Button>
          )}
        </Space>

        <Paragraph type="secondary" style={{ marginTop: 32 }}>
          I typically respond within 24-48 hours
        </Paragraph>
      </div>
    </div>
  );
};

export default ContactPage;