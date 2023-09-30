import React from 'react'
import Layout from '../../Layout'
import about_top_section_image from '../../Layout/Alen-About-Us.webp';
import culture_img from '../../Layout//culture_img.png';

const aboutPage = () => {
  return (
    <>
    <Layout>
      <div className="sub_page_header">
        <div className="page_width">
            <div className="sub_page_header_content">
              <h1>About Us</h1>
            </div>
        </div>
      </div>
      <section className="about_top_section">
        <div className="page_width">
          <div className="about_top_section_content">
            <div className="top_left_section">
              <h2>At Alen, we believe wellness begins with pure air.</h2>
              <p>
              Alen is an Austin-based innovator of trusted and top-rated True HEPA air purification products—improving lives through safe, healthy, and worry-free air. 
              <br /><br />
              We earn thousands of 5-star customer reviews and top industry rankings for perfectly balancing superior airflow, quiet livability, and value. And Alen backs its commitment to every customer with the industry's only lifetime warranty and an in-house team of dedicated customer care experts.  
              <br /><br />
              Owning an Alen truly means <b>pure air for life—your life.</b>
              </p>
            </div>
            <div className="top_right_section">
              <img src={about_top_section_image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about_lockup_vision">
        <div className="page_width">
          <div className="about_lockup_vision_content">
            <div className="our_mission">
              <h3>Our Mission</h3>
              <p>Alen is dedicated to improving the quality of people’s lives by making the best air purification products on the planet.</p>
            </div>
            <div className="our_vision">
              <h3>Our Vision</h3>
              <p>To inspire a healthier life and provide peace of mind for everyone through clean and safe air.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about_culture_section">
        <div className="page_width">
          <div className="about_culture_section_content">
          <div className="culture_img_section">
              <img src={culture_img} alt="" />
            </div>
            <div className="culture_text_section">
              <h2>Our Culture</h2>
              <p>
              Much like our legendary HEPA air filters, our culture is incredibly close-knit and so much more powerful than the sum of its parts. We believe that by trusting each other, working hard, and delighting our customers, we'll always have something to celebrate.  
              <br /><br />
              We take our pure air mission seriously, but ourselves not so much. As teammates, we prioritize opportunities for learning, laughter, and personal growth. And we strive for, accountability, inclusivity, and work-life balance. We celebrate each other, and we live our values every day. 
              </p>
            </div>
          </div>
        </div>
      </section>
        <section className="about_value_section">
          <div className="page_width">
            <div className="about_value_content">
                <div className="about_value_list_1">
                  <div className="care">
                    <div className="colum1">
                      <h2>01</h2>
                    </div>
                    <div className="colum2">
                      <h3>Care:</h3>
                      <p>For our team, customers, and partners</p>
                    </div>
                  </div>
                  <div className="collaborate">
                    <div className="colum1">
                        <h2>02</h2>
                    </div>
                    <div className="colum2">
                        <h3>Collaborate:</h3>
                        <p>Work together to fulfill our vision and goals</p>
                    </div>
                  </div>
                </div>
                <div className="about_value_list_2">
                  <div className="imagine">
                    <div className="colum1">
                      <h2>03</h2>
                    </div>
                    <div className="colum2">
                      <h3>Imagine:</h3>
                      <p>For our team, customers, and partners</p>
                    </div>
                  </div>
                  <div className="adapt">
                    <div className="colum1">
                        <h2>04</h2>
                    </div>
                    <div className="colum2">
                        <h3>Adapt</h3>
                        <p>Work together to fulfill our vision and goals</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="page_width">
            <div className="blog_content">
              <h2>Care Beyond Pure Air: How Alen Gives Back</h2>
              <p>A family of coworkers committed to care and compassion</p>
              <div className="blog_section_1">
                <div className="blog_colum_1">
                  <h3>Donated 40 Alen purifiers to frontline ER doctors battling COVID-19</h3>
                </div>
                <div className="blog_colum_2">
                  <h3>Raised $7K+ for Austin Humane Society</h3>
                </div>
                <div className="blog_colum_3">
                  <h3>Donated purifier to customer fighting leukemia</h3>
                </div>
              </div>
              <div className="blog_section_2">
              <div className="blog_colum_1">
                <h3>Donated 20K Meals to Central Texas Food Bank</h3>
              </div>
              <div className="blog_colum_2">
                <h3>Donated 30,000+ PPE masks to local Austin businesses</h3>
              </div>
              <div className="blog_colum_3">
                <h3>Donated purifiers to classrooms across the U.S.</h3>
              </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
    </>
  )
}

export default aboutPage