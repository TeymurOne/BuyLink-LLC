import Main from '../../components/About/Main';
import Mission from '../../components/About/Mission';
import TeamMember from '../../components/About/TeamMember';
import PagesLayout from '../../layout/PagesLayout';

const About = () => {
  return (
    <div className='w-full h-full bg-white'>
      <PagesLayout>
        <Main />
        <Mission />
        <TeamMember/>
      </PagesLayout>
    </div>
  );
};

export default About;
