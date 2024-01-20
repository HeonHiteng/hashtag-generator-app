// ChallengeDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from 'C:/Users/kelvi/Downloads/hashtag-generator-app/styles/ChallengeDetails.module.css';

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const videoFileName = 'WhatsApp Video 2024-01-20 at 8.56.03 PM.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  const challengeDetails = {
    title: `Challenge #${id}`,
    description: `Get ready to break a sweat and join the excitement of our #FitnessChallenge!`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#FITNESS CHALLENGE</h1>
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
            Lace up those sneakers and get ready to boost your fitness levels with our
            #FitnessChallenge! 💪🏋️‍♀️
          </p>
        </div>

        <div className={styles.section}>
          <strong>Challenge:</strong>
          <p>
            Whether it's cardio, strength training, or a unique fitness routine, showcase your
            workout prowess and inspire others to join the fitness journey.
          </p>
        </div>

        <div className={styles.section}>
          <strong>How to Participate:</strong>
          <ul>
            <li>Record a video of your fitness routine or workout session.</li>
            <li>Showcase different exercises and share your fitness tips.</li>
            <li>
              Don't forget to add the #FitnessChallenge hashtag to your video description and tag us
              to inspire others!
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <p>
            Let's sculpt those muscles and achieve fitness goals together! 🏃‍♂️💦 Don't miss out on
            the fun – start your #FitnessChallenge video now! 🚀🔥
          </p>
        </div>

        <div className={styles.section}>
          <p>#FitFam #SweatItOut #FitnessJourney #HealthyLiving</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
