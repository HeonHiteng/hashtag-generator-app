// ChallengeDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from 'C:/Users/kelvi/Downloads/hashtag-generator-app/styles/ChallengeDetails.module.css';

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const videoFileName = 'WhatsApp Video 2024-01-19 at 4.02.55 PM.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  const challengeDetails = {
    title: `Challenge #${id}`,
    description: `Description for Challenge #${id}`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#CNY CHALLENGE</h1>
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
            Join us in celebrating the joy and traditions of Chinese New Year with our
            #CNYTransitionChallenge! 🎉✨
          </p>
        </div>

        <div className={styles.section}>
          <strong>Challenge:</strong>
          <p>
            Create a captivating transition video showcasing your Chinese New Year outfit
            transformation! Whether it's a stunning traditional attire or a modern twist, let your
            creativity shine.
          </p>
        </div>

        <div className={styles.section}>
          <strong>How to Participate:</strong>
          <ul>
            <li>Start your video with the "Before" look in your everyday attire.</li>
            <li>
              Use a creative transition to reveal your Chinese New Year outfit. This could be a
              spin, a blink, or any unique transition effect!
            </li>
            <li>
              Don't forget to add festive elements like red envelopes, lanterns, or any CNY
              decorations to enhance the vibe.
            </li>
          </ul>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
