import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Naše usluge"
            paragraph="Finansijske usluge na jednom mjestu. Pouzdana i savremena rješenja za plaćanja, transfere, analitiku transakcija i dostupne platne usluge."
            center
          />

          <div className="grid grid-cols-1 gap-x-4 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
