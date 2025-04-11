import Activity, { ActivityProps } from "./Activity";
import "./Activities.css";

/**
 * TODO: replace each `imgSrc`, `imgAlt`, `title`, `description`
 * and `quicklinks` with your project information.
 */
const activities: ActivityProps[] = [
  // Activity 1
  {
    imgSrc: "/images/activities/activity1.jpeg",
    imgAlt: "Coding with David Malin at HackHarvard.",
    title: "Cooking",
    description: (
      <>
        <p>
          In my free time, I enjoy cooking and baking with my friends and family. Some of the favorite dishes that I have made include beef bulgogi and brown butter banana oatmeal cookies.
        </p>
      </>
    ),
    quicklinks: [
      { href: "https://github.com/whyphi", name: "WhyPhi" },
      { href: "https://grub-gallery.vercel.app/", name: "GrubGallery" },
      { href: "https://github.com/wderocco8/ZipSurf", name: "ZipSurf" },
      {
        href: "https://github.com/alexjmiller5/BU-GCalSync",
        name: "BU-GCalSync",
      },
    ],
  },
  // Activity 2
  {
    imgSrc: "/images/activities/activity2.jpeg",
    imgAlt: "Rock climbing at FitRec.",
    title: "Running By The Charles",
    description: (
      <>
        <p>
          I tried to get into running around November of 2024, but I stopped temporarily as it was getting quite cold in Boston. I loved to run in the morning around the Charles River as I found it to be quite calming and therapeutic to do something productive in the morning and be in touch with nature and away from my phone for awhile. I'll definitely try and get back into it when I get the chance.
        </p>
      </>
    ),
    quicklinks: [
      {
        href: "https://www.bu.edu/fitrec/what-we-offer/outdoor-programs/rock-climbing/",
        name: "Fitrec Climbing Wall",
      },
    ],
  },
  // Activity 3
  {
    imgSrc: "/images/activities/activity3.jpeg",
    imgAlt: "Tabling with PCT (Phi Chi Theta).",
    title: "Traveling",
    description: (
      <>
        <p>
          Although I've been blessed to travel around the world ever since I was young,
          I only appreciated traveling when I grew older. I love to see new places and admire
          a variety of architecture, food, and culture. Some of my favorite places include Japan, Dubai, and France.
        </p>
      </>
    ),
    quicklinks: [
      { href: "https://bupct.com/", name: "BUPCT" },
      { href: "https://github.com/whyphi", name: "WhyPhi" },
    ],
  },
  // Activity 4
  {
    imgSrc: "/images/activities/activity4.jpeg",
    imgAlt: "Cooking with my mom.",
    title: "Pledging PCT",
    description: (
      <>
        <p>
          Although I have not yet crossed for PCT, I genuinely have been enjoying the work I've been doing for this business frat, and more importantly, the people I've met along the way. The brothers as well my fellow pledges in this frat have honestly been so supportive. Whether it be professional, academic, or social advice, I know I can count on them.
        </p>
      </>
    ),
    quicklinks: [
      { href: "https://www.babi.sh/", name: "Babish Culinary Universe" },
      { href: "https://cooking.nytimes.com/", name: "NYT Cooking" },
    ],
  },
];

/**
 * `Activities` returns a list of `Activity` components,
 * defined in the following component. Be sure to replace
 * all of the information in this file (do not edit `Activity.tsx`
 * only edit list of `activities` above.)
 */
export default function Activities() {
  return (
    <>
      {/* TODO: with your info --> */}
      <h2 id="interests">How I spend my free time?</h2>
      <div className="interests-table-container">
        <table className="interests-table">
          <tbody>
            {activities.map((activity, index) => (
              <Activity
                key={index}
                imgSrc={activity.imgSrc}
                imgAlt={activity.imgAlt}
                title={activity.title}
                description={activity.description}
                quicklinks={activity.quicklinks}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
