import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Grid,
  Container,
  Divider,
  Fade,
  Popper,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import BuildIcon from "@mui/icons-material/Build";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";

const ResumeTipsSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  const handleMouseEnter = (event, sectionId) => {
    setAnchorEl(event.currentTarget);
    setOpenSection(sectionId);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setOpenSection(null);
  };

  // Resume sections with common mistakes
  const resumeSections = [
    {
      id: "summary",
      title: "Professional Summary",
      icon: <PersonIcon color="primary" />,
      content: (
        <Typography variant="body1">
          I am a hard-working individual who likes working with people and has
          good communication skills. I have 8+ years of experience in digital
          marketing.
        </Typography>
      ),
      tip: {
        title: "Professional Summary Needs Improvement",
        text: "Your summary is too generic. Include your unique value proposition and specific marketing specialties. Avoid clichés like 'hard-working' and focus on your unique contributions.",
      },
    },
    {
      id: "experience",
      title: "Work Experience",
      icon: <WorkIcon color="primary" />,
      content: (
        <>
          <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Digital Marketing Lead @ KVB Digital Marketing Co. (2017 - 2019)
            </Typography>
            <Typography variant="body2">
              Responsible for digital marketing campaigns and working with
              clients.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Junior Digital Marketer @ Crewe Digital Marketing (2011 - 2017)
            </Typography>
            <Typography variant="body2">
              Handled various marketing tasks and assisted senior team members.
            </Typography>
          </Box>
        </>
      ),
      tip: {
        title: "Experience Needs Quantifiable Results",
        text: "Your role descriptions are vague. Add specific metrics like '200% increase in client engagement' or 'Managed $50K ad budget' to show the impact of your work.",
      },
    },
    {
      id: "education",
      title: "Education",
      icon: <SchoolIcon color="primary" />,
      content: (
        <>
          <Box mb={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Digital Marketing Certificate - Norgen Media College
            </Typography>
            <Typography variant="body2">Graduated 2011</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              BA in Marketing Communications - Norgen City University
            </Typography>
            <Typography variant="body2">Graduated 2009</Typography>
          </Box>
        </>
      ),
      tip: {
        title: "Education Details Missing",
        text: "Include your academic achievements like GPA (if above 3.0), honors, relevant coursework, and leadership positions to showcase your academic strengths.",
      },
    },
    {
      id: "skills",
      title: "Skills & Expertise",
      icon: <BuildIcon color="primary" />,
      content: (
        <List dense disablePadding>
          <ListItem disableGutters>
            <ListItemText primary="Social media" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Good with computers" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Marketing" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Communication" />
          </ListItem>
        </List>
      ),
      tip: {
        title: "Skills Need Specificity",
        text: "Your skills are too general. Separate technical skills (e.g., 'Google Analytics,' 'HubSpot CRM') from soft skills and use industry-specific terminology to show expertise.",
      },
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: <StarIcon color="primary" />,
      content: (
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          No certifications listed
        </Typography>
      ),
      tip: {
        title: "Missing Professional Certifications",
        text: "Add relevant certifications like Google Analytics, HubSpot Inbound Marketing, or Facebook Blueprint to demonstrate your commitment to professional development.",
      },
    },
    {
      id: "references",
      title: "References",
      icon: <PeopleIcon color="primary" />,
      content: (
        <Typography variant="body2">
          References available upon request
        </Typography>
      ),
      tip: {
        title: "References Strategy",
        text: "Instead of 'References available upon request,' either list 2-3 professional references with their contact information or remove this section entirely to save space.",
      },
    },
  ];

  const currentTip = resumeSections.find(
    (section) => section.id === openSection
  )?.tip;

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box mb={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          How to improve your resume?
        </Typography>
        {/* <Typography variant="h6" gutterBottom color="text.secondary">
          Here are a few tips
        </Typography> */}
        <Typography variant="body2" color="primary">
          Hover over resume sections to see improvement tips
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ flexWrap: "nowrap" }}
        >
          {/* Left Column */}
          <Grid item xs={12} md={3} sx={{maxWidth: "60%"}}>
            {[0, 1, 2].map((index) => (
              <Box key={resumeSections[index].id} mb={3}>
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "150px",
                    "&:hover": { boxShadow: 3, bgcolor: "rgba(0, 0, 0, 0.02)" },
                  }}
                  onMouseEnter={(e) =>
                    handleMouseEnter(e, resumeSections[index].id)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={1} display="flex" alignItems="center">
                        {resumeSections[index].icon}
                      </Box>
                      <Typography variant="h6" component="h2">
                        {resumeSections[index].title}
                      </Typography>
                      <Tooltip
                        title="Hover for improvement tips"
                        placement="top"
                      >
                        <InfoIcon
                          color="action"
                          fontSize="small"
                          sx={{ ml: 1, opacity: 0.6 }}
                        />
                      </Tooltip>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    {resumeSections[index].content}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            {[3, 4, 5].map((index) => (
              <Box key={resumeSections[index].id} mb={3}>
                <Card
                  variant="outlined"
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "150px",
                    "&:hover": { boxShadow: 3, bgcolor: "rgba(0, 0, 0, 0.02)" },
                  }}
                  onMouseEnter={(e) =>
                    handleMouseEnter(e, resumeSections[index].id)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={1} display="flex" alignItems="center">
                        {resumeSections[index].icon}
                      </Box>
                      <Typography variant="h6" component="h2">
                        {resumeSections[index].title}
                      </Typography>
                      <Tooltip
                        title="Hover for improvement tips"
                        placement="top"
                      >
                        <InfoIcon
                          color="action"
                          fontSize="small"
                          sx={{ ml: 1, opacity: 0.6 }}
                        />
                      </Tooltip>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    {resumeSections[index].content}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Paper>

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="top"
        transition
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, -10],
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                maxWidth: 300,
                bgcolor: "warning.light",
                color: "black",
                border: "1px solid",
                borderColor: "warning.main",
              }}
            >
              {currentTip && (
                <>
                  <Typography variant="subtitle1" fontWeight="bold" color="white" lineHeight={1} mb={1}>
                    {currentTip.title}
                  </Typography>
                  <Typography variant="body2">{currentTip.text}</Typography>
                </>
              )}
            </Paper>
          </Fade>
        )}
      </Popper>

      {/* <Box mt={4} textAlign="center">
        <Typography variant="caption" color="text.secondary">
          Interactive resume template with live improvement feedback
        </Typography>
      </Box> */}
    </Container>
  );
};

export default ResumeTipsSection;
