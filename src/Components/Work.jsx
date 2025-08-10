// app/components/Work.jsx or app/work/page.jsx
import React from 'react';
import TextReveal from './TextReveal';
import WorkCard from './WorkCard';

const works = [
       {
              title: 'NOBI',
              year: '2025',
              image:
                     'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       {
              title: 'NOBI',
              year: '2026',
              image:
                     'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       {
              title: 'NOBI',
              year: '2026',
              image:
                     'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       {
              title: 'NOBI',
              year: '2026',
              image:
                     'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       {
              title: 'NOBI',
              year: '2026',
              image:
                     'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       {
              title: 'NOBI',
              year: '2026',
              image:
                     'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       },
       // Add more objects here if needed
];

const Work = () => {
       return (
              <section className="bg-zinc-600 text-white py-10 px-5 lg:px-8 font-[FontOne]">
                     <TextReveal>
                            <h1 className="text-5xl mb-6">Work <sup>(20+)</sup></h1>
                     </TextReveal>

                     <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {Array(1)
                                   .fill(works)
                                   .flat()
                                   .map((work, index) => (
                                          <WorkCard
                                                 key={index}
                                                 title={work.title}
                                                 year={work.year}
                                                 image={work.image}
                                          />
                                   ))}
                     </div>
              </section>
       );
};

export default Work;
