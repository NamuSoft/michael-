import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: {
      skills: [
        { name: "HTML5 & CSS3", level: 94, icon: "html5" },
        { name: "Bootstrap", level: 98, icon: "bootstrap" },
        { name: "SEO", level: 75, icon: "search" }
      ],
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
