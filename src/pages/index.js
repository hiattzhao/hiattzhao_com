import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import "../components/font-awesome.min.css"
import "../components/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`hiatt`, `zhao`, `portfolio`]} />
    <div style={{ margin: `0 auto`, maxWidth: `300px`, marginBottom: `1.45rem`, border: `thick double black` }}>
    <Image />
    </div>
    <h2 style={{textAlign: `center`}}>Hello, I'm Hiatt!</h2>
    <p>I'm a curious creature who loves learning. I have an undergraduate degree in chemistry, completed the pre-med program (but didn't apply to medical school), obtained a master degree in finance, and finished an architecture certificate program at Harvard Graduate School of Design.</p>
    <p>My interests vary quite a bit as I often find myself reading positive psychology, design, and business books. I taught myself most of the things I need to create fantastic websites. These include HTML, CSS, Bootstrap, JavaScript, jQuery, AngularJS, React, PHP, MySQL, Oracle, SQL Server, WordPress, and others.</p>
    <p>Aside from web development, my other passion is photography. I'm known for my architecture reflection photographs, in addition to travel and nature photos.</p>
    <ul className="social">
      <li className="email"><a href="mailto:hiattzhao@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-square fa-lg"
          title="email"></i></a></li>
      <li className="facebook"><a href="https://www.facebook.com/hiattzhao" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-lg"
            title="facebook"></i></a></li>
      <li className="instagram"><a href="https://www.instagram.com/hiattzhao/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-lg"
            title="instagram"></i></a></li>
      <li className="linkedin"><a href="https://www.linkedin.com/in/hiattzhao" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-lg"
            title="linkedin"></i></a></li>
      <li className="github"><a href="https://github.com/hiattzhao" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-lg"
            title="github"></i></a></li>
      <li className="vimeo"><a href="https://vimeo.com/hiattzhao/" target="_blank" rel="noopener noreferrer"><i className="fa fa-vimeo-square fa-lg"
            title="vimeo"></i></a></li>
    </ul>
  </Layout>
)

export default IndexPage