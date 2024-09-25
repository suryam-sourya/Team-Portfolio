import React from 'react';
import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DesignServices, Code, Storage, Cloud, Language, Search } from '@mui/icons-material'; // Icons for categories
import './Tech.css';

export const Tech = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Container className="tech-section" style={{ paddingTop: isMobile ? '80px' : '120px' }}>
      <Typography variant="h1" className="tech-heading" style={{ paddingBottom: isMobile ? '20px' : '30px' }}>
        Technologies
      </Typography>

      <Grid container spacing={isMobile ? 2 : 3} className="tech-grid">
        {/* Design Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <DesignServices fontSize="large" className="tech-icon" /> Design
          </Typography>
          <ul className="tech-list">
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Canva</li>
          </ul>
        </Grid>

        {/* Frontend Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <Code fontSize="large" className="tech-icon" /> Frontend
          </Typography>
          <ul className="tech-list">
            <li>HTML</li>
            <li>Tailwind CSS</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Material UI</li>
          </ul>
        </Grid>

        {/* Backend Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <Storage fontSize="large" className="tech-icon" /> Backend
          </Typography>
          <ul className="tech-list">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </Grid>

        {/* Database Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <Storage fontSize="large" className="tech-icon" /> Database
          </Typography>
          <ul className="tech-list">
            <li>MongoDB</li>
            <li>AWS RDS</li>
          </ul>
        </Grid>

        {/* Deployment Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <Cloud fontSize="large" className="tech-icon" /> Deployment
          </Typography>
          <ul className="tech-list">
            <li>Cloudflare</li>
            <li>AWS</li>
            <li>Azure</li>
          </ul>
        </Grid>

        {/* CMS Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <Language fontSize="large" className="tech-icon" /> CMS
          </Typography>
          <ul className="tech-list">
            <li>WIX</li>
            <li>WordPress</li>
          </ul>
        </Grid>

        {/* SEO Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" className="tech-category">
            <Search fontSize="large" className="tech-icon" /> SEO
          </Typography>
          <ul className="tech-list">
            <li>Google Analytics</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};
