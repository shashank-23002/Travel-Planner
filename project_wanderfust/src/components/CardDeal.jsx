import { card} from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Plan on the go with our <br className="sm:block hidden" /> Free travel app.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With WanderFust's mobile travel planner on Android and iOS, access and edit your trips wherever you go — even while offline.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src="https://images.unsplash.com/photo-1657548465923-b518a6508e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
