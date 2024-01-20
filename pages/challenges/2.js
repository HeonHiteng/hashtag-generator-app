// ChallengeDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from 'C:/Users/kelvi/Downloads/hashtag-generator-app/styles/ChallengeDetails.module.css';

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const videoFileName = 'WhatsApp Video 2024-01-20 at 8.55.54 PM.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  const challengeDetails = {
    title: `Challenge #${id}`,
    description: `Show off your dance moves and join the excitement of our #DanceChallenge!`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#DANCE CHALLENGE</h1>
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
            Get ready to hit the dance floor and be a part of the groove with our #DanceChallenge!
            🕺💃
          </p>
        </div>

        <div className={styles.section}>
          <strong>Challenge:</strong>
          <p>
            Showcase your best dance moves and bring your unique style to the spotlight. Whether
            it's hip-hop, salsa, or a dance fusion, let your creativity shine through your dance
            performance.
          </p>
        </div>

        <div className={styles.section}>
          <strong>How to Participate:</strong>
          <ul>
            <li>Record a video featuring your incredible dance routine.</li>
            <li>Showcase your signature moves and choreography.</li>
            <li>
              Don't forget to add the #DanceChallenge hashtag to your video description and tag us
              to join the dance community!
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <p>
            Let's dance our way to joy and creativity! 💃🎶 Don't miss out on the fun – start
            creating your #DanceChallenge video now! 🚀🕺
          </p>
        </div>

        <div className={styles.section}>
          <p>#DanceParty #GrooveMasters #DanceFever #MoveToTheBeat</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
