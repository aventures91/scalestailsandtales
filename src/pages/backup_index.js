import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Scales, Tails, and Tales"
      description="Your go-to resource for bearded dragon care and tips.">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>test test test</h1>
        <p>Your ultimate guide to happy and healthy bearded dragons!</p>

        <section
          style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
          }}>
          <div
            id="content"
            className="prose lg:prose-lg"
            style={{ lineHeight: '1.6', textAlign: 'left' }}>
            <p>
              <strong>Scales &amp; Tails</strong> is your trusted guide to the world of bearded dragon care. We’re a
              passionate community of reptile enthusiasts, pet owners, and animal lovers dedicated to helping you keep
              your scaly friends happy and healthy.
            </p>
            <p>
              We believe caring for bearded dragons is more than just maintenance; it’s about understanding their unique
              needs, building a connection, and providing them with the best life possible. Our blog is here to share
              all you need to know, from the basics of bearded dragon care to expert tips and insights.
            </p>
            <p>
              Our mission is to educate, inspire, and empower bearded dragon owners to care for their pets with
              confidence. Whether you’re a new owner or a seasoned reptile enthusiast, we aim to make bearded dragon
              care accessible and enjoyable for everyone.
            </p>
            <h2>Through Our Blog, We Strive to:</h2>
            <ul>
              <li>
                <strong>Educate</strong>: <p>
  Provide well-researched <a href="/tags/guides" style={{ color: '#007bff' }}>guides</a>, 
  <a href="/tags/reviews" style={{ color: '#007bff' }}>reviews</a>, and practical care tips that cover everything from 
  <a href="/tags/diet" style={{ color: '#007bff' }}>diet</a> to 
  <a href="/tags/habitat" style={{ color: '#007bff' }}>habitat</a> setup, 
  <a href="/tags/behavior" style={{ color: '#007bff' }}>behavior</a>, and 
  <a href="/tags/health-care" style={{ color: '#007bff' }}>health care</a>.
</p>

                .
              </li>
              <li>
                <strong>Inspire</strong>: Share stories, fun facts, and photos to celebrate the unique personalities of
                bearded dragons.
              </li>
              <li>
                <strong>Support</strong>: Foster a welcoming community where pet owners can share experiences, ask
                questions, and learn from one another.
              </li>
            </ul>
            <h2>What You’ll Find Here:</h2>
            <ul>
              <li>
                <strong>Bearded Dragon Care Tips</strong>: Discover step-by-step guides on diet, habitat, and health to
                help you keep your beardie thriving.
              </li>
              <li>
                <strong>Behavior and Bonding</strong>: Learn about common bearded dragon behaviors and ways to bond with
                your pet.
              </li>
              <li>
                <strong>Product Reviews</strong>: Check out our reviews of popular pet care products to make informed
                choices for your beardie.
              </li>
              <li>
                <strong>Community Insights</strong>: Read stories and tips from fellow bearded dragon owners, sharing
                what works for them.
              </li>
            </ul>
            <h2>Our Team:</h2>
            <p>
              Our team is made up of dedicated bearded dragon owners, reptile enthusiasts, and pet care experts who are
              passionate about helping you give your dragon the best life. With backgrounds in animal care and reptile
              education, we bring you trusted information you can rely on.
            </p>
            <h2>Join the Scales &amp; Tails Community:</h2>
            <p>
              We invite you to join us on this journey of discovery and care. Explore the wonders of bearded dragon
              ownership, ask questions, share your experiences, and become part of a community that celebrates these
              incredible pets.
            </p>
            <p>
              Welcome to <strong>Scales &amp; Tails</strong>—where bearded dragon care is made simple, fun, and
              fulfilling.
            </p>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Explore Our Topics</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="/blog/getting-started" style={{ textDecoration: 'none' }}>
                🦎 Getting Started with Bearded Dragons
              </a>
            </li>
            <li>
              <a href="/blog/health-and-care" style={{ textDecoration: 'none' }}>
                🏥 Health & Care Tips
              </a>
            </li>
            <li>
              <a href="/blog/diet-and-feeding" style={{ textDecoration: 'none' }}>
                🍽️ Diet & Feeding Guidelines
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
