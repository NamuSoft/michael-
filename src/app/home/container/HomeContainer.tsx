import { useState } from "react";
import { useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const [ currentFilter, setCurrentFilter ] = useState<string>("Show All");

  const [ currentFilter, setCurrentFilter ] = useState<string>("Show All");

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: {
      heroSectionModuleProps: {
        skills: [
          { name: "HTML5 & CSS3", level: 94, icon: "html5" },
          { name: "Bootstrap", level: 98, icon: "bootstrap" },
          { name: "SEO", level: 75, icon: "search" },
        ],
        credentials: [
          { value: 12, label: "YEARS OF EXPERIENCE", metric: "+" },
          { value: 20, label: "HOURS OF WORKING", metric: "k" },
          { value: 90, label: "PROJECTS DONE", metric: "+" },
        ],
        intro: { texts: ["HELLO THERE!", "I'M CHRISTINA GRAY"] },
        heading: { text: "ABOUT ME" },
      },
      portfolioSectionModuleProps: {
        heading: { text: "PORTFOLIO" },
        portfolio: {
          portfolios: [
            {
              name: "Glasses of Cocktail",
              image: "cocktail.webp",
              type: "Branding",
            },
            {
              name: "A Branch with Flowers",
              image: "branch.webp",
              type: "Mockup",
            },
            {
              name: "Orange Rose Flower",
              image: "rose.webp",
              type: "Mockup",
            },
            {
              name: "Green Plant on a Desk",
              image: "plant.webp",
              type: "Branding",
            },
          ],
          portfolioFilters: {
            filters: ["Show All", "Branding", "Mockup"],
            currentFilter,
            setCurrentFilter: (filter: string) => {
              console.log(filter);
              setCurrentFilter(filter);
            }
          },
        },
      },
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
