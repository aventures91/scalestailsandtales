import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Scales & Tails" description="Your go-to guide for happy, healthy bearded dragons.">
      <header style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#f5f5f5' }}>
        <h1>Welcome to Scales & Tails!</h1>
        <p>Your go-to guide for happy, healthy bearded dragons.</p>
        <Link to="/blog" style={{ padding: '10px 20px', background: '#007BFF', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
          Read the Blog
        </Link>
      </header>
      <main style={{ padding: '2rem' }}>
        <section>
          <h2>About Us</h2>
          <p>Scales & Tails is your trusted resource for raising and caring for bearded dragons. Whether you're a beginner or an experienced owner, we’ve got you covered.</p>
          <Link to="/about" style={{ color: '#007BFF', textDecoration: 'underline' }}>Learn more about us →</Link>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>Latest Blog Posts</h2>
          <ul>
            <li><Link to="/blog/2024/November/11-7__How-to-set-up-a-habitat">How to Set Up a Habitat</Link></li>
            <li><Link to="/blog/2024/October/10-24__How-to-feed-your-bearded-dragon">How to Feed Your Bearded Dragon</Link></li>
            <li><Link to="/blog/2024/October/10-31__understanding-dragon-behaviour">Understanding Dragon Behavior</Link></li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
