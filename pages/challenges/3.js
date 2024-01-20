// ChallengeDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from 'C:/Users/kelvi/Downloads/hashtag-generator-app/styles/ChallengeDetails.module.css';

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const videoFileName = 'WhatsApp Video 2024-01-20 at 8.55.57 PM.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  const challengeDetails = {
    title: `Challenge #${id}`,
    description: `Indulge in the world of flavors and join the excitement of our #FoodieChallenge!`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#FOODIE CHALLENGE</h1>
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
            Embark on a culinary adventure and explore the world of flavors with our #FoodieChallenge!
            🍔🍜
          </p>
        </div>

        <div className={styles.section}>
          <strong>Challenge:</strong>
          <p>
            Show off your culinary skills and create a mouthwatering dish that represents your
            unique style. Whether it's a savory delight, a sweet treat, or a creative fusion,
            let your creativity shine through your food creation.
          </p>
        </div>

        <div className={styles.section}>
          <strong>How to Participate:</strong>
          <ul>
            <li>Cook or bake a delicious dish that showcases your culinary prowess.</li>
            <li>Capture the cooking process and final presentation in a video.</li>
            <li>
              Don't forget to add the #FoodieChallenge hashtag to your video description and tag us
              to share the joy of good food!
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <p>#FoodieAdventure #CulinaryCreations #TastyTreats #GourmetMagic</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
