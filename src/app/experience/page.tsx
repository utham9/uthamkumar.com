import { Screen } from "@/components/Screen";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <Screen command="git log --career">
      <h2 className="h-screen-title">Experience</h2>

      <div className="job-list">
        {experience.map((job) => (
          <article className="job" key={job.role + job.dates}>
            <div className="job-head">
              <div>
                <h3 className="job-role">{job.role}</h3>
                <div className="job-org">{job.org}</div>
                <div className="job-place">{job.place}</div>
              </div>
              <span className="job-dates">{job.dates}</span>
            </div>
            <ul className="job-bullets">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Screen>
  );
}
