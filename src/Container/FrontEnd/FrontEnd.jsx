import React from 'react'
import './FrontEnd.css'
import {useNavigate} from 'react-router-dom'
import {Button,Navbar} from '../../Component';
// import Typewriter from "typewriter-effect";
import TypeWriterEffect from "react-typewriter-effect";






function FrontEnd() {
  let Navigate=useNavigate();

let JoinCommunitybtnStyle = {
  backgroundColor: "Black",
  color: "#ffff",
  padding: "15px",
  borderRadius: "2px",
  fontWeight: "Bold",
  cursor: "pointer",
}
 
 
    let JoinCommunity = () => {
   Navigate("/Auth");
   console.log("Community Joined..!");
 };


  return (
    <div className="main">
      <Navbar />

      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            Let's <span> {`Build`} </span> The Commmunity
          </h1>
          <p class="hero-paragraph">
       
          
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Source Sans Pro",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              startDelay={2000}
              multiText={[
                "Together We Can Learn",
                "We Can Grow",
                "And Build the Largest Community ",
                "In Pakistan...!",
              ]}
              loop={true}
              nextTextDelay={1000}
              typeSpeed={80}
            />
          </p>
          <div class="hero-options">
            {/* <a href="#" class="btn btn-developers">For developers</a> */}
            <Button
              val="Join The Community"
              styl={JoinCommunitybtnStyle}
              func={JoinCommunity}
            ></Button>
            {/* <a class="btn btn-businesses" onlClick={JoinCommunity}>Join the Community</a> */}
          </div>
        </div>
      </section>

      <section class="for-developers">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">For developers, by developers</h2>
            <div class="section-line"></div>
            <p class="section-description">
              Stack Overflow is an <a href="#">open community</a> for anyone
              that codes. We help you get answers to your toughest coding
              questions, share knowledge with your coworkers in private, and
              find your next dream job.
            </p>
          </div>
          <div class="options">
            <div class="option">
              <div class="option-icon">
                <img
                  src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"
                  alt="Public Q & A"
                />
              </div>
              <div class="option-title">Public Q&A</div>
              <div class="option-description">
                Get answers to more than 16.5 million questions and give back by
                sharing your knowledge with others.
                <a href="#">Sign up</a> for an account.
              </div>
              <div class="option-button">
                <a href="#" class="option-link btn btn-dark-blue">
                  Browse questions
                </a>
              </div>
            </div>
            <div class="option">
              <div class="option-icon">
                <img
                  src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7"
                  alt="Private Q & A"
                />
              </div>
              <div class="option-title">Public Q&A</div>
              <div class="option-description">
                Level up with Stack Overflow while you work. Share knowledge
                privately with your coworkers using our flagship Q&A engine.
              </div>
              <div class="option-button">
                <a href="#" class="option-link btn btn-orange">
                  Try for free
                </a>
              </div>
            </div>
            <div class="option">
              <div class="option-icon">
                <img
                  src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee"
                  alt="Browse jobs"
                />
              </div>
              <div class="option-title">Public Q&A</div>
              <div class="option-description">
                Find the right job through high quality listings and search for
                roles based on title, technology stack, salary, location, and
                more.
              </div>
              <div class="option-button">
                <a href="#" class="option-link btn btn-dark-blue">
                  Find a job
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="for-businesses">
        <div class="container">
          <div class="section-head">
            <h2 class="section-title">For businesses, by developers</h2>
            <div class="section-line"></div>
            <p class="section-description">
              Our mission is to help developers write the script of the future.
              This means helping you find and hire skilled developers for your
              business and providing them the tools they need to share knowledge
              and work effectively.
            </p>
          </div>

          <div class="options">
            <div class="option">
              <div class="option-icon">
                <img
                  src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e"
                  alt="Private Q&A"
                />
              </div>
              <div class="option-description">
                Quickly find and share internal knowledge with{" "}
                <a href="#" class="option-link">
                  Private Q&A
                </a>
              </div>
            </div>
            <div class="option">
              <div class="option-icon">
                <img
                  src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
                  alt="Talent solutions"
                />
              </div>
              <div class="option-description">
                Find the perfect candidate for your growing technical team with{" "}
                <a href="#" class="option-link">
                  Talent solutions
                </a>
              </div>
            </div>
            <div class="option">
              <div class="option-icon">
                <img
                  src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
                  alt=" Advertising platform"
                />
              </div>
              <div class="option-description">
                Accelerate the discovery of your products or services through
                our{" "}
                <a href="#" class="option-link">
                  Advertising platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="teams">
        <div class="container">
          <div class="teams-head">
            <h2 class="teams-title">
              Unlock siloed knowledge with Stack Overflow for Teams
            </h2>
            <p class="teams-description">
              Wikis, chat messages, or formal documentation for knowledge
              management aren’t effective. Our question and answer format is a
              proven approach for accessing the right information in less time.
            </p>
            <div class="teams-details">
              <a href="#" class="btn btn-orange">
                Learn More
              </a>
            </div>
          </div>

          <div class="teams-plan">
            <div class="card card-basic">
              <div class="card-header">
                <h2 class="plan-type">Basic</h2>
                <p class="plan-description">Private knowledge base for teams</p>
              </div>
              <div class="card-body">
                <div class="plan-price">
                  <div class="price">$6 USD</div>
                  <span class="per">per teammate / month</span>
                </div>
                <div class="plan-features">
                  <div class="plan-feature">
                    <i class="far fa-calendar-alt"></i>
                    <span class="plan-text">Free 30 day trial</span>
                  </div>
                  <div class="plan-feature">
                    <i class="fab fa-keycdn"></i>
                    <span class="plan-text">
                      Your own private space hosted on stackoverflow.com
                    </span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-archive"></i>
                    <span class="plan-text">Fully searchable archive</span>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-card">
                  Get started for free
                </a>
              </div>
            </div>

            <div class="card card-business">
              <div class="card-most-used">
                <span>MOST USED</span>
                <i class="fas fa-city"></i>
              </div>
              <div class="card-header">
                <h2 class="plan-type">Business</h2>
                <p class="plan-description">
                  Private knowledge base with SSO and premium features
                </p>
              </div>
              <div class="card-body">
                <div class="plan-price">
                  <div class="price">$12 USD</div>
                  <span class="per">per teammate / month</span>
                </div>
                <div class="plan-features">
                  <div class="plan-feature">
                    <i class="fas fa-key"></i>
                    <span class="plan-text">
                      Single sign-on (SSO) with SAML
                    </span>
                  </div>
                  <div class="plan-feature">
                    <i class="far fa-chart-bar"></i>
                    <span class="plan-text">Reporting and analytics</span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-plus-square"></i>
                    <span class="plan-text">Priority customer support</span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-star"></i>
                    <span class="plan-text">99.5% uptime</span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-plus"></i>
                    <span class="plan-text">
                      All the features of Basic tier
                    </span>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-card">
                  Get started
                </a>
              </div>
            </div>

            <div class="card card-enterprise">
              <div class="card-header">
                <h2 class="plan-type">Enterprise</h2>
                <p class="plan-description">
                  Standalone knowledge base with enhanced security and flexible
                  hosting
                </p>
              </div>
              <div class="card-body">
                <div class="plan-price">
                  <div class="price">Custom pricing </div>
                  <span class="per">Let’s talk about what you need</span>
                </div>
                <div class="plan-features">
                  <div class="plan-feature">
                    <i class="fas fa-key"></i>
                    <span class="plan-text">
                      Single sign-on with AD or SAML
                    </span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-mountain"></i>
                    <span class="plan-text">
                      Host on your cloud or servers – or our private managed
                      cloud
                    </span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-code"></i>
                    <span class="plan-text">Robust read and write API</span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-user"></i>
                    <span class="plan-text">
                      Your own customer success and community building
                      representative
                    </span>
                  </div>
                  <div class="plan-feature">
                    <i class="fas fa-star"></i>
                    <span class="plan-text">
                      99.5% uptime SLA and priority support
                    </span>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-card">
                  Request a demo
                </a>
              </div>
            </div>
          </div>

          <div class="teams-footer">
            <a class="teams-footer-item">
              <img
                src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910"
                alt=""
              />
              <div class="teams-footer-text">
                <strong>Leader</strong> <span>Summer 2020</span>{" "}
              </div>
            </a>
            <a class="teams-footer-item">
              <img
                src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910"
                alt=""
              />
              <div class="teams-footer-text">
                <strong>Users Love Us</strong>{" "}
              </div>
            </a>
            <a class="teams-footer-item">
              <img
                src="https://cdn.sstatic.net/Img/product/teams/endorsements/fastco.svg?v=5ebc802a76c7"
                alt=""
              />
              <div class="teams-footer-text">
                <strong>Most Innovative Companies</strong> <span>2019</span>{" "}
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="hire">
        <div class="container">
          <div class="hire-content">
            <div class="hire-item">
              <img
                src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
                alt=""
                class="hire-icon"
              />
              <h4 class="hire-item-title">Hire your technical talent</h4>
              <p class="hire-item-description">
                We help expand your technical hiring strategy to promote your
                employer brand and highlight relevant open roles to our
                community of over 100 million developers and technologists.
              </p>
              <a href="#" class="btn btn-orange">
                Stack Overflow Talent
              </a>
            </div>
            <div class="hire-item">
              <img
                src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
                alt=""
                class="hire-icon"
              />
              <h4 class="hire-item-title">Reach developers worldwide</h4>
              <p class="hire-item-description">
                Use the world’s largest resource for people who code to help you
                increase awareness and showcase your product or service across
                Stack Overflow’s network of Q&A sites.{" "}
              </p>
              <a href="#" class="btn btn-orange">
                Stack Overflow Advertising
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="questions">
        <div class="container">
          <div class="questions-content">
            <div class="questions-header">
              <h3 class="question-title">
                Questions are everywhere, answers are on Stack Overflow
              </h3>
            </div>
            <div class="questions-body">
              <div class="questions-body-items">
                <div class="questions-body-item" data-id="0">
                  <img
                    src="https://cdn.sstatic.net/Img/home/ask-a-question.svg?v=f4f2050b0297"
                    alt=""
                    class="question-item-icon"
                  />
                  <div class="question-item-text">Ask a question</div>
                  <div class="question-arrow-right"></div>
                </div>
                <div class="questions-body-item" data-id="1">
                  <img
                    src="https://cdn.sstatic.net/Img/home/votes.svg?v=748a8f48a8e2"
                    alt=""
                    class="question-item-icon"
                  />
                  <div class="question-item-text">Vote on everything</div>
                  <div class="question-arrow-right"></div>
                </div>
                <div class="questions-body-item" data-id="2">
                  <img
                    src="https://cdn.sstatic.net/Img/home/answer.svg?v=4cd8048a676c"
                    alt=""
                    class="question-item-icon"
                  />
                  <div class="question-item-text">Answer questions</div>
                  <div class="question-arrow-right"></div>
                </div>
              </div>
              <div class="questions-body-item-content">
                <img
                  src="https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=9d2eb0efdc17"
                  alt=""
                  class="question-item-content-img"
                />
                <h4 class="question-item-content-text">
                  Accept the answer which solved your problem to let others
                  benefit from the valuable information.
                </h4>
                <a href="#" class="btn btn-orange question-item-content-btn">
                  Create an account
                </a>
              </div>
              <div class="questions-body-items">
                <div class="questions-body-item" data-id="3">
                  <img
                    src="https://cdn.sstatic.net/Img/home/tags.svg?v=913379eb09eb"
                    alt=""
                    class="question-item-icon"
                  />
                  <div class="question-item-text">Tag your question</div>
                  <div class="question-arrow-left"></div>
                </div>
                <div class="questions-body-item" data-id="4">
                  <img
                    src="https://cdn.sstatic.net/Img/home/accept.svg?v=27d5be078970"
                    alt=""
                    class="question-item-icon"
                  />
                  <div class="question-item-text">Accept a answer</div>
                  <div class="question-arrow-left"></div>
                </div>
                <div class="questions-body-item" data-id="5">
                  <img
                    src="https://cdn.sstatic.net/Img/home/get-recognized.svg?v=3b339d9aa10c"
                    alt=""
                    class="question-item-icon"
                  />
                  <div class="question-item-text">Get recognized</div>
                  <div class="question-arrow-left"></div>
                </div>
              </div>
            </div>
            <div class="questions-footer">
              <h3 class="question-title">Learn and grow with Stack Overflow</h3>
              <div class="questions-grid">
                <div class="questions-grid-item">
                  <div class="grid-item-img">
                    <img
                      src="https://cdn.sstatic.net/Img/home/developer.svg?v=b930de7967a7"
                      alt=""
                    />
                  </div>
                  <h4 class="grid-item-title">
                    Write the script of the future
                  </h4>
                  <p class="grid-item-description">
                    Get your coding questions answered to learn, build, and
                    level up whether you’re beginning with
                    <a href="#">JavaScript</a> or a <a href="#">React</a>{" "}
                    professional.
                  </p>
                </div>
                <div class="questions-grid-item">
                  <div class="grid-item-img">
                    <img
                      src="https://cdn.sstatic.net/Img/home/open-source.svg?v=847b604fd2ab"
                      alt=""
                    />
                  </div>
                  <h4 class="grid-item-title">Support open source</h4>
                  <p class="grid-item-description">
                    Reach users of your project by following tags, answering
                    newcomer questions, and empowering experts in the community.
                    <a href="#"> Read the curl project creator’s story.</a>
                  </p>
                </div>
                <div class="questions-grid-item">
                  <div class="grid-item-img">
                    <img
                      src="https://cdn.sstatic.net/Img/home/advocate.svg?v=4b03cfb93502"
                      alt=""
                    />
                  </div>
                  <h4 class="grid-item-title">Acquire and share knowledge</h4>
                  <p class="grid-item-description">
                    Answer questions and <a href="#">gain insights</a> from an
                    audience of developers using your technology on Stack
                    Overflow.
                  </p>
                </div>
                <div class="questions-grid-item">
                  <div class="grid-item-img">
                    <img
                      src="https://cdn.sstatic.net/Img/home/career-switcher.svg?v=a41416ff19df"
                      alt=""
                    />
                  </div>
                  <h4 class="grid-item-title">Find career opportunities</h4>
                  <p class="grid-item-description">
                    Create a profile that shows off your expertise and
                    credentials to help you make your next move. Start your
                    <a href="#">Developer Story</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="jobs">
        <div class="container">
          <div class="jobs-content">
            <h3 class="jobs-title">Looking for a job?</h3>
            <div class="jobs-body">
              <div class="jobs-items">
                <div class="column">
                  <div class="jobs-item">
                    <img
                      src="https://cdn.sstatic.net/Img/home/jobs-tech.svg?v=42f011c01763"
                      alt=""
                      class="jobs-item-img"
                    />
                    <p class="jobs-item-description">
                      Browse jobs by technology
                    </p>
                  </div>
                  <div class="jobs-item">
                    <img
                      src="https://cdn.sstatic.net/Img/home/jobs-salary.svg?v=401840ff8931"
                      alt=""
                      class="jobs-item-img"
                    />
                    <p class="jobs-item-description">Browse jobs by salary</p>
                  </div>
                </div>
                <div class="column">
                  <div class="jobs-item">
                    <img
                      src="https://cdn.sstatic.net/Img/home/jobs-visa.svg?v=1f3acc6dc772"
                      alt=""
                      class="jobs-item-img"
                    />
                    <p class="jobs-item-description">
                      Browse jobs by visa sponsorship
                    </p>
                  </div>
                  <div class="jobs-item">
                    <img
                      src="https://cdn.sstatic.net/Img/home/jobs-remote.svg?v=a4b4d1b5a80c"
                      alt=""
                      class="jobs-item-img"
                    />
                    <p class="jobs-item-description">
                      Browse remote-friendly jobs
                    </p>
                  </div>
                </div>
              </div>
              <div class="jobs-btn">
                <div class="btn btn-orange jobs-btn">View all jobs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <img
          src="https://cdn.sstatic.net/Img/home/robot.svg?v=dfa16a330cbd"
          alt=""
          class="footer-robot-img"
        />
        <div class="container">
          <div class="footer-content">
            <div class="footer-icon">
              <i class="fab fa-stack-overflow"></i>
            </div>
            <div class="footer-nav">
              <div class="footer-nav-col">
                <div class="footer-links-title">
                  <a href="#">Stack Overflow</a>
                </div>
                <ul class="footer-links">
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Questions
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Jobs
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Developer Jobs Directory
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Salary Calculator
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Help
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Mobile
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Disable Responsiveness
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-nav-col">
                <div class="footer-links-title">
                  <a href="#">Products</a>
                </div>
                <ul class="footer-links">
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Teams
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Talent
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Advertising
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Enterprise
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-nav-col">
                <div class="footer-links-title">
                  <a href="#">Company</a>
                </div>
                <ul class="footer-links">
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      About
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Press
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Work Here
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Legal
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-nav-col">
                <div class="footer-links-title">
                  <a href="#">Stack Exchange Network</a>
                </div>
                <ul class="footer-links">
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Technology
                    </a>
                    <div class="footer-arrow-icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Life / Arts
                    </a>
                    <div class="footer-arrow-icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Culture / Recreation
                    </a>
                    <div class="footer-arrow-icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Science
                    </a>
                    <div class="footer-arrow-icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </li>
                  <li class="footer-link-item">
                    <a href="#" class="footer-link">
                      Other
                    </a>
                    <div class="footer-arrow-icon">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-another-links">
              <div class="social-media">
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </div>
              <div class="copyright">
                <p>
                  site design / logo © 2020 Stack Exchange Inc; user
                  contributions licensed under{" "}
                  <a href="https://stackoverflow.com/help/licensing">
                    cc by-sa
                  </a>
                  . rev 2020.10.2.37725
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FrontEnd