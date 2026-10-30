import { RadialOrbitalTimelineDemo } from '@/components/ui/demo';

const cards = [
  {
    num: '01',
    img: '/images/item/use-1.png',
    title: 'Custom Software Development',
    desc: 'Tailored solutions designed specifically for your business needs, from concept to deployment with cutting-edge technologies.',
  },
  {
    num: '02',
    img: '/images/item/use-2.png',
    title: 'Cloud & Infrastructure Solutions',
    desc: 'Scalable cloud architecture and infrastructure management to optimize performance, security, and cost efficiency.',
  },
  {
    num: '03',
    img: '/images/item/use-3.png',
    title: 'DevOps & Automation',
    desc: 'Streamlined CI/CD pipelines and automation solutions to accelerate deployment and improve operational efficiency.',
  },
];

export default function Built() {
  return (
    <section id="built" className="built-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Right Side: Text Description */}
          <div className="w-full lg:w-[40%] text-left">
            <div className="about-statement-tag mb-8 !justify-start">
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Our Process</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            
            <h2 className="mb-6 !text-left">What’s Our Process</h2>

            <p className="mb-8 !text-left !px-0">
              We follow a systematic approach to deliver high-quality software solutions that meet your business needs.
            </p>

            <p className="mb-8 !text-left !px-0 font-bold text-xl">
              lead generation → qualification → proposal → negotiation → close.
            </p>

            <p className="mb-8 !text-left !px-0">
             Identify and attract potential customers through outreach, marketing. Evaluate leads against BANT criteria — budget, authority, need, and timeline. Present a tailored solution addressing the prospect's pain points and ROI. Align on pricing, terms, and scope. Handle objections and reach agreement. Finalise the deal, sign contracts, and hand off to onboarding.
            </p>
            
            {/* CTA Button */}
            <a href="#benefits" className="built-statement-btn">
              Explore More <span className="btn-arrow">↗</span>
            </a>
          </div>

          {/* Left Side: Radial Orbital Timeline */}
          <div className="w-full lg:w-[60%] relative overflow-hidden">
            <RadialOrbitalTimelineDemo />
          </div>

          
        </div>
      </div>
    </section>
  );
}
