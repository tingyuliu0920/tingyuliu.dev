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
import { useDocumentTitle } from "../router";
import { useMediaQuery, useTheme } from "@mui/material";

const Experience = () => {
  useDocumentTitle("Experience | Anne is pilipala");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="animate-fadeIn">
      <h3 className="mb-3 text-3xl font-bold leading-loose text-green dark:text-gray-300">
        Experience
      </h3>
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
                <TimelineDot></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px" }}>
                <section className="text-center">
                  <p className="font-bold sm:text-xl">{experience.company}</p>
                  <h6 className="mb-[10px] sm:text-xl">
                    {experience.position}
                  </h6>
                  {experience.logo && (
                    <img
                      src={experience.logo}
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
