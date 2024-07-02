import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
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
      },
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
