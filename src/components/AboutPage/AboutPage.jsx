import React from "react";
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutcontainer">
      <div>
        <h1 className="h1-line">Mission Statement</h1>
        <br></br>
        <h3>Okay, they're great. But really, why GIVE them away?</h3>

        <p>
          Think of those you love with whom you would share small things without
          ever expecting anything in return. Your family. Maybe a few close
          friends. What if we had we had that same giving attitude with a few
          more people. Or with our whole area. Or with everyone. We all know it
          feels good to help other people feel good. Being helped makes other
          people people want to help other people. We create more joy, which in
          turn creates more joy. It's surprisingly nice to unexpectedly receive
          something of value for free and it encourages us all to be more
          generous with everyone in our own lives. And it's so very simple.
        </p>
        <br></br>
        <div className="h1-line"></div>
        <h1 className="h1-line">Our Story</h1>
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
