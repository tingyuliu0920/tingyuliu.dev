import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experienceList } from "../data";
import { useMediaQuery, useTheme } from "@mui/material";
import { getImageURL } from "../utils/imageUtil";
import Title from "./Title";

const Experience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="animate-fadeIn px-[10px]">
      <Title>Experience</Title>
      <div className="flex justify-center">
        <Timeline
          sx={{
            maxWidth: "100%",
            [`& .${timelineOppositeContentClasses.root}`]: {
              display: "flex",
              justifyContent: matches ? "start" : "end",
              flex: matches ? "initial" : "0.3",
              width: matches ? "88px" : "auto",
              padding: matches ? "6px 4px" : "6x 10px",
            },
          }}
        >
          {experienceList.map((experience) => (
            <TimelineItem key={experience.company}>
              <TimelineOppositeContent align="right">
                <div className="items-right flex flex-col justify-center text-base text-gray-700 dark:text-gray-400">
                  <span>{experience.endTime} </span>-{" "}
                  <span>{experience.startTime}</span>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  sx={{
                    background: "#7fc06e",
                  }}
                ></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px" }}>
                <section className="text-center">
                  <p className="sm:text-xl">
                    {experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        className="text-green hover:underline"
                        rel="noopener noreferrer"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      <>{experience.company}</>
                    )}
                  </p>
                  <h6 className="mb-[10px] text-slate-700 sm:text-xl dark:text-slate-300">
                    {experience.position}
                  </h6>
                  {experience.logo && (
                    <img
                      src={getImageURL(`companys/${experience.logo}`)}
                      alt=""
                      className="mb-[10px] inline-block w-[100px] sm:w-[150px]"
                    />
                  )}
                  <ul className="text-left">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index}>- {responsibility}</li>
                      ),
                    )}
                  </ul>
                </section>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
