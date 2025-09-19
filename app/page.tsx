import Section from "./components/section";
import SponsorsAndOfficers from "./components/sponsorsAndOfficers";

export default function Home() {
  return (
    <main className="bg-background place-items-center">
      <Section
        isContentLeft={false}
        headerText="GSMST CSHS"
        content={
          <div className="text-center">
            <p className="text-4xl font-semibold my-5">
              Computer Science Honor Society
            </p>
            <p className="text-xl">
              Our primary goal for CSHS is to{" "}
              <span className="font-semibold">serve the local schools</span> and
              communities through various workshops, peer-to-peer tutoring,
              alumni panels, and partnerships, all aimed at{" "}
              <span className="font-semibold">
                increasing computer science awareness.
              </span>
            </p>
          </div>
        }
      />
      <SponsorsAndOfficers />

      <Section
        isContentLeft={true}
        headerText="Member Eligibility"
        content={
          <div className="p-5">
            <p className="">
              Membership into the Computer Science Honor Society is by
              invitation only. Eligible Juniors and Seniors receive an
              invitation to apply during September of each year. To be eligible,
              a student must have:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Completed 2 Computer Science Courses. Eligible classes include:
              </li>
              <ul className="list-[circle] list-outside pl-6">
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
      <Section
        isContentLeft={false}
        headerText="Service Requirements"
        content={
          <div className="m-5 space-y-4">
            <p>
              Section 1. Membership is an honor bestowed upon a student.
              Selection for a membership is at discretion of the Officer
              Committee and is based on outstanding scholarship, character,
              leadership, and service. Once selected, members have the
              responsibility to demonstrate these qualities.
            </p>

            <p>
              Section 2. Members must obtain a minimum of 10 service points
              during the school year. Members must obtain a minimum of 4 points
              during the first semester.
            </p>

            <p>
              Section 3. Additionally, members must contribute to a society
              project either first or second semester. Examples of these include
              Samsung Solve For Tomorrow and the Congressional App Challenge.
              For each project, there will be multiple teams in order to
              guarantee that every student has the chance to join a project.
              Each team will have 5-6 members, and each member must actively
              participate; participation will be checked by the project manager.
            </p>

            <p>
              Section 4. Failure to obtain the minimum number of hours during a
              semester or failure to actively participate in the project
              automatically places a member on probation. Probation lasts until
              the member obtains his or her hours. Two consecutive semesters of
              probation will result in automatic dismissal from the Society.
            </p>

            <p>
              Section 5. Members who resign or are dismissed are never again
              eligible for membership or its benefits.
            </p>
          </div>
        }
      />
    </main>
  );
}
