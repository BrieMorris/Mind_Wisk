import React from "react";
import "./AboutPage.css";
import artImage from "./art.png";
function AboutPage() {
  return (
    <div className="aboutcontainer">
      <div>
        <div className="h1-line">
          <h1>Our Story</h1>
        </div>
        <p>
          A few years ago, I rediscovered the simple exquisite joy of these head
          massagers at a friend's house party. The next month, I bought five
          online and went to a giant week-long gathering in the Nevada desert.
          Bringing a few MindWisks was the best idea I ever had! So many people
          were overjoyed to receive a few moments of pleasure. The refreshing
          tingles cooled them in the heat. The quick stimulation woke them when
          they were tired. The brief massage relaxed them when they were
          stressed out. The experience really surprised the few who had never
          seen one before. The few people who already knew they didn't enjoy the
          sensory overload gave those present a chance to realize how consent
          should be present in every relationship and interaction. I wanted to
          give this experience to more people, and not just people who'd attend
          a special event. Everyday people.
          <br></br>
          <img src={artImage} alt="Art" className="aboutImage" />
          <p className="imageCaption">
            Original dandelion seed artwork inspired by MindWisk!
          </p>
          <br></br>
          When I got home, I bought some more. I gave some to friends and
          partners. I took a few to a party. I gave them out to coworkers and to
          people with whom I wasn't close enough to exchange holiday gifts.
          People liked them. I bought more. I gave them all away. I found some
          fancy ones. Gave them away too. I brainstormed new names with friends
          one night and MindWisk was the final favorite moniker. I kept running
          out so I ordered more often. Sometimes people gave me money because
          they loved the idea of "making someone's day" for no real reason. In a
          few years, I'd personally given away a couple thousand of these little
          wonders. But that wasn't enough. So, I finally made a website to help
          me give away MindWisks and to allow others who like the idea to
          support the idea.
        </p>
      </div>
    </div>
  );
}
export default AboutPage;
