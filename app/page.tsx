import { Typography, Container } from "@mui/material";
import Section from "./components/section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full text-left text-lg">
      <Section
        isContentLeft={false}
        headerText="GSMST CSHS"
        content={
          <Container>
            <Typography className="text-center" variant="h3">
              Computer Science Honor Society
            </Typography>
            <Typography className="text-center" variant="h6">
              Our primary goal for CSHS is to serve the local schools and
              communities through various workshops, peer-to-peer tutoring,
              alumni panels, and partnerships, all aimed at increasing computer
              science awareness.
            </Typography>
          </Container>
        }
      />
      <Section
        isContentLeft={true}
        headerText="Member Eligibility"
        content={
          <div>
            <p className="">
              Membership into the Computer Science Honor Society is by
              invitation only. Eligible Juniors and Seniors receive an
              invitation to apply during September of each year. To be eligible,
              a student must have:
            </p>
            <ul className="list-disc">
              <li>
                Completed 2 Computer Science Courses. Eligible classes include:
              </li>
              <ul className="list-disc">
                <li>AP Computer Science Principles</li>
                <li>AP Computer Science A</li>
                <li>Game Design I</li>
                <li>Game Design II</li>
                <li>Robotics I</li>
                <li>Robotics II</li>
                <li>Robotics III</li>
                <li>Intro to Artificial Intelligence</li>
                <li>Data Science II</li>
                <li>Linear Algebra with Computer Science</li>
              </ul>
              <li>Obtain a 90+ unweighted CS average in those classes</li>
              <li>Obtain an overall 3.7 GPA</li>
            </ul>
          </div>
        }
      />
    </main>
  );
}
