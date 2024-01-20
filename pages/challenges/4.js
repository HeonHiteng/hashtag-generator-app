// ChallengeDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from 'C:/Users/kelvi/Downloads/hashtag-generator-app/styles/ChallengeDetails.module.css';

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const videoFileName = 'WhatsApp Video 2024-01-20 at 8.55.59 PM.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  const challengeDetails = {
    title: `Challenge #${id}`,
    description: `Embark on a journey of discovery and join the excitement of our #TravelChallenge!`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#TRAVEL CHALLENGE</h1>
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src={videoFilePath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.description}>
        <div className={styles.section}>
          <strong>Description:</strong>
          <p>
            Pack your bags and get ready for an adventure with our #TravelChallenge! 🌍✈️
          </p>
        </div>

        <div className={styles.section}>
          <strong>Challenge:</strong>
          <p>
            Share the beauty of your travel experiences by creating a captivating video. Whether it's
            a scenic destination, cultural exploration, or a thrilling journey, let your wanderlust
            shine through your travel story.
          </p>
        </div>

        <div className={styles.section}>
          <strong>How to Participate:</strong>
          <ul>
            <li>Compile your travel footage into an engaging video.</li>
            <li>Highlight the most memorable moments and places you've visited.</li>
            <li>
              Don't forget to add the #TravelChallenge hashtag to your video description and tag us
              to share the adventure!
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <p>
            Let's explore the world together! 🌏🚀 Don't miss out on the fun – start creating your
            #TravelChallenge video now! ✨🎒
          </p>
        </div>

        <div className={styles.section}>
          <p>#AdventureAwaits #ExploreWithUs #WanderlustDreams #TravelMagic</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
