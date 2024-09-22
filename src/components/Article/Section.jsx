import SectionAirPods from "./SectionAirPods";
import SectionAppleInteligence from "./SectionAppleInteligence";
import SectioniPad from "./SectioniPad";
import SectionMacBook from "./SectionMacBook";
import SectionMacBookPro from "./SectionMacbookPro";
import SectionWATCH from "./SectionWATCH";

const Section = () => {
  return (
    <div className="md:flex md:justify-center ">
      <div className="flex-wrap md:flex md:justify-center gap-4 max-w-[1920px]">
        <SectioniPad />
        <SectionMacBook />
        <SectionWATCH />
        <SectionMacBookPro />
        <SectionAirPods />
        <SectionAppleInteligence />
      </div>
    </div>
  );
};

export default Section;
