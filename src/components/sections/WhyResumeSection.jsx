import React from "react";
import { ModalProvider, useModal } from "../../context/ModalContext.jsx";
import { motion } from "framer-motion";
import "../../styles.css";
import {
  EmojiPeopleRounded,
  CampaignRounded,
  PhoneInTalkRounded,
  TipsAndUpdatesRounded,
  ChecklistRounded,
} from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";

const WhyResumeSection = () => {
  const { openModal } = useModal();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const reasons = [
    {
      icon: (
        <EmojiPeopleRounded style={{ fontSize: isMobile ? "2rem" : "3.5rem" }} />
      ),
      title: "Make a Lasting First Impression",
    },
    {
      icon: (
        <CampaignRounded style={{ fontSize: isMobile ? "2rem" : "3.5rem" }} />
      ),
      title: "Get Noticed by Recruiters",
    },
    {
      icon: (
        <PhoneInTalkRounded style={{ fontSize: isMobile ? "2rem" : "3.5rem" }} />
      ),
      title: "Secure Interview Calls",
    },
    {
      icon: (
        <TipsAndUpdatesRounded
          style={{ fontSize: isMobile ? "2rem" : "3.5rem" }}
        />
      ),
      title: "Showcase your experience and skills effectively",
    },
    {
      icon: (
        <ChecklistRounded style={{ fontSize: isMobile ? "2rem" : "3.5rem" }} />
      ),
      title: "Increase your chances of landing a job",
    },
  ];

  return (
    <ModalProvider>
      <section className="why-resume-container">
        <motion.h2
          className="why-resume-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why do you need a <br />
          <span className="serif">Powerful Resume?</span>
        </motion.h2>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <span role="img" aria-label={reason.title}>
                {reason.icon}
              </span>
              <h3>{reason.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
          >
            UPGRADE YOUR RESUME TODAY!
          </motion.button>
        </motion.div>
      </section>
    </ModalProvider>
  );
};

export default WhyResumeSection;
