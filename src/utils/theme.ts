import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    // Primary brand color - grass green
    colorPrimary: '#165c3b',
    
    // Base colors
    colorBgContainer: '#ffffff',
    colorBgLayout: '#fafafa',
    colorText: 'rgba(0, 0, 0, 0.88)',
    colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
    colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
    
    // Typography
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 16,
    fontSizeLG: 18,
    fontSizeSM: 14,
    
    // Spacing and sizing
    borderRadius: 8,
    controlHeight: 40,
    
    // Mobile-first breakpoints
    screenXS: 480,
    screenSM: 576,
    screenMD: 768,
    screenLG: 992,
    screenXL: 1200,
  },
  components: {
    // Simplified component overrides - let Ant Design handle most styling
    Layout: {
      headerBg: 'transparent',
      bodyBg: '#fafafa',
    },
    Menu: {
      // Use primary color for all menu states
      itemSelectedColor: '#165c3b',
      horizontalItemSelectedColor: '#165c3b',
      itemHoverColor: '#165c3b',
    },
    Button: {
      // Mobile-friendly button sizing
      controlHeight: 44,
      paddingInline: 24,
      fontWeight: 500,
    },
  },
};