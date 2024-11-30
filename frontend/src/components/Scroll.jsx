import React from 'react'
import Marquee from 'react-fast-marquee';
import '../css/Scroll.css'; // Ensure this CSS file includes dark theme styles

function Scroll() {
  return (
    <div className="container scroll-container">
      <div className="title text-center mb-4">
        <h1 className="text-3xl bg-pastel-green text-dark-teal font-bold mt-2">FAQs</h1>
      </div>

      <div className="w-full overflow-hidden">
        <Marquee direction="right" speed={35}>
          <div className="bg-grey-900 faq-wrapper flex-shrink-0 mx-4">
            <div className="text-dark-teal bg-pastel-green faq-item">
              <h2 className="faq-question font-bold">How can technology be used to support student-centered learning?</h2>
              <p className="faq-answer">
                When students are able to use a software program that allows them to practice skills and concepts in a virtual environment, they have the opportunity to not only learn those skills but also practice them in a safe way without having to worry about negative consequences.</p>
            </div>
            <div className="text-dark-teal bg-pastel-green faq-item">
              <h2 className="faq-question font-bold">How does technology use in education affect student learning?</h2>
              <p className="faq-answer">
                Digital education provides the flexibility for students to learn from anywhere, especially during situations like lockdowns. Platforms like YouTube and Google offer a vast array of educational resources that can assist in understanding difficult concepts.</p>
            </div>
            <div className="text-dark-teal bg-pastel-green faq-item">
              <h2 className="faq-question font-bold">Does use of technology help kids learn and grow?</h2>
              <p className="faq-answer">
                Technology sure has a lot of perks, but one cannot ignore the ill effects too. Yes, it is true that technology helps a child to develop more, but let it be the last resort, let him apply his brains by himself first.</p>
            </div>
            <div className="text-dark-teal bg-pastel-green faq-item">
              <h2 className="faq-question font-bold">What are the uses of educational technology?</h2>
              <p className="faq-answer">
                Technology is used in education is the connection of all students to the same textbooks. With textbooks being made available online on different websites, students and teachers can access, download, and share the books at all times.</p>
            </div>
            <div className="text-dark-teal bg-pastel-green faq-item">
              <h2 className="faq-question font-bold">How is technology used in education?</h2>
              <p className="faq-answer">
                Educational and Assistive Technology to help students to access and participate in class: Dragon Dictate, Kurzweil, Mindview, Audacity, Quizlet, Socrative.Business support tools for the business office and other administrative tasks.</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Scroll
