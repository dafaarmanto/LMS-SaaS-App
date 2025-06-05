import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura, the Brainy Explorer"
          topic="Neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy, the Number Wizard"
          topic="Derivatives and Integrals"
          subject="maths"
          duration={30}
          color="#ffdaff"
        />
        <CompanionCard
          id="789"
          name="Verba, the Vocabulary Builder"
          topic="English Literature"
          subject="language"
          duration={30}
          color="#44da6e"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
