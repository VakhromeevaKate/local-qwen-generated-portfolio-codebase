import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { SkillList } from './components/SkillList/SkillList';
import { Footer } from './components/Footer/Footer';
import { NavigationItem } from './components/Header/NavigationItem';
import { Navigation } from './components/Header/Navigation';
import { Logo } from './components/Header/Logo';
import { SocialLink } from './components/Header/SocialLink';
import { HeaderSocial } from './components/Header/HeaderSocial';
import { SectionHeader } from './components/Section/SectionHeader';
import { SectionSubheader } from './components/Section/SectionSubheader';
import { SectionContent } from './components/Section/SectionContent';
import { FooterText } from './components/Footer/FooterText';
import { FooterSocial } from './components/Footer/FooterSocial';
import { FooterLink } from './components/Footer/FooterLink';
import './App.css';

export const App = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header>
        <Navigation>
          <NavigationItem to="/">Главная</NavigationItem>
          <NavigationItem to="/projects">Проекты</NavigationItem>
          <NavigationItem to="/skills">Навыки</NavigationItem>
          <NavigationItem to="/contact">Контакты</NavigationItem>
        </Navigation>
        <Logo>My Portfolio</Logo>
        <HeaderSocial>
          <SocialLink to="https://github.com">GitHub</SocialLink>
          <SocialLink to="https://linkedin.com">LinkedIn</SocialLink>
        </HeaderSocial>
      </Header>

      <Section id="home">
        <SectionHeader>
          <h1>Василий Иванов</h1>
        </SectionHeader>
        <SectionSubheader>
          <p>Фронтенд-разработчик</p>
        </SectionSubheader>
        <SectionSubheader>
          <p>Я фронтенд-разработчик с опытом в создании современных веб-приложений. Мой опыт включает разработку
          интерфейсов, оптимизацию производительности и интеграцию с бэкендами. Я стремлюсь к качественному коду и лучшим практикам разработки.</p>
        </SectionSubheader>
      </Section>

      <Section id="projects">
        <SectionHeader>
          <h2>Мои проекты</h2>
        </SectionHeader>
        <SectionContent>
          <div className="projects">
            <ProjectCard
              title="Проект 1"
              description="Описание первого проекта"
              demoLink="https://demo1.com"
              githubLink="https://github.com/project1"
            />
            <ProjectCard
              title="Проект 2"
              description="Описание второго проекта"
              demoLink="https://demo2.com"
              githubLink="https://github.com/project2"
            />
            <ProjectCard
              title="Проект 3"
              description="Описание третьего проекта"
              demoLink="https://demo3.com"
              githubLink="https://github.com/project3"
            />
            <ProjectCard
              title="Проект 4"
              description="Описание четвертого проекта"
              demoLink="https://demo4.com"
              githubLink="https://github.com/project4"
            />
          </div>
        </SectionContent>
      </Section>

      <Section id="skills">
        <SectionHeader>
          <h2>Мои навыки</h2>
        </SectionHeader>
        <SectionContent>
          <SkillList skills={['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS']} />
        </SectionContent>
      </Section>

      <Footer>
        <FooterText>
          <p>© 2025 My Portfolio. Все права защищены.</p>
        </FooterText>
        <FooterSocial>
          <FooterLink to="https://github.com">GitHub</FooterLink>
          <FooterLink to="https://linkedin.com">LinkedIn</FooterLink>
        </FooterSocial>
      </Footer>
    </div>
  );
};
