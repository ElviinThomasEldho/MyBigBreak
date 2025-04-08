import React from "react";
import { motion } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useModal } from "../../context/ModalContext";

// Icons
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BuildIcon from "@mui/icons-material/Build";

const resumeTips = [
  {
    icon: <WorkIcon />,
    title: "Craft a Strong Professional Summary",
    description: "Highlight key skills and industry keywords to make a great first impression.",
  },
  {
    icon: <AssessmentIcon />,
    title: "Showcase Your Impact",
    description: "Use quantifiable achievements to demonstrate your contributions.",
  },
  {
    icon: <StarIcon />,
    title: "Certifications & Projects Matter",
    description: "Highlight relevant certifications, awards, and key projects.",
  },
  {
    icon: <BuildIcon />,
    title: "Differentiate Skills & Competencies",
    description: "List both technical skills and behavioral competencies clearly.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Make Career Trajectory Clear",
    description: "Use visual elements to showcase your professional growth.",
  },
  {
    icon: <SchoolIcon />,
    title: "Focus on Work Experience",
    description: "Highlight results-driven experiences rather than just job duties.",
  },
];

const ResumeTipsSection = () => {
  const { openModal } = useModal();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.section
      className="resume-tips-container"
      style={{
        paddingInline: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="resume-tips-title"
        style={{ textAlign: "center", marginBottom: "2rem" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Your Resume Upgrade Journey
      </motion.h2>

      <Timeline
        position={isMobile ? "right" : "alternate"}
        style={{ width: isMobile ? "100%" : "65%" }}
      >
        {resumeTips.map((tip, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
                display: isMobile ? "none" : "block",
              }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
              color="text.secondary"
              fontFamily={"DM Sans"}
            >
              {/* Step {index + 1} */}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">{tip.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" component="span">
                  {tip.title}
                </Typography>
                <Typography fontFamily={"DM Sans"}>
                  {tip.description}
                </Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <motion.div
        style={{ textAlign: "center", marginTop: "2rem" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="cta-button"
          onClick={openModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Improve your Resume Now!
          <p className="offer-subtext">Get UPTO 40% OFF on your New Resume</p>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ResumeTipsSection;
