
import {motion} from "framer-motion"

const TopicsSection = () => (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Topics Covered</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-lg">
        {[
          "Understanding Ministry",
          "Starting and Growing a New Ministry",
          "Supernatural Finance",
          "Ministry Administration and Leadership",
          "Maximizing Ministry Gifts and Graces",
          "Ministry Mistakes to Avoid",
          "Balanced Spiritual Life",
          "Technology & Social Media in Ministry",
          "Surviving Tough Times",
          "And lots more...",
        ].map((topic, index) => (
          <motion.li key={index} className="px-4 py-2 bg-gray-20 rounded-lg shadow-m  hover:bg-blac hover:text-whit transition-all duration-900 ease-in-out font-bold"
            whileHover={{ scale: 1.05 }}>
            - {topic}
          </motion.li>
        ))}
      </ul>
    </section>
  );

  export default TopicsSection;