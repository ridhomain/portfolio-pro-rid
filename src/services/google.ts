// src/services/google.ts
import { gapi } from 'gapi-script';

// For Umi apps, environment variables must be prefixed with UMI_APP_
const SHEET_ID = process.env.UMI_APP_GOOGLE_SPREADSHEET_ID || '';
const API_KEY = process.env.UMI_APP_GOOGLE_API_KEY || '';

// Check if credentials are available
const hasCredentials = () => {
  if (!SHEET_ID || !API_KEY) {
    console.warn('Google Sheets credentials not found. Using mock data.');
    console.warn('Make sure to set UMI_APP_GOOGLE_SPREADSHEET_ID and UMI_APP_GOOGLE_API_KEY in .env');
    return false;
  }
  console.log('Google Sheets credentials found, initializing GAPI');
  return true;
};

// Mock data for development
const mockData = {
  about: {
    name: 'Ahmad Ridho',
    title: 'Senior Backend Engineer',
    summary: 'Building scalable systems and crafting elegant solutions. Passionate about distributed systems, microservices architecture, and creating impactful software.',
    description: 'With over 9 years of experience in software engineering, I specialize in building robust backend systems and scalable architectures.',
    expertise: 'My expertise spans across multiple programming languages and frameworks, with a focus on creating efficient, maintainable, and innovative solutions.',
    yearsExperience: '9',
    projectsCompleted: '50',
    technologies: '15',
    clients: '20',
    achievements: 'Successfully designed and implemented a comprehensive system overhaul that reduced operational costs while improving maintainability, scalability, and performance.',
    philosophy: "Great software isn't just about writing code—it's about understanding problems deeply, designing solutions thoughtfully, and implementing systems that create lasting impact."
  },
  skills: {
    Languages: ['JavaScript', 'TypeScript', 'Go', 'Python'],
    Backend: ['Fastify', 'HapiJS', 'Express', 'Go Fiber', 'Django', 'Odoo'],
    Frontend: ['React', 'UmiJS', 'Next.js', 'Ant Design'],
    Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'NATS JetStream', 'Trino', 'Iceberg', 'MinIO'],
    Microservices: ['NATS', 'NATS JetStream', 'Redis'],
    DevOps: ['Linux', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'GCP'],
    Tools: ['Git', 'VS Code', 'Postman', 'Claude AI']
  },
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Built a scalable microservices-based e-commerce platform handling 100k+ daily users',
      techstack: 'Node.js, React, PostgreSQL, Redis, Docker',
      github: 'https://github.com/username/project1',
      demo: 'https://demo.com',
      featured: 'TRUE'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Developed real-time analytics dashboard processing millions of events per day',
      techstack: 'Python, FastAPI, MongoDB, React, WebSocket',
      github: 'https://github.com/username/project2',
      demo: '',
      featured: 'TRUE'
    },
    {
      title: 'Task Management System',
      description: 'Created a collaborative task management system with real-time updates',
      techstack: 'Golang, Vue.js, PostgreSQL, Redis',
      github: 'https://github.com/username/project3',
      demo: '',
      featured: 'FALSE'
    }
  ],
  contact: {
    email: 'ahmad.ridho@gmail.com',
    github: 'ahmadridho',
    linkedin: 'ahmadridho',
    twitter: 'ahmadridho',
    message: "I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together or just have a chat."
  }
};

class GoogleSheetsService {
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  private async initializeGapi(): Promise<void> {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve, reject) => {
      gapi.load('client', {
        callback: async () => {
          try {
            await gapi.client.init({
              apiKey: API_KEY,
              discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            });
            this.initialized = true;
            console.log('GAPI initialized successfully');
            resolve();
          } catch (error) {
            console.error('Error initializing GAPI:', error);
            reject(error);
          }
        },
        onerror: () => {
          const error = new Error('Failed to load GAPI client');
          console.error(error);
          reject(error);
        },
      });
    });

    return this.initPromise;
  }

  async getSheetData(range: string) {
    // Use mock data if no credentials
    if (!hasCredentials()) {
      return this.getMockData(range);
    }

    try {
      // Initialize GAPI if needed
      await this.initializeGapi();

      console.log(`Fetching data from Google Sheets: ${range}`);
      
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: range,
      });
      
      const values = response.result.values || [];
      console.log(`Successfully fetched data for ${range}`);
      
      return values;
    } catch (error: any) {
      console.error('Error fetching sheet data:', error);
      
      // Provide helpful error messages
      if (error.status === 403) {
        console.error('Permission denied: Make sure your Google Sheet is publicly readable');
      } else if (error.status === 400) {
        console.error('Bad request: Check your spreadsheet ID and range');
      } else if (error.status === 404) {
        console.error('Not found: Check your spreadsheet ID');
      }
      
      // Fallback to mock data on error
      console.warn('Falling back to mock data due to API error');
      return this.getMockData(range);
    }
  }

  private getMockData(range: string): any[][] {
    const sheet = range.split('!')[0].toLowerCase();
    switch (sheet) {
      case 'about':
        return Object.entries(mockData.about);
      case 'skills':
        return Object.entries(mockData.skills).map(([cat, skills]) => [cat, skills.join(', ')]);
      case 'projects':
        const headers = ['Title', 'Description', 'TechStack', 'Github', 'Demo', 'Featured'];
        const rows = mockData.projects.map(p => [
          p.title, p.description, p.techstack, p.github, p.demo, p.featured
        ]);
        return [headers, ...rows];
      case 'contact':
        return Object.entries(mockData.contact);
      default:
        return [];
    }
  }

  async getAboutData() {
    const data = await this.getSheetData('About!A:B');
    return this.parseKeyValueData(data);
  }

  async getSkillsData() {
    const data = await this.getSheetData('Skills!A:B');
    return this.parseSkillsData(data);
  }

  async getProjectsData() {
    const data = await this.getSheetData('Projects!A:F');
    return this.parseProjectsData(data);
  }

  async getContactData() {
    const data = await this.getSheetData('Contact!A:B');
    return this.parseKeyValueData(data);
  }

  private parseKeyValueData(data: any[][]): Record<string, string> {
    const result: Record<string, string> = {};
    data.forEach(([key, value]) => {
      if (key && value) {
        result[key] = value;
      }
    });
    return result;
  }

  private parseSkillsData(data: any[][]): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    data.forEach(([category, skills]) => {
      if (category && skills) {
        // Handle the new categorization format
        const cleanCategory = category.replace(/_Expert|_Intermediate/g, '');
        result[category] = skills.split(',').map((s: string) => s.trim());
      }
    });
    return result;
  }

  private parseProjectsData(data: any[][]): any[] {
    const [headers, ...rows] = data;
    if (!headers || rows.length === 0) return [];
    
    return rows.map(row => {
      const project: any = {};
      headers.forEach((header, index) => {
        const key = header.toLowerCase().replace(/\s+/g, '');
        project[key] = row[index] || '';
      });
      // Add an ID for routing
      project.id = project.title ? project.title.toLowerCase().replace(/\s+/g, '-') : '';
      return project;
    });
  }

  // Force re-initialization (useful for testing)
  reset() {
    this.initialized = false;
    this.initPromise = null;
  }
}

export default new GoogleSheetsService();