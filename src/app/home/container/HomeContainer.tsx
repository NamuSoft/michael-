import { useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { usePathname } from "next/navigation";

export const HomeContainer = () => {
  const [currentFilter, setCurrentFilter] = useState<string>("Show All");
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const pathname = usePathname();

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    sideBarComponentProps: {
      options: [
        {
          name: "ABOUT ME",
          href: "#about",
          active: pathname === "/home#about",
        },
        {
          name: "PORTFOLIO",
          href: "#portfolio",
          active: pathname === "/home#portfolio",
        },
        {
          name: "SERVICES",
          href: "#services",
          active: pathname === "/home#services",
        },
        {
          name: "TESTIMONIAL",
          href: "#testimonial",
          active: pathname === "/home#testimonial",
        },
        {
          name: "RESUME",
          href: "#resume",
          active: pathname === "/home#resume",
        },
        {
          name: "BLOG",
          href: "#blog",
          active: pathname === "/home#blog",
        },
        {
          name: "CONTACT",
          href: "#contact",
          active: pathname === "/home#contact",
        },
      ],
    },
    aboutSectionModuleProps: {
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
            type: "Branding" as const,
          },
          {
            name: "A Branch with Flowers",
            image: "branch.webp",
            type: "Mockup" as const,
          },
          {
            name: "Orange Rose Flower",
            image: "rose.webp",
            type: "Mockup" as const,
          },
          {
            name: "Green Plant on a Desk",
            image: "plant.webp",
            type: "Branding" as const,
          },
        ].filter(
          (portfolio) =>
            portfolio.type === currentFilter || currentFilter === "Show All"
        ),
        portfolioFilters: {
          filters: ["Show All", "Branding", "Mockup"],
          currentFilter,
          setCurrentFilter: (filter: string) => {
            setCurrentFilter(filter);
          },
        },
      },
    },
    servicesSectionModuleProps: {
      heading: { text: "SERVICES" },
      service: {
        services: [
          {
            index: "01",
            icon: "code",
            title: "WEB & MOBILE DEVELOPMENT",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            index: "02",
            icon: "laptop",
            title: "DIGITAL MARKETING",
            description:
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          },
          {
            index: "03",
            icon: "setting",
            title: "BRANDING & STRATEGY",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
          },
          {
            index: "04",
            icon: "user",
            title: "USER TESTING & PERSONAS",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
        ],
      },
    },
    testimonialSectionModuleProps: {
      heading: { text: "WHAT PEOPLE SAY", bgText: "TESTIMONIAL" },
      testimonial: {
        testimonials: [
          {
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: 5,
            user: {
              name: "Richart Styers",
              role: "CTO - FlaTheme",
              avatar: "richart.webp",
            },
          },
          {
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: 5,
            user: {
              name: "Sandra Radford",
              role: "Project Manager",
              avatar: "sandra.webp",
            },
          },
          {
            message:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: 5,
            user: {
              name: "Donald Ang",
              role: "Developer",
              avatar: "donald.webp",
            },
          },
        ],
        currentTestimonial,
      },
      onNavigateBackward: () => {
        if (currentTestimonial > 0)
          setCurrentTestimonial(currentTestimonial - 1);
      },
      onNavigateForward: () => {
        if (
          currentTestimonial <
          homeTemplateProps.testimonialSectionModuleProps.testimonial
            .testimonials.length -
            1
        )
          setCurrentTestimonial(currentTestimonial + 1);
      },
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
