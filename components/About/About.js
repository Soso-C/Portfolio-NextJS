const About = () => {
  return (
    <>
      <span id="a-propos"></span>
      <div className="flex flex-col items-center justify-center w-full min-h-screen py-20 shadow-md bg-zinc-900">
        <div className="flex flex-col items-center justify-between h-full px-4 mx-auto max-w-7xl lg:flex-row lg:px-2">
          <div className="w-full h-full text-center lg:w-3/3">
            <h2 className="text-4xl font-bold text-orange-600 pb-14">
              {`Hello World, je m'apelle Sonny !`}
            </h2>
            <div className="text-justify">
              <p className="text-lg font-medium pb-14 lg:mx-auto lg:max-w-screen-lg">
                {`J'ai 27 ans, je suis passionné d'informatique et de
                jeux vidéo depuis tout jeune. J'aime me tenir informé de toutes
                nouvelles technologies (gaming, mobile, informatique).`}
              </p>

              <p className="text-lg font-medium pb-14 lg:mx-auto lg:max-w-screen-lg">
                {`Anciennement diplômé Développeur web (Bac +2) avec 
                Openclassrooms, où j'ai acquis des connaissances approfondies sur HTML, CSS et JavaScript en réalisant 7 projets professionnalisants. J'ai également appris à gérer des bases de données et à utiliser des frameworks populaires tels que React.js / Next.js / Tailwind CSS ainsi que d'autres stack front-end comme back-end en continuant de me former en autodidacte sur plusieurs projets.`}
              </p>

              <p className="text-lg font-medium pb-14 lg:mx-auto lg:max-w-screen-lg">
                {`Aujourd'hui je continue mes études pour pouvoir obtenir des compétences plus approfondies dans le domaine du développement en intégrant une formation de Concepteur Développeur D'Application d'une durée de 11 mois avec Human Booster`}
              </p>

              <p className="text-lg font-medium lg:mx-auto lg:max-w-screen-lg">
                {`Afin de mettre en pratique mes nouvelles compétences et de pouvoir valider mon titre Professionnel RNCP de niveau 6 (bac+3/4) en fin de formation, je suis à la recherche d'un stage du 12 décembre 2023 au 11 avril 2024 en tant que Concepteur Développeur D'Applications.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
