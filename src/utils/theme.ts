import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    // Seed Tokens (Core tokens that affect other tokens)
    colorPrimary: '#165c3b', // Lighter grass green
    colorSuccess: '#165c3b', // Match primary for consistency
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    colorTextBase: '#000000',
    colorBgBase: '#ffffff',
    
    // Font
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 16,
    
    // Border Radius (single token affects all border radius)
    borderRadius: 8,
    
    // Spacing (based on sizeStep and sizeUnit)
    sizeStep: 4,
    sizeUnit: 4,
    
    // Link
    colorLink: '#52c41a',
    colorLinkHover: '#73d13d',
    colorLinkActive: '#389e0d',
    
    // Heights
    controlHeight: 40,
    controlHeightSM: 32,
    controlHeightLG: 48,
    
    // Motion
    motion: true, // Set to false to disable all animations
    
    // Wireframe mode
    wireframe: false,
  },
  components: {
    Layout: {
      headerBg: 'rgba(255, 255, 255, 0.95)',
      headerHeight: 64,
      footerBg: '#ffffff',
      bodyBg: '#ffffff',
    },
    Menu: {
      itemBg: 'transparent',
      subMenuItemBg: 'transparent',
      itemColor: 'rgba(0, 0, 0, 0.65)',
      itemHoverColor: '#2563eb',
      itemSelectedColor: '#2563eb',
      itemSelectedBg: 'transparent',
      itemActiveBg: 'transparent',
      horizontalItemSelectedColor: '#2563eb',
      horizontalItemHoverColor: '#2563eb',
    },
    Button: {
      fontWeight: 500,
      defaultBorderColor: '#d9d9d9',
      primaryShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
    },
    Card: {
      headerFontSize: 16,
      headerHeight: 48,
      paddingLG: 24,
      boxShadowTertiary: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
    },
    Typography: {
      titleMarginBottom: '0.5em',
      titleMarginTop: 0,
      fontWeightStrong: 600,
    },
    Tag: {
      defaultBg: '#f3f4f6',
      defaultColor: '#374151',
    },
    Statistic: {
      titleFontSize: 14,
      contentFontSize: 24,
    },
    Tabs: {
      titleFontSize: 16,
      cardPadding: '8px 16px',
    },
    Timeline: {
      itemPaddingBottom: 20,
      dotBorderWidth: 2,
    },
    Progress: {
      defaultColor: '#2563eb',
      remainingColor: 'rgba(0, 0, 0, 0.04)',
    },
    Avatar: {
      containerSize: 40,
      containerSizeLG: 52,
      containerSizeSM: 32,
      fontSize: 18,
      fontSizeLG: 24,
      fontSizeSM: 14,
    },
    Input: {
      paddingInline: 12,
      paddingBlock: 8,
    },
    Select: {
      controlHeight: 40,
    },
    Empty: {
      fontSize: 14,
    },
    Result: {
      titleFontSize: 24,
      subtitleFontSize: 14,
      iconFontSize: 72,
      extraMargin: '32px 0 0 0',
    },
    Space: {
      // Space component uses size prop, not tokens
    },
  },
};